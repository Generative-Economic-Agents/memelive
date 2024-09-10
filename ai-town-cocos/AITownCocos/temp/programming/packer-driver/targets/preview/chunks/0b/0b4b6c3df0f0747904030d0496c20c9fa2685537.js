System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, observer, uiMgr, RedManager, LoadingController, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TujianComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedManager(extras) {
    _reporterNs.report("RedManager", "../../../manager/RedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../manager/AudioManager", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      observer = _unresolved_2.observer;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      RedManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      LoadingController = _unresolved_4.LoadingController;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f858G5y0BGT6ARzbT9l/gP", "TujianComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TujianComponent", TujianComponent = (_dec = ccclass('TujianComponent'), _dec2 = property(Node), _dec(_class = (_class2 = class TujianComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Sprite_redpointA", _descriptor, this);
        }

        start() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading(); // modelMgr.mainModel.tasklistReq();

          (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).instance.registRedPoint("renwutabred", this.Sprite_redpointA);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("keychange", this.updateRenwuList, this);
          this.updateRenwuList();
        }

        update(deltaTime) {}

        onDestroy() {}

        onMessage() {}

        updateRenwuList() {
          // let da: taskcell[] = modelMgr.mainModel.tasklist.data;
          // let arr = modelMgr.configModel.commonConfigJson.TaskCfg;
          // this.showRenwuList(arr);
          var isred = (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).instance.getKeyState((_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).KEY.renwutabred);
          (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).instance.changeState((_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).KEY.renwutabred, isred);
        }
        /**
        * 关闭自己
        */


        closeself() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_tujian");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_redpointA", [_dec2], {
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
//# sourceMappingURL=0b4b6c3df0f0747904030d0496c20c9fa2685537.js.map