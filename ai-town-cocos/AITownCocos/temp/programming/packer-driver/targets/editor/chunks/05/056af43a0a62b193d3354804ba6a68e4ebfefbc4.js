System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventType, BoswerUtils, getIslogin, director, ModuleID, mduManger, observer, Log, TiaozhuanMananger, _crd, TAG, tizhuanMgr;

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoswerUtils(extras) {
    _reporterNs.report("BoswerUtils", "../utils/BoswerUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetIslogin(extras) {
    _reporterNs.report("getIslogin", "./RequestManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleID(extras) {
    _reporterNs.report("ModuleID", "../game/config/ModuleID", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }, function (_unresolved_2) {
      EventType = _unresolved_2.EventType;
    }, function (_unresolved_3) {
      BoswerUtils = _unresolved_3.default;
    }, function (_unresolved_4) {
      getIslogin = _unresolved_4.getIslogin;
    }, function (_unresolved_5) {
      ModuleID = _unresolved_5.ModuleID;
    }, function (_unresolved_6) {
      mduManger = _unresolved_6.mduManger;
      observer = _unresolved_6.observer;
    }, function (_unresolved_7) {
      Log = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4773gHrhNK15zuZfjakntI", "TiaozhuanManager", undefined);

      __checkObsolete__(['director']);

      TAG = 'TiaozhuanMananger';
      /**
       * 游戏内外页面跳转
       * 本地存储跳转
       * href 链接跳转
       * webappear执行
       */

      _export("default", TiaozhuanMananger = class TiaozhuanMananger {
        constructor() {
          this._from = "";
          this._hasInit = [];
          this._gameUrl = void 0;
          this.initGroupRes = void 0;
          this.visit = void 0;
          this.h5utils = void 0;
          this._gameUrl = [];
          this.initGroupRes = []; //添加预加载资源逻辑

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getQueryVariable("token"), "token");
          this.visit = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getQueryVariable("token");
        }

        /**
         *获取存储到本地的页面名称
         1.临时存储
         2.url链接跳转
         */
        static getTentrance() {
          let storage = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getLocalStorage(TiaozhuanMananger.KEY_OTPAGETYPE, "string");

          if (storage) {
            return storage;
          }

          let urlparam = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getParam()[TiaozhuanMananger.KEY_OTPAGETYPE];

          if (urlparam) {
            return urlparam;
          }

          return "";
        }

        ons() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).LOGIN_COMPELETED, this.afterLogin, this);
        }

        get from() {
          return this._from;
        }
        /**
         * 通用协议及显示处理
         */


        defaultRequest() {
          return new Promise((resolve, reject) => {
            (_crd && getIslogin === void 0 ? (_reportPossibleCrUseOfgetIslogin({
              error: Error()
            }), getIslogin) : getIslogin)().then(res => {
              res["data"];
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, "defaultRequest:isLogin::", res["data"].isLogin);
              resolve();
            }).catch(err => {}); //判断是否登录
          });
        }
        /**
         * 入口::
         * 获取来源
         * 优先级：localstorage-->url-->game
         * BoswerUtils.KEY_OTPAGETYPE:游戏入口类型key
         */


        checkEntrance() {
          let storage = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getLocalStorage(TiaozhuanMananger.KEY_OTPAGETYPE, "string");

          if (storage) {
            this.goto(TiaozhuanMananger.TYPE_LOCALSTORGE, TiaozhuanMananger.KEY_OTPAGETYPE);
            return;
          }

          let urlparam = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).getParam()[TiaozhuanMananger.KEY_OTPAGETYPE];

          if (urlparam) {
            this.goto(TiaozhuanMananger.TYPE_URL, TiaozhuanMananger.KEY_OTPAGETYPE);
            return;
          }

          this.defalutstart();
        }
        /**
         * 默认打开模块
         */


        defalutstart() {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, "in defalut start."); //验证登录,成功后,打开默认界面
          // this.afterLogin();
          // mainModule.openModu();

          (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
            error: Error()
          }), mduManger) : mduManger).openModu((_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).TOWN);
        }
        /**
         * 
         * @param type 跳转来源
         * @param key 跳转页面
         */


        goto(type, key) {
          let s = this;

          switch (type) {
            case TiaozhuanMananger.TYPE_LOCALSTORGE:
              let storage = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
                error: Error()
              }), BoswerUtils) : BoswerUtils).getLocalStorage(key, "string");
              this.openmodule(storage);
              break;

            case TiaozhuanMananger.TYPE_URL:
              let urlparam = (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
                error: Error()
              }), BoswerUtils) : BoswerUtils).getParam()[key];
              this.openmodule(urlparam);
              break;

            case TiaozhuanMananger.TYPE_GAME:
              //跳转到其他游戏页面,暂停本游戏
              // Laya.stage.on(Laya.Event.VISIBILITY_CHANGE, s, s._visibilityChange);
              break;
          }
        }
        /**
         * 根据key 打开指定页面
         * @param storage
         */


        openmodule(storage) {
          switch (storage) {
            case "sign":
              //范例
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post("opensign");
              break;

            case "decorate":
              //范例2
              director.loadScene("decorate");
              break;
          }
        }
        /**
         *登录执行后返回操作
         */


        afterLogin() {
          return new Promise((resolve, reject) => {
            (_crd && getIslogin === void 0 ? (_reportPossibleCrUseOfgetIslogin({
              error: Error()
            }), getIslogin) : getIslogin)().then(res => {
              //判断是否登录
              try {
                resolve();
              } catch (err) {
                reject();
                if (err) (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                  error: Error()
                }), Log) : Log).log(TAG, err.toString());
              }
            });
          });
        } //====================================

        /**
         * 跳转
         * @param data 
         */


        async openSchema(url) {}
        /**
         * 返回
         * @param data 
         */


        async goBack() {}
        /**
         * webview 激活
         */


        onWebviewAppear(callback) {
          if (typeof callback === 'function') {
            if (window["onWebAppearanceQuee"].indexOf(callback) != -1) {
              return;
            }

            window["onWebAppearanceQuee"].push(callback);
          }
        }
        /**
         * webview 隐藏
         * @param cb 
         */


        onWebviewDisappear(cb) {
          window["onWebviewAppear"] = cb;
        }
        /**
         * 隐藏app loading
         */


        hideloading() {}

      });

      TiaozhuanMananger.TYPE_LOCALSTORGE = "localstroge";
      TiaozhuanMananger.TYPE_URL = "fromurl";
      TiaozhuanMananger.TYPE_GAME = "games";
      TiaozhuanMananger.KEY_OTPAGETYPE = "cocos_game";

      _export("tizhuanMgr", tizhuanMgr = new TiaozhuanMananger());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=056af43a0a62b193d3354804ba6a68e4ebfefbc4.js.map