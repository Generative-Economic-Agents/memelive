## JAVA服务端说明

### 一、代码工程说明

1. gateway: 游戏网关, 负责游戏客户端的连接请求和数据的转发；

2. platform: 平台服务，负责玩家登录、NPC数据处理；以及与python服务的数据同步

3. chat: 聊天服务；负责客户端发送的聊天记录存储和消息广播

4. quartz：定时服务：种植间隔8小时后自动通知python来收割等定时服务

5. telegram:  telegram的相关代码；目前还用不到。

   

### 二.开发环境准备

1. 开发工具：IDEA，版本2018或以上
2. JDK版本：JDK14
3. Maven版本：apache-maven-3.6.0 或以上
4. 数据库：mariadb-10.6.4或者以上
5. Redis：没有要求，目前测试服务器上的版本：6.0.16



### 三.建立数据库和表

> 数据库搭建好后，需要先创建3个数据库
>
> 数据库脚本在代码的 **sql** 文件夹下

#### 1. platform工程对应的数据库：

```mysql
#第一步：创建数据库：
CREATE DATABASE IF NOT EXISTS aitown;

#第二步切换到aitown 数据：
use aitown;
#第三步：执行代码路径下的脚本：
sql/platform.sql
#执行代码路径下：
sql/telegram.sql
```

#### 2. chat工程对应的数据库：

```mysql
#第一步：创建数据库：
CREATE DATABASE IF NOT EXISTS aitown-chat;

#第二步切换到aitown-chat数据：
use aitown-chat;
#执行代码路径下的脚步：
sql/chat.sql
```

#### 3. quartz工程对应的数据库：

```mysql
#第一步：创建数据库：
CREATE DATABASE IF NOT EXISTS aitown-quartz;

#第二步切换到aitown-quartz数据：：
use aitown-quartz;
#执行代码路径下：
quartz/sql/tables_mysql.sql
```



### 四.修改代码的配置

> 代码所有的配置在代码路径下**config** 目录下； 配置的文件命令格式均以：**application-工程名.yml**  格式命令

#### 1.application-platform.yml

```java
1. 修改数据库的IP地址、用户名、密码
2. 修改redis的IP地址和密码
```

#### 2.application-chat.yml

```java
1. 修改数据库的IP地址、用户名、密码
2. 修改redis的IP地址和密码
```

#### 3.quartz.properties

> quartz 项目对应的配置文件在该文件下

```java
1. 修改数据库的IP地址、用户名、密码
```

#### 4. config.properties

> 游戏相关的所有配置均在这个目录下：

```shell
1. 正常情况下只需要修改下redis的IP地址和密码,其他配置不需要修改
#redis
base.cache.url=127.0.0.1,
base.cache.port=6379
base.cache.pwd=123456
base.cache.dbid=2
```



### 5.项目启动

> 注：项目启动的顺序无关紧要，随便先启动哪个都可以；启动前需要完成步骤四中的配置文件数据库和redis的配置修改。

#### 1.platform项目启动

```java
方式一：IDEA中启动：直接右键运行下面的类即可：
com.infinity.ai.telegram.TelegramApplication

方式二：打包后运行， 使用cmd命令行编译打包,假如当前在ai-town目录下
1.使用mvn打包依赖的commons包：
cd commons
mvn clean package
mvn install

2.编译和打包依赖的dbService包：
cd dbservice
mvn clean package
mvn install
   
3.编译和打包platform项目
cd platform
mvn clean package
    
4.执行第3不步后会在platform/target目录生成platform.jar 文件
5.复制platform.jar到与config文件夹同级目录
6.启动项目：
  java -jar platform.jar
  或者按以下方式增加参数启动，需要先建好/app/game/aitown/logger 目录：
java -Xms6144m -Xmx6144m -Xmn1536m -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=512m -		XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/app/game/aitown/logger/ -verbose:gc -Xlog:gc*:
file=/app/game/aitown/logger/platform-gc.dump -jar platform.jar &
```

#### 2.gateway 项目启动

```
方式一：IDEA中启动：直接右键运行下面的类即可：
com.infinity.ai.gateway.websocket.GatewayService

方式二：打包后运行， 使用cmd命令行编译打包,假如当前在ai-town目录下
1.使用mvn打包依赖的commons包：（如果在编译platform中执行过，可略过该步骤)
cd commons
mvn clean package
mvn install

   
2.编译和打包gateway项目
cd gateway
mvn clean package
    
3.执行第3不步后会在gateway/target目录生成gateway-jar-with-dependencies.jar 文件
5.复制gateway-jar-with-dependencies.jar到与config文件夹同级目录，并改成：gateway.jar
6.启动项目：
  java -jar gateway.jar
```



#### 3.quartz 项目启动

```
方式一：IDEA中启动：直接右键运行下面的类即可：
com.infinity.ai.quartz.QuartzService

方式二：打包后运行， 使用cmd命令行编译打包,假如当前在ai-town目录下
1.使用mvn打包依赖的commons包：（如果在编译platform中执行过，可略过该步骤)
cd commons
mvn clean package
mvn install

   
2.编译和打包quartz项目
cd quartz
mvn clean package
    
3.执行第3不步后会在quartz/target目录生成quartz.jar 文件
5.复制quartz.jar到与config文件夹同级目录
6.启动项目：
  java -jar quartz.jar
```



#### 4.chat 项目启动

```
方式一：IDEA中启动：直接右键运行下面的类即可：
com.infinity.ai.chat.ChatService

方式二：打包后运行， 使用cmd命令行编译打包,假如当前在ai-town目录下
1.使用mvn打包依赖的commons包：（如果在编译platform中执行过，可略过该步骤)
cd commons
mvn clean package
mvn install

   
2.编译和打包chat项目
cd chat
mvn clean package
    
3.执行第3不步后会在chat/target目录生成chat.jar 文件
5.复制chat.jar到与config文件夹同级目录
6.启动项目：
  java -jar chat.jar
```



#### 5.telegram 项目启动

> 该项目目前能跑，但具体业务可能还需要根据实际调整。

```
注意：telegram项目目前有两个方式运行，一种是LongPolling 方式，一种是Webhook 的方式；无论哪种方式，都是按以下的方式启动运行；执行需要根据实际情况该项目中的配置；

一、LongPolling 方式，需要先修改以下代码【本机开发选择该模式】：
1.把com.infinity.ai.telegram.bot.BotInitializer 类中的catWebhookBot 方法注释掉，保留catTelegramBot 方法；
2.com.infinity.ai.telegram.controller.TelegramController 这个类可删除；目前业务不一样，可删除或者全部注释
3.com.infinity.ai.telegram.controller.WebhookController 这个类可全部注释

二、Webhook 的方式，需要先修改以下代码【服务器部署选择该模式】：
1.把com.infinity.ai.telegram.bot.BotInitializer 类中的catTelegramBot方法注释掉，保留catWebhookBot 方法；
2.com.infinity.ai.telegram.controller.WebhookController 这个类是telegram服务器调用我们的代码的入口；需要全包能访问到
3.com.infinity.ai.telegram.controller.TelegramController 这个类可删除；目前业务不一样，可删除或者全部注释
4.修改application-telegram.yml配置文件中的webHookPath 的值，必须是https的方式,类似这样配置：https://cat.infinitytest.cc/api/tg/，这样telegram服务器就能把消息推送到com.infinity.ai.telegram.controller.WebhookController#onUpdateReceived 的方法中；所以本机开发选择第一种，该模式时候生产

完成以上修改后，无论哪种方式，都是按以下的方式启动运行：
方式一：IDEA中启动：直接右键运行下面的类即可：
com.infinity.ai.telegram.TelegramApplication

方式二：打包后运行， 使用cmd命令行编译打包,假如当前在ai-town目录下
1.使用mvn打包依赖的commons包：（如果在编译platform中执行过，可略过该步骤)
cd commons
mvn clean package
mvn install

   
2.编译和打包依赖的dbService包：（如果在编译platform中执行过，可略过该步骤)
cd dbservice
mvn clean package
mvn install


3.编译和打包telegram项目
cd telegram
mvn clean package
    
4.执行第3不步后会在telegram/target目录生成telegram.jar 文件
5.复制telegram.jar到与config文件夹同级目录
6.启动项目：
  java -jar telegram.jar
```

