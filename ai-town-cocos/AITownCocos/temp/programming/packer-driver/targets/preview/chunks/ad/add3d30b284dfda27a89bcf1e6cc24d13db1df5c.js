System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, mGameConfig, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50751ebjvxOsK2n3Sg3YYAl", "MGameConfig", undefined);

      _export("default", mGameConfig = class mGameConfig {});

      mGameConfig.FrameLoopDelay = 33;
      mGameConfig.DesginH = 750;
      mGameConfig.IsDebug = true;
      mGameConfig.ModelPath = "res/models/";
      mGameConfig.SoundPath = "res/sound/";
      mGameConfig.EffectPath = "res/effects/";
      //渲染尺寸
      mGameConfig.DeviceW = 750;
      mGameConfig.DeviceH = 1334;
      //以1136*640作为设计尺寸
      mGameConfig.DesginW = 1334;
      mGameConfig.OrthographicVerticalSize = 10;
      mGameConfig.UnitPerPixel = 0.015625;
      //1/64
      mGameConfig.actorLayer = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=add3d30b284dfda27a89bcf1e6cc24d13db1df5c.js.map