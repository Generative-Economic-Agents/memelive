System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, observer, _dec, _class, _crd, ccclass, property, ToggleContainerComponent;

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../App", _context.meta, extras);
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
      observer = _unresolved_2.observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a333bKVZhVKRqJmkpfcaR7n", "ToggleContainerComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToggleContainerComponent", ToggleContainerComponent = (_dec = ccclass('ToggleContainerComponent'), _dec(_class = class ToggleContainerComponent extends Component {
        start() {}

        update(deltaTime) {}

        onToggleContainerClick(toggle) {
          console.log("\u89E6\u53D1\u4E86 ToggleContainer \u4E8B\u4EF6\uFF0C\u70B9\u4E86" + toggle.node.name + "\u7684 Toggle");
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post("toggle", {
            type: toggle.node.name
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=092b290cc1cd2f04fda2ac66193382686a877d3e.js.map