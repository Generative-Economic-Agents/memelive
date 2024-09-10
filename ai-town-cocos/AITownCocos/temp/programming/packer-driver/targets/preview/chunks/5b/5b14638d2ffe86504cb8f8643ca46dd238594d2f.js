System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, view, ProgressBar, EditBox, tizhuanMgr, showMsg2, App, appInit, mduManger, modelMgr, observer, socket, mGameConfig, WebUtils, GlobalConfig, network, EventType, Log, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Axios, NeteaseGame, yyygame, TAG, Index;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftizhuanMgr(extras) {
    _reporterNs.report("tizhuanMgr", "./src/manager/TiaozhuanManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "./src/core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApp(extras) {
    _reporterNs.report("App", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfappInit(extras) {
    _reporterNs.report("appInit", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "./src/game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "./src/utils/MGameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "./src/utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "./src/game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "./src/model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "./src/EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../assets/src/utils/LogUtils", _context.meta, extras);
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
      showMsg2 = _unresolved_3.showMsg2;
    }, function (_unresolved_4) {
      App = _unresolved_4.default;
      appInit = _unresolved_4.appInit;
      mduManger = _unresolved_4.mduManger;
      modelMgr = _unresolved_4.modelMgr;
      observer = _unresolved_4.observer;
      socket = _unresolved_4.socket;
    }, function (_unresolved_5) {
      mGameConfig = _unresolved_5.default;
    }, function (_unresolved_6) {
      WebUtils = _unresolved_6.default;
    }, function (_unresolved_7) {
      GlobalConfig = _unresolved_7.GlobalConfig;
    }, function (_unresolved_8) {
      network = _unresolved_8.network;
    }, function (_unresolved_9) {
      EventType = _unresolved_9.EventType;
    }, function (_unresolved_10) {
      Log = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b29cD+3DJBpLqWw9P43g1A", "Index", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'Label', 'view', 'resources', 'ProgressBar', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      /**
       * 1.登录验证/登录逻辑
       * 2.登录页/loading页
       * 3.活动未开启/开启/结束状态处理
       * 4.游戏首接口home 接口
       * 5.微信qq 分享文案
       */
      TAG = 'Index';

      _export("default", Index = (_dec = ccclass("Index"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property({
        type: ProgressBar
      }), _dec5 = property(EditBox), _dec(_class = (_class2 = class Index extends Component {
        constructor() {
          super();

          // [1]
          // dummy = '';
          // [2]
          // @property
          // serializableDummy = 0;
          _initializerDefineProperty(this, "loginview", _descriptor, this);

          _initializerDefineProperty(this, "loadingview", _descriptor2, this);

          _initializerDefineProperty(this, "prg", _descriptor3, this);

          _initializerDefineProperty(this, "edit_name", _descriptor4, this);
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.loadingview.active = false;
            _this.loginview.active = true; // director.preloadScene('mainView');

            var s = _this; // Log.log(TAG, '<axios>', window["Axios"], window["NeteaseGame"], window["yyygame"])
            // Axios = window["Axios"];
            // NeteaseGame = window["NeteaseGame"];
            // yyygame = window["yyygame"];

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
            }), mGameConfig) : mGameConfig).DesginH = view.getVisibleSize().height; // if (GlobalConfig.instance.hasInitGame == false) {
            //   let app = new App();
            //   app.init();
            //   appInit(app);
            //   Log.log(TAG, 'main init start ...')
            //   mduManger.start();
            //   modelMgr.configModel.loadResDir();
            // }
            // observer.on(EventType.SOCKET_ONOPEN, this.getlogin, this);
            // observer.on(EventType.SOCKET_ONMESSAGE, this.hasLogin, this);
            // this.gethome();
          })();
        }

        getlogin() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).LoginRequest();
            json.requestId = 0;
            json.type = 1;
            json.command = 10000;
            json.data.avatar = "";
            json.data.clientOs = "";
            json.data.loginType = 1;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.userId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.nickName = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.playername = _this2.edit_name.string;
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
            }), socket) : socket).sendWebSocketBinary(json); //AxiosManager.init();
            // this.getgrantcode();
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
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasLogin = true;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData = data; //显示loading页

            this.loginview.active = false;
            this.loadingview.active = true; //预加载场景并获得加载进度

            director.preloadScene('mainView', (completedCount, totalCount, item) => {//可以把进度数据打出来
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
            }); // resources.preloadScene(),预加载场景失败--boundle 的设置
          }
        } // /**
        //  * 获取登录信息
        //  */
        // public getgrantcode() {
        //   let obj = {
        //     // appId: 'a301020000000000778e659fd53a3075',//跳球
        //     appId: 'a3010200000000004488b559f877bde2',//种花
        //   };
        //   yyygame.init(obj).then(res => {
        //     // res.code 为用户成功授权后得到的授权码，可用于后端获取 accessToken 及用户信息
        //     console.warn(" yyygame.init::", res);
        //     let grantCode = `grantCode=${res.code}&appAbbr=CloudFlower&device=${JSON.stringify(GlobalConfig.device)}`;
        //     let data = new FormData();
        //     data.append('grantCode', Base64Utils.encode(grantCode));
        //     data.append('grant_type', "cloud");
        //     data.append('client_id', "cloud");
        //     data.append('client_secret', "secret");
        //     data.append('scope', "openid message.read message.write");
        //     AxiosManager.post('/oauth2/token', data, AxiosManager.CONENTTYPE.FORMDATA, function (message) {
        //       this.gotoHome();
        //     }.bind(this));
        //   });
        // }


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

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.hasLogin == false) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10002)); // return;
          }

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.hasJsonsLoad == false) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10001));
            return;
          }

          console.log("进入游戏首页");
          (_crd && tizhuanMgr === void 0 ? (_reportPossibleCrUseOftizhuanMgr({
            error: Error()
          }), tizhuanMgr) : tizhuanMgr).checkEntrance();
        }
        /**
         * 按钮登录点击，
         * @returns 
         */


        goLogin() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //AudioManager.instance.playSound("new_NormanBtn");
            if (!_this3.edit_name.string) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)("Please enter your email account.");
              return;
            }

            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.hasInitGame == false) {
              var debounceThings = (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).debounce(() => {
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
                }), EventType) : EventType).SOCKET_ONOPEN, _this3.getlogin, _this3);
                (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                  error: Error()
                }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                  error: Error()
                }), EventType) : EventType).SOCKET_ONMESSAGE, _this3.hasLogin, _this3);
              }, 2);
              debounceThings();
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginview", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingview", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "edit_name", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b14638d2ffe86504cb8f8643ca46dd238594d2f.js.map