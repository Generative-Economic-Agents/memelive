System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, view, App, appInit, mduManger, modelMgr, GlobalConfig, tizhuanMgr, mGameConfig, ScrollingText, Log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Axios, TAG, Maintest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfApp(extras) {
    _reporterNs.report("App", "./game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfappInit(extras) {
    _reporterNs.report("appInit", "./game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "./game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "./game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "./game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOftizhuanMgr(extras) {
    _reporterNs.report("tizhuanMgr", "./manager/TiaozhuanManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "./utils/MGameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollingText(extras) {
    _reporterNs.report("ScrollingText", "./module/main/ScrollingText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  _export("Axios", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      view = _cc.view;
    }, function (_unresolved_2) {
      App = _unresolved_2.default;
      appInit = _unresolved_2.appInit;
      mduManger = _unresolved_2.mduManger;
      modelMgr = _unresolved_2.modelMgr;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }, function (_unresolved_4) {
      tizhuanMgr = _unresolved_4.tizhuanMgr;
    }, function (_unresolved_5) {
      mGameConfig = _unresolved_5.default;
    }, function (_unresolved_6) {
      ScrollingText = _unresolved_6.ScrollingText;
    }, function (_unresolved_7) {
      Log = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca5d5uUAZ1FLIWYqAU3ur7f", "Maintest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'Maintest';

      _export("Maintest", Maintest = (_dec = ccclass('Maintest'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class Maintest extends Component {
        constructor() {
          super(...arguments);

          // [1]
          // dummy = '';
          // [2]
          // @property
          // serializableDummy = 0;
          _initializerDefineProperty(this, "node_tasktishi", _descriptor, this);

          _initializerDefineProperty(this, "Label_tishi", _descriptor2, this);
        }

        start() {
          // [3]
          _export("Axios", Axios = window["Axios"]);

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

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.hasInitGame == false) {
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
          }

          this.node_tasktishi.active = true;
        }

        onEnable() {
          var sct = this.Label_tishi.getComponent(_crd && ScrollingText === void 0 ? (_reportPossibleCrUseOfScrollingText({
            error: Error()
          }), ScrollingText) : ScrollingText); // this.schedule(()=>{

          sct.startScroll("121"); // },5)
        } // update (deltaTime: number) {
        //     // [4]
        // } 


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_tasktishi", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_tishi", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2983cfcd8998c726211e71de91ffa5969e1f336.js.map