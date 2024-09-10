System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, view, ProgressBar, EditBox, tizhuanMgr, App, appInit, mduManger, modelMgr, observer, socket, mGameConfig, WebUtils, GlobalConfig, network, EventType, Log, RolePartIcon, loginModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, Axios, NeteaseGame, yyygame, treePos, treeAdapt, rabbit_x, MAX_LENGTH, cloudPos, cloudAdapt, BgStartPos, CowBabyPos, CowBlackPos, CowPos, TAG, Index;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftizhuanMgr(extras) {
    _reporterNs.report("tizhuanMgr", "../../src/manager/TiaozhuanManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApp(extras) {
    _reporterNs.report("App", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfappInit(extras) {
    _reporterNs.report("appInit", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "../../src/utils/MGameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../src/utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../src/game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../src/model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../src/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCPartBaseDataMap(extras) {
    _reporterNs.report("NPCPartBaseDataMap", "../NPC/NPCControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRolePartIcon(extras) {
    _reporterNs.report("RolePartIcon", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginModel(extras) {
    _reporterNs.report("loginModel", "../model/loginModel", _context.meta, extras);
  }

  _export({
    Axios: void 0,
    NeteaseGame: void 0,
    yyygame: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      view = _cc.view;
      ProgressBar = _cc.ProgressBar;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      tizhuanMgr = _unresolved_2.tizhuanMgr;
    }, function (_unresolved_3) {
      App = _unresolved_3.default;
      appInit = _unresolved_3.appInit;
      mduManger = _unresolved_3.mduManger;
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
      socket = _unresolved_3.socket;
    }, function (_unresolved_4) {
      mGameConfig = _unresolved_4.default;
    }, function (_unresolved_5) {
      WebUtils = _unresolved_5.default;
    }, function (_unresolved_6) {
      GlobalConfig = _unresolved_6.GlobalConfig;
    }, function (_unresolved_7) {
      network = _unresolved_7.network;
    }, function (_unresolved_8) {
      EventType = _unresolved_8.EventType;
    }, function (_unresolved_9) {
      Log = _unresolved_9.default;
    }, function (_unresolved_10) {
      RolePartIcon = _unresolved_10.RolePartIcon;
    }, function (_unresolved_11) {
      loginModel = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b29cD+3DJBpLqWw9P43g1A", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label', 'view', 'resources', 'ProgressBar', 'EditBox', 'Sprite', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      treePos = -480;
      treeAdapt = [2.75, 2.75, 2.5, 2.5, 2, 2];
      rabbit_x = [0, -66, -133, -200];

      _export("MAX_LENGTH", MAX_LENGTH = 1);

      cloudPos = -620;
      cloudAdapt = [1.5, 1, 1.75, 0.5];
      BgStartPos = [{
        x: 35,
        y: -225
      }, {
        x: -956,
        y: -225
      }, {
        x: -1945,
        y: -225
      }, {
        x: -2940,
        y: -225
      }, {
        x: 35,
        y: 330
      }, {
        x: -956,
        y: 330
      }, {
        x: -1945,
        y: 330
      }, {
        x: -2940,
        y: 330
      }];
      CowBabyPos = [{
        x: 0,
        y: 0
      }, {
        x: -25,
        y: 0
      }, {
        x: -54,
        y: 0
      }, {
        x: -80,
        y: 0
      }, {
        x: -80,
        y: 31
      }, {
        x: -54,
        y: 31
      }, {
        x: -25,
        y: 31
      }, {
        x: 0,
        y: 31
      }];
      CowBlackPos = [{
        x: 0,
        y: 0
      }, {
        x: -50,
        y: 0
      }, {
        x: -100,
        y: 0
      }, {
        x: -150,
        y: 0
      }, {
        x: -150,
        y: -62
      }, {
        x: -100,
        y: -62
      }, {
        x: -50,
        y: -62
      }, {
        x: 0,
        y: -62
      }];
      CowPos = [0, -24, -47, -72];
      /**
       * 1.登录验证/登录逻辑
       * 2.登录页/loading页
       * 3.活动未开启/开启/结束状态处理
       * 4.游戏首接口home 接口
       * 5.微信qq 分享文案
       */

      TAG = 'Index';

      _export("default", Index = (_dec = ccclass("Index"), _dec2 = property(Node), _dec3 = property({
        type: ProgressBar
      }), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property({
        type: [Node]
      }), _dec16 = property({
        type: [Node]
      }), _dec17 = property(Node), _dec18 = property(Node), _dec(_class = (_class2 = class Index extends Component {
        constructor() {
          super();

          _initializerDefineProperty(this, "loginview", _descriptor, this);

          _initializerDefineProperty(this, "prg", _descriptor2, this);

          _initializerDefineProperty(this, "edit_name", _descriptor3, this);

          _initializerDefineProperty(this, "icon", _descriptor4, this);

          _initializerDefineProperty(this, "loginView", _descriptor5, this);

          _initializerDefineProperty(this, "createRoleView", _descriptor6, this);

          _initializerDefineProperty(this, "infoView", _descriptor7, this);

          _initializerDefineProperty(this, "starBg", _descriptor8, this);

          _initializerDefineProperty(this, "cow", _descriptor9, this);

          _initializerDefineProperty(this, "cowBaby", _descriptor10, this);

          _initializerDefineProperty(this, "cowBlack", _descriptor11, this);

          _initializerDefineProperty(this, "cowBabyRoot", _descriptor12, this);

          _initializerDefineProperty(this, "cowBlackRoot", _descriptor13, this);

          _initializerDefineProperty(this, "cloud", _descriptor14, this);

          _initializerDefineProperty(this, "trees", _descriptor15, this);

          _initializerDefineProperty(this, "rabbit", _descriptor16, this);

          _initializerDefineProperty(this, "loading", _descriptor17, this);

          //人物选择的部分Icon信息
          this.currentIndex = void 0;
          this.currentPartName = 'hair';
          this.frameTime15 = 0;
          this.frameTime10 = 0;
          this.starIndex = 0;
          //星星闪动的index
          this.cowIndex = 0;
          //奶牛的index
          this.cowBabyIndex = 0;
          //小牛的index
          this.cowBlackIndex = 0;
          //走路的奶牛的index
          this.npcBasePartInfo = {
            body: 0,
            hair: {
              sexy: 'man',
              index: 0
            },
            pants: 0,
            shirt: 0
          };
          this.rabbit_index = 0;
          this.addFrameRabbit = 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //this.loginview.active = true;
            var s = _this;
            (_crd && tizhuanMgr === void 0 ? (_reportPossibleCrUseOftizhuanMgr({
              error: Error()
            }), tizhuanMgr) : tizhuanMgr).hideloading();
            (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
              error: Error()
            }), mGameConfig) : mGameConfig).DeviceW = view.getVisibleSize().width;
            (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
              error: Error()
            }), mGameConfig) : mGameConfig).DeviceH = view.getVisibleSize().height;
            (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
              error: Error()
            }), mGameConfig) : mGameConfig).DesginW = view.getVisibleSize().width;
            (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
              error: Error()
            }), mGameConfig) : mGameConfig).DesginH = view.getVisibleSize().height;
            yield _this.goLogin();
          })();
        }

        update(dt) {
          this.frameTime15 = this.frameTime15 + dt;
          this.frameTime10 = this.frameTime10 + dt;
          this.addFrameRabbit = this.addFrameRabbit + dt;

          if (this.frameTime15 >= 0.15) {
            this.starBg.setPosition(BgStartPos[this.starIndex].x, BgStartPos[this.starIndex].y);
            this.starIndex = this.starIndex >= 7 ? 0 : this.starIndex + 1;
            this.cow.setPosition(CowPos[this.cowIndex], 0);
            this.cowIndex = this.cowIndex >= 3 ? 0 : this.cowIndex + 1;
            this.frameTime15 = 0;
          }

          if (this.addFrameRabbit >= 0.10) {
            this.rabbit.setPosition(rabbit_x[this.rabbit_index], 0); //this.cow.setPosition(cow_x[this.flower_cow_index], 0)

            this.rabbit_index = this.rabbit_index >= 3 ? 0 : this.rabbit_index + 1;
            this.addFrameRabbit = 0;
          }

          if (this.frameTime10 >= 0.3) {
            this.cowBaby.setPosition(CowBabyPos[this.cowBabyIndex].x, CowBabyPos[this.cowBabyIndex].y);
            this.cowBabyIndex = this.cowBabyIndex >= 7 ? 0 : this.cowBabyIndex + 1;

            if (this.cowBaby.getPosition().y > 0) {
              this.cowBabyRoot.setPosition(this.cowBabyRoot.getPosition().x, this.cowBabyRoot.getPosition().y + 5);
            } else {
              this.cowBabyRoot.setPosition(this.cowBabyRoot.getPosition().x, this.cowBabyRoot.getPosition().y - 5);
            }

            this.cowBlack.setPosition(CowBlackPos[this.cowBlackIndex].x, CowBlackPos[this.cowBlackIndex].y);
            this.cowBlackIndex = this.cowBlackIndex >= 7 ? 0 : this.cowBlackIndex + 1;

            if (this.cowBlack.getPosition().y < 0) {
              this.cowBlackRoot.setPosition(this.cowBlackRoot.getPosition().x - 5, this.cowBlackRoot.getPosition().y);
            } else {
              this.cowBlackRoot.setPosition(this.cowBlackRoot.getPosition().x + 5, this.cowBlackRoot.getPosition().y);
            }

            this.frameTime10 = 0;
          }

          this.cloud.forEach((currentCloud, index) => {
            if (currentCloud.getPosition().x < cloudPos) {
              currentCloud.setPosition(-cloudPos, currentCloud.getPosition().y);
            }

            currentCloud.setPosition(currentCloud.getPosition().x - cloudAdapt[index], currentCloud.getPosition().y);
          });
          this.trees.forEach((tree, index) => {
            if (tree.getPosition().x > -treePos) {
              tree.setPosition(treePos, tree.getPosition().y);
            }

            tree.setPosition(tree.getPosition().x + treeAdapt[index], tree.getPosition().y);
          });
        }

        getlogin() {
          return _asyncToGenerator(function* () {
            var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).LoginRequest();
            json.requestId = 0;
            json.type = 1;
            json.command = 10000;
            json.data.avatar = "";
            json.data.clientOs = "";
            json.data.loginType = 0;
            var idString;

            if (localStorage.getItem('visitor')) {
              idString = localStorage.getItem('visitor');
            } else {
              idString = Date.now().toString();
              localStorage.setItem('visitor', idString);
            }

            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.userId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.nickName = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.playername = idString;
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
            }), socket) : socket).sendWebSocketBinary(json); //this.loading.active = true
          })();
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONOPEN, this.getlogin, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONMESSAGE, this.hasLogin, this);
        }

        hasLogin(da) {
          var data = da.data;

          if (data && data.command == 10000 && data.code == 0) {
            //loginModel.character = data.player.character 
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasLogin = true;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData = data;
            (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
              error: Error()
            }), loginModel) : loginModel).character = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.charater; //显示loading页
            //this.loginview.active = false;
            //this.loadingview.active = true;
            //预加载场景并获得加载进度

            director.preloadScene('town', (completedCount, totalCount, item) => {//可以把进度数据打出来
              //this.prg?.progress && (this.prg.progress = completedCount / totalCount);
            }, () => {
              this.scheduleOnce(() => {
                (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                  error: Error()
                }), Log) : Log).log(TAG, 'Enter Game HomePage');
                (_crd && tizhuanMgr === void 0 ? (_reportPossibleCrUseOftizhuanMgr({
                  error: Error()
                }), tizhuanMgr) : tizhuanMgr).checkEntrance();
              }, 0);
            });
          }
        }

        gotoHome() {
          if (this.edit_name.string) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.nickName = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.playername = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.userId = this.edit_name.string;
          }

          return;
        }
        /**
         * 按钮登录点击，
         * @returns 
         */


        goLogin() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.edit_name.string) {//showMsg2("Please enter your email account.");
              //return;
            }

            _this2.loading.active = true;

            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasInitGame == false) {
              // const debounceThings = WebUtils.debounce(()=>{
              var app = new (_crd && App === void 0 ? (_reportPossibleCrUseOfApp({
                error: Error()
              }), App) : App)();
              app.init();
              (_crd && appInit === void 0 ? (_reportPossibleCrUseOfappInit({
                error: Error()
              }), appInit) : appInit)(app);
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, 'main init start ...');
              (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
                error: Error()
              }), mduManger) : mduManger).start();
              (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.loadResDir();
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).SOCKET_ONOPEN, _this2.getlogin, _this2);
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).SOCKET_ONMESSAGE, _this2.hasLogin, _this2); // }, 2)
              // debounceThings()
            }
          })();
        }

        setCurrentPart(data, event) {
          if (this.currentIndex + data > MAX_LENGTH || this.currentIndex + data < 0) {
            return;
          }

          this.currentIndex = this.currentIndex + data;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg((_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
            error: Error()
          }), RolePartIcon) : RolePartIcon)[this.currentPartName][this.currentIndex], this.icon);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginview", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edit_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loginView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createRoleView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "infoView", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "starBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cow", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cowBaby", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "cowBlack", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cowBabyRoot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cowBlackRoot", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cloud", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "trees", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "rabbit", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=419f95754ba63a210865770a619462441618daf1.js.map