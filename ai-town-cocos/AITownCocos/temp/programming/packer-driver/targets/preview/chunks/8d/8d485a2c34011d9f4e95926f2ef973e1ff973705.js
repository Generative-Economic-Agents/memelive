System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LayerEnum, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b87eLSMmBFIYQaK1OQDYkU", "LayerEnum", undefined);

      _export("default", LayerEnum = class LayerEnum {});

      LayerEnum.MapLayer = "MapLayer";
      LayerEnum.ActorLayer = "ActorLayer";
      LayerEnum.EffectLayer = "EffectLayer";
      LayerEnum.DebugLayer = "DebugLayer";
      LayerEnum.TipLayer = "TipLayer";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d485a2c34011d9f4e95926f2ef973e1ff973705.js.map