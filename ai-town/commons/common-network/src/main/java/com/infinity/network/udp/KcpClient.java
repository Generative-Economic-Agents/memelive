/*
 * kcp客户端
 */
package com.infinity.network.udp;

import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.ByteBuf;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.DatagramPacket;
import io.netty.channel.socket.nio.NioDatagramChannel;

import java.net.InetSocketAddress;

public abstract class KcpClient implements Output, KcpListener, Runnable {
    private final NioDatagramChannel channel;
    private final InetSocketAddress addr;
    private int nodelay;
    private int interval = Kcp.IKCP_INTERVAL;
    private int resend;
    private int nc;
    private int sndwnd = Kcp.IKCP_WND_SND;
    private int rcvwnd = Kcp.IKCP_WND_RCV;
    private int mtu = Kcp.IKCP_MTU_DEF;
    private int conv = (int) (Math.random() * Integer.MAX_VALUE);
    private boolean stream;
    private int minRto = Kcp.IKCP_RTO_MIN;
    private long timeout;
    private KcpOnUdp kcp;
    private volatile boolean running;
    private final Object waitLock = new Object();
    private InetSocketAddress remote;
    private final NioEventLoopGroup nioEventLoopGroup;

    /**
     * client
     */
    public KcpClient() {
        this(0);
    }

    /**
     * 客户端
     */
    public KcpClient(int port) {
        nioEventLoopGroup = new NioEventLoopGroup();
        Bootstrap bootstrap = new Bootstrap();
        bootstrap.channel(NioDatagramChannel.class);
        bootstrap.group(nioEventLoopGroup);
        bootstrap.handler(new ChannelInitializer<NioDatagramChannel>() {
            @Override
            protected void initChannel(NioDatagramChannel ch) throws Exception {
                ChannelPipeline cp = ch.pipeline();
                cp.addLast(new ChannelInboundHandlerAdapter() {
                    @Override
                    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
                        DatagramPacket dp = (DatagramPacket) msg;
                        KcpClient.this.onReceive(dp);
                    }

                    @Override
                    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
                        KcpClient.this.handleException(cause, null);
                        KcpClient.this.close();
                    }
                });
            }
        });
        ChannelFuture sync = bootstrap.bind(port).syncUninterruptibly();
        channel = (NioDatagramChannel) sync.channel();
        addr = channel.localAddress();
    }

    /**
     * fastest: ikcp_nodelay(kcp, 1, 20, 2, 1) nodelay: 0:disable(default),
     * 1:enable interval: internal update timer interval in millisec, default is
     * 100ms resend: 0:disable fast resend(default), 1:enable fast resend nc:
     * 0:normal congestion control(default), 1:disable congestion control
     */
    public void noDelay(int nodelay, int interval, int resend, int nc) {
        this.nodelay = nodelay;
        this.interval = interval;
        this.resend = resend;
        this.nc = nc;
    }

    /**
     * set maximum window size: sndwnd=32, rcvwnd=32 by default
     */
    public void wndSize(int sndwnd, int rcvwnd) {
        this.sndwnd = sndwnd;
        this.rcvwnd = rcvwnd;
    }

    /**
     * change MTU size, default is 1400
     */
    public void setMtu(int mtu) {
        this.mtu = mtu;
    }

    /**
     * conv
     */
    public void setConv(int conv) {
        this.conv = conv;
    }

    /**
     * stream mode
     */
    public void setStream(boolean stream) {
        this.stream = stream;
    }

    public boolean isStream() {
        return stream;
    }

    public void setMinRto(int minRto) {
        this.minRto = minRto;
    }

    public void setTimeout(long timeout) {
        this.timeout = timeout;
    }

    public long getTimeout() {
        return this.timeout;
    }

    /**
     * 固定连接到一个服务器地址,只会处理此地址的消息
     */
    public void connect(InetSocketAddress addr) {
        this.remote = addr;
        this.channel.connect(addr);
    }

    @Override
    public void out(ByteBuf msg, Kcp kcp, Object user) {
        DatagramPacket temp = new DatagramPacket(msg, (InetSocketAddress) user, this.addr);
        this.channel.writeAndFlush(temp);
    }

    @Override
    public void handleClose(KcpOnUdp kcp) {
        this.close();
    }

    /**
     * 收到服务器消息
     */
    private void onReceive(DatagramPacket dp) {
        if (this.kcp != null && this.running) {
            this.kcp.input(dp.content());
            synchronized (this.waitLock) {
                this.waitLock.notify();
            }
        } else {
            dp.release();
        }
    }

    /**
     * 关掉
     */
    public void close() {
        if (this.running) {
            this.running = false;
            nioEventLoopGroup.shutdownGracefully();
        }
    }

    /**
     * 发送消息
     */
    public void send(ByteBuf bb) {
        if (this.kcp != null) {
            this.kcp.send(bb);
            synchronized (this.waitLock) {
                this.waitLock.notify();
            }
        }
    }

    /**
     * 开启线程处理kcp状态
     */
    public void start() {
        if (!this.running) {
            this.running = true;
            this.kcp = new KcpOnUdp(this, remote, addr, this);
            this.kcp.noDelay(nodelay, interval, resend, nc);
            this.kcp.wndSize(sndwnd, rcvwnd);
            this.kcp.setTimeout(timeout);
            this.kcp.setMtu(mtu);
            this.kcp.setConv(conv);
            this.kcp.setStream(stream);
            this.kcp.setMinRto(minRto);
            Thread t = new Thread(this);
            t.setName("kcp client thread");
            t.start();
        }
    }

    @Override
    public void run() {
        long start, end;
        while (running) {
            start = System.currentTimeMillis();
            if (kcp.isClosed()) {
                this.running = false;
                continue;
            }
            kcp.update();
            end = System.currentTimeMillis();
            if (end - start < interval) {
                synchronized (waitLock) {
                    try {
                        waitLock.wait(this.interval - end + start);
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
        this.release();
        nioEventLoopGroup.shutdownGracefully();
        this.channel.close();
    }

    /**
     * 释放内存
     */
    private void release() {
        this.kcp.release();
    }
}
