System.register(["__unresolved_0", "cc", "reconnecting-websocket", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, ReconnectingWebSocket, network, observer, socket, EventType, showMsg2, Log, GlobalConfig, _dec, _class, _crd, ccclass, property, TAG, NetworkCtrl;

  function _reportPossibleCrUseOfReconnectingWebSocket(extras) {
    _reporterNs.report("ReconnectingWebSocket", "reconnecting-websocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../src/model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../src/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../src/core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../src/game/config/GlobalConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
    }, function (_reconnectingWebsocket) {
      ReconnectingWebSocket = _reconnectingWebsocket.default;
    }, function (_unresolved_2) {
      network = _unresolved_2.network;
    }, function (_unresolved_3) {
      observer = _unresolved_3.observer;
      socket = _unresolved_3.socket;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      showMsg2 = _unresolved_5.showMsg2;
    }, function (_unresolved_6) {
      Log = _unresolved_6.default;
    }, function (_unresolved_7) {
      GlobalConfig = _unresolved_7.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b4f5mwy11Bl7RSImxjHp/i", "NetworkCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Asset', 'assert', 'loader', 'sys', 'assetManager', 'director']);

      ({
        ccclass,
        property
      } = _decorator);
      // imported from socket-io.js
      TAG = 'NetworkCtrl';

      _export("NetworkCtrl", NetworkCtrl = (_dec = ccclass('NetworkCtrl'), _dec(_class = class NetworkCtrl {
        // use this for initialization
        constructor() {
          this._reconnectCount = 0;
          this._wsiSendBinary = null;
          this._sioClient = null;
          this.tag = '';
          this._url = "";
          this.heartbeatInterval = 60000;
          this.heartbeatTimer = void 0;
          var currentURL = window.location.href;

          if (currentURL.indexOf("localhost") != -1 || currentURL.indexOf("192.168") != -1) {
            this._url = "ws://192.168.39.19:8686"; //本地
            //this._url = "wss://13.214.33.171:8989"; //windows
            //this._url = "wss://www.infinitytest.cc:8989"
            //this._url = "ws://44.200.143.84:8989"; //linux
            //this._url = "wss://aitown.infinitytest.cc/api/ws"
            //this._url = "wss://cat.infinityg.ai/api/ws"
            //this._url = "wss://aitown.infinitytest.cc/api/ws"

            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.testTools = true;
          } else {
            //this._url = "wss://www.infinitytest.cc:8989"
            //this._url = "wss://cat.infinityg.ai/api/ws"
            //this._url = "wss://cat.infinitytest.cc/api/ws"
            this._url = "wss://aitown.infinitytest.cc/api/ws";
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.testTools = false;
          }

          this._wsiSendBinary = null;
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, "socket waiting...");
          this.prepareWebSocket();
          this.startHeartbeat();
        }

        startHeartbeat() {
          // if (this.heartbeatTimer) {
          //   clearInterval(this.heartbeatTimer);
          // }
          this.heartbeatTimer = setInterval(() => {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'send heart pin');
            this.sendWebSocketBinary({
              "requestId": 111110,
              "command": 99996,
              "msg": "1"
            }); // 假设服务器用 'pong' 响应心跳
          }, this.heartbeatInterval);
        }

        onDestroy() {
          var wsiSendBinary = this._wsiSendBinary;

          if (wsiSendBinary) {
            wsiSendBinary.onopen = null;
            wsiSendBinary.onmessage = null;
            wsiSendBinary.onerror = null;
            wsiSendBinary.onclose = null;
            wsiSendBinary.close();
          }
        }

        prepareWebSocket() {
          var self = this;
          var websocketLabel = "";
          var respLabel = "";
          var url = this._url; // if (assetManager.cacheManager) {
          //     url = assetManager.cacheManager.getCache(url) || assetManager.cacheManager.getTemp(url) || url;
          // }
          // We should pass the cacert to libwebsockets used in native platform, otherwise the wss connection would be closed.
          // @ts-ignore

          this._wsiSendBinary = new (_crd && ReconnectingWebSocket === void 0 ? (_reportPossibleCrUseOfReconnectingWebSocket({
            error: Error()
          }), ReconnectingWebSocket) : ReconnectingWebSocket)(url, [], {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000 + Math.random() * 4000,
            reconnectionDelayGrowFactor: 1.3,
            minUptime: 5000,
            connectionTimeout: 4000,
            maxRetries: Infinity,
            maxEnqueuedMessages: Infinity,
            startClosed: false,
            debug: false
          });
          this._wsiSendBinary.retryCount;
          var _wsiSend = this._wsiSendBinary; // this._wsiSendBinary = new WebSocket('wss://echo.websocket.events', [], url);

          this._wsiSendBinary.binaryType = 'arraybuffer';

          this._wsiSendBinary.onopen = function (evt) {
            respLabel = 'Opened!';
            websocketLabel = 'WebSocket: onopen';
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, websocketLabel);

            if (director.getScene().name === 'town') {
              var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                error: Error()
              }), network) : network).LoginRequest();
              json.requestId = 0;
              json.type = 1;
              json.command = 10000;
              json.data.avatar = "";
              json.data.clientOs = "";
              json.data.loginType = 1;
              json.data.name = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.playername;
              json.data.nickName = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.nickName;
              json.data.userId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.userId;
              json.data.password = "123";
              json.data.timeZone = 0;
              (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                error: Error()
              }), socket) : socket).sendWebSocketBinary(json);
            }

            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SOCKET_ONOPEN);
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasInitGame = true;
          };

          this._wsiSendBinary.onmessage = this.onmessage;

          this._wsiSendBinary.onerror = function (evt) {
            if (this._wsiSendBinary) {
              this._wsiSendBinary.reconnect();
            }

            websocketLabel = 'WebSocket: onerror';
            respLabel = 'Error!';
          };

          this._wsiSendBinary.onclose = function (evt) {// _wsiSend = this._wsiSendBinary = new ReconnectingWebSocket(url, [], {
            //     maxReconnectionDelay: 10000,
            //     minReconnectionDelay: 1000 + Math.random() * 4000,
            //     reconnectionDelayGrowFactor: 1.3,
            //     minUptime: 5000,
            //     connectionTimeout: 4000,
            //     maxRetries: Infinity,
            //     maxEnqueuedMessages: Infinity,
            //     startClosed: false,
            //     debug: false,
            // });
            // _wsiSend.onmessage =this.onmessage;
            // websocketLabel = 'WebSocket: onclose'
            // // After close, it's no longer possible to use it again,
            // // if you want to send another request, you need to create a new websocket instance
            // //self._wsiSendBinary = null;
            // respLabel = 'Close!';
            //this._wsiSendBinary.reconnect()
          };
        }
        /**
         * 消息响应
         * @param evt 
         */


        onmessage(evt) {
          // const binary = new Uint8Array(evt.data);
          var binaryStr = 'response bin msg: '; // let str = '0x';
          // const hexMap = '0123456789ABCDEF'.split('');
          // assert(hexMap.length == 16);
          // for (let i = 0; i < binary.length; i++) {
          //     str += hexMap[binary[i] >> 4];
          //     str += hexMap[binary[i] & 0x0F];
          // }

          var c = evt.data;
          binaryStr += c;
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, binaryStr); // c = c.replace(/\\/g, "");

          c = JSON.parse(c);

          if (c) {
            if (c.code == 10019) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)(c.message);
            } else if (c.code == 99998) {}
          }

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONMESSAGE, c);
        }

        /**
         * 发送消息
         * @returns 
         */
        sendWebSocketBinary(req) {
          var websocketLabel = "";

          if (!this._wsiSendBinary) {
            return;
          }

          if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
            websocketLabel = 'WebSocket: sendbinary';
            req["requestId"] = Date.now() + Math.floor(Math.random() * 100);
            var buf = JSON.stringify(req);
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, 'websocket::', buf); //--------

            var arrData = new Uint16Array(buf.length);

            for (var i = 0; i < buf.length; i++) {
              arrData[i] = buf.charCodeAt(i);
            } // this._wsiSendBinary.send(arrData.buffer);
            //------------
            // let p: Player = { name: "hello", score: 10 };
            // this._wsiSendBinary.send(encodePlayer(p));


            this._wsiSendBinary.send(buf);
          } else {
            var warningStr = 'send binary websocket instance wasn\'t ready...';
            websocketLabel = 'WebSocket: not ready';
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, websocketLabel); // this.scheduleOnce(() => {
            //     this.sendWebSocketBinary();
            // }, 1);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dd6e5a931868513d7048bbb6c1821e38cf6c154.js.map