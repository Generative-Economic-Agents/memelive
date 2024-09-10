System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Rect, Vec2, mGameConfig, Camera2D, _crd;

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "../../utils/MGameConfig", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Rect = _cc.Rect;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      mGameConfig = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90d29jtreRAooqGq2Pc9fU5", "Camera2D", undefined);

      __checkObsolete__(['Node', 'Rect', 'Sprite', 'Vec2', 'Vec3']);

      _export("default", Camera2D = class Camera2D {
        get cameraView() {
          return this._cameraView;
        }

        get focusTarget() {
          return this._focusTarget;
        }

        constructor(scene) {
          this._cameraView = void 0;
          this._worldMap = void 0;
          this._ease = 0.0025;
          this._focusTarget = null;
          this._pos = new Vec2();
          this._cameraView = new Rect(0, 0, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceW, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceH);
          this._worldMap = scene; // this._worldMap.scrollRect = this._cameraView;
          //_worldMap.viewport = _cameraView;
          //_worldMap.optimizeScrollRect = true;
        } // 	public lookAt():void
        // 	{
        // 	}
        // 	public onResize():void
        // 	{
        // 		if(this._cameraView)
        // 		{
        // 			this._cameraView.width = mGameConfig.DesginW;
        // 			this._cameraView.height = mGameConfig.DesginH;
        // 		}
        // 	}

        /**
         * 镜头跟随
         */


        focus(target) {
          this._focusTarget = target; //target 这里的target隐藏的target,用来计算和存储移动到坐标;

          this._cameraView.x = this._focusTarget.position.x - ((_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceW >> 1);
          this._cameraView.y = this._focusTarget.position.y + ((_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceH >> 1);
        }

        update() {
          if (this._focusTarget && this._focusTarget.position) //计算加载tile区域的左上角point
            {
              this._pos.x = this._focusTarget.position.x - ((_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceW >> 1);
              this._pos.y = this._focusTarget.position.y + ((_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceH >> 1);
              var gridW = 7500;
              var gridH = 8400;

              if (this._pos.x + (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceW <= gridW && this._pos.x >= 0) //图片加载更新间隔可以长一些
                {
                  // this._cameraView.x = this._pos.x;//一步到位;
                  this._cameraView.x += (this._pos.x - this._cameraView.x) * 33 * this._ease;
                }

              if ((this._pos.y - (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceH) * -1 <= gridH && this._pos.y <= 0) {
                // this._cameraView.y = this._pos.y;
                this._cameraView.y += (this._pos.y - this._cameraView.y) * 33 * this._ease;
              } //设置图层位置


              var x = -this._focusTarget.position.x + (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceW / 2;
              var y = -this._focusTarget.position.y - (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
                error: Error()
              }), mGameConfig) : mGameConfig).DeviceH / 2;

              var vec = this._focusTarget.parent.getPosition();

              vec.x += (x - vec.x) * 33 * this._ease;
              vec.y += (y - vec.y) * 33 * this._ease;

              this._focusTarget.parent.setPosition(vec);
            }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51c94c62a1b4ea541ab9d636032f62b340b52b59.js.map