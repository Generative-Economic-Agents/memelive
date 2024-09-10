System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, uiMgr, _dec, _class, _crd, ccclass, property, JishiComponent;

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
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
      uiMgr = _unresolved_2.uiMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "083e9Ikn9tKupAm0p308+Nd", "JishiComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JishiComponent", JishiComponent = (_dec = ccclass('JishiComponent'), _dec(_class = class JishiComponent extends Component {
        start() {}

        update(deltaTime) {}
        /**
         * 关闭自己
         */


        closeself() {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_shangdian");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fc2800c61c8e9697916782603322970393b38de.js.map