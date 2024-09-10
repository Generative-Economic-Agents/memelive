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
//# sourceMappingURL=e21e3e256631851f8859f50eac93830089c4400c.js.map