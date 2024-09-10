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
          console.log(`触发了 ToggleContainer 事件，点了${toggle.node.name}的 Toggle`);
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
//# sourceMappingURL=be8fce6ca2a1f4278c3c43d42edf7ce076fb8d06.js.map