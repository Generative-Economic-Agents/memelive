System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, sp, Texture2D, Log, _crd, TAG;

  function loadRemoteSpineRes(atlas, ske, image, ske_component, cat, call_back) {
    if (cat === void 0) {
      cat = null;
    }

    assetManager.loadAny([{
      url: atlas,
      ext: '.txt'
    }, {
      url: ske,
      ext: '.txt'
    }], (error, assets) => {
      assetManager.loadRemote(image, (error, spine_texture) => {
        try {
          var asset = new sp.SkeletonData();
          asset.skeletonJson = JSON.parse(assets[1]);
          asset.atlasText = assets[0];
          var texture = new Texture2D();
          texture.image = spine_texture;
          asset.textures = [texture];
          asset.textureNames = ['cc.png'];
          asset._uuid = ske; // 可以传入任意字符串，但不能为空

          ske_component.skeletonData = asset;
          cat && (cat.active = false);
          call_back();
        } catch (error) {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, error);
        } //this.playSpineAnimation('idle')

      });
    });
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "./LogUtils", _context.meta, extras);
  }

  _export("loadRemoteSpineRes", loadRemoteSpineRes);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      sp = _cc.sp;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      Log = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71fd8+9K6BJuoFnsjVJoC6E", "loadSpineData", undefined);

      __checkObsolete__(['assetManager', 'ImageAsset', 'sp', 'Texture2D', 'Node']);

      TAG = 'loadRemoteSpineRes';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=386a3e1a743944ba637a5fd489900bd3aec9b0ca.js.map