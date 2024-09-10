System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, mduManger, ModuleID, _dec, _class, _crd, ccclass, property, JishiView;

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleID(extras) {
    _reporterNs.report("ModuleID", "../../game/config/ModuleID", _context.meta, extras);
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
    }, function (_unresolved_2) {
      mduManger = _unresolved_2.mduManger;
    }, function (_unresolved_3) {
      ModuleID = _unresolved_3.ModuleID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e06d5u7vg5AcprVGuSzmDrV", "JishiView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AudioSource', 'assert']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JishiView", JishiView = (_dec = ccclass("JishiView"), _dec(_class = class JishiView extends Component {
        start() {}

        onLoad() {}

        onDisable() {}

        openmainclick() {
          (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
            error: Error()
          }), mduManger) : mduManger).openModu((_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).MAIN);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa5c0fc22a90147eae3068c3af1324a60ed81187.js.map