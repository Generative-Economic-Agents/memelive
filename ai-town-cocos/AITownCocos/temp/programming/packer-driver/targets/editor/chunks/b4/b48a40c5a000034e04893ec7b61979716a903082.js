System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, resources, Sprite, UITransform, Vec2, Vec3, WebUtils, MapTile, _crd;

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../utils/WebUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Node = _cc.Node;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4066aeDhTdKE4z8J4cPNX4s", "MapTile", undefined);

      __checkObsolete__(['Layers', 'Node', 'resources', 'Sprite', 'SpriteFrame', 'Texture2D', 'UITransform', 'Vec2', 'Vec3']);

      /**
       *
       */
      _export("default", MapTile = class MapTile {
        constructor(row, col, parent) {
          this._row = void 0;
          this._col = void 0;
          this._resUrl = void 0;
          this._isLoaded = false;
          this._parent = void 0;
          this._disObj = void 0;
          this._isLoading = false;
          this._row = row;
          this._col = col;
          this._parent = parent;
          let id = this._row + "_" + this._col;
          this._resUrl = "res/map_001/" + id;
          this._disObj = new Node();
          this._disObj.layer = Layers.Enum.UI_2D;
          ; //Layer 设置要准确 ui_2d;

          this._disObj.addComponent(Sprite);

          this._disObj.getComponent(UITransform).setAnchorPoint(new Vec2(0, 1));
        }

        loadTile() {
          if (this._isLoaded || this._isLoading) return;
          this._isLoading = true; // 加载 texture

          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg(this._resUrl, this._disObj, this.onLoadCmp.bind(this));
        }

        onLoadCmp(err, spriteFrame) {
          this._isLoading = false;
          this._isLoaded = true;

          this._disObj.setPosition(new Vec3(this._col * 300, -this._row * 300, 0));

          this._parent.addChild(this._disObj); //test code ...
          // sceneManager.addToLayer(this._disObj,LayerEnum.MapLayer,300,300);

        }

        unloadTile() {
          //return;
          //清除资源缓存,容器保存
          this._disObj.getComponent(Sprite).spriteFrame = null; //释放资源
          // if (this._isLoading) resources.release(this._resUrl);

          this._isLoaded = false;

          this._parent.removeChild(this._disObj);

          resources.release(this._resUrl + "/spriteFrame"); // console.log("unloadTile: " + this._resUrl);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b48a40c5a000034e04893ec7b61979716a903082.js.map