System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, property, PARAM_TYPE, TabButtonGroup;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68a763c5H1IGaRMqIuqv+Dg", "TabButtonGroup", undefined);

      __checkObsolete__(['Node', 'Component', '_decorator', 'Button', 'Color', 'Enum', 'instantiate', 'js', 'Label', 'Layout', 'log', 'size', 'Sprite', 'EventHandler', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      PARAM_TYPE = /*#__PURE__*/function (PARAM_TYPE) {
        PARAM_TYPE[PARAM_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
        PARAM_TYPE[PARAM_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
        return PARAM_TYPE;
      }(PARAM_TYPE || {}); ///不可用


      _export("default", TabButtonGroup = (_dec = ccclass("TabButtonGroup"), _dec(_class = class TabButtonGroup extends Component {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf57f44d22e7325b827dae1c5369467fcbc9cddc.js.map