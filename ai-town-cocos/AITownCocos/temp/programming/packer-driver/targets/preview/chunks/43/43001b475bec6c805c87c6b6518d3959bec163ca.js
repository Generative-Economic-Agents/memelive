System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, Rect, Vec2, ObjDictionary, mGameConfig, sceneManager, LayerEnum, MapGridVO, MapTile, SceneManager, WorldMap, _crd;

  function _reportPossibleCrUseOfObjDictionary(extras) {
    _reporterNs.report("ObjDictionary", "../../core/dataStructue/ObjDictionary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "../../utils/MGameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneManager(extras) {
    _reporterNs.report("sceneManager", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerEnum(extras) {
    _reporterNs.report("LayerEnum", "./LayerEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapGridVO(extras) {
    _reporterNs.report("MapGridVO", "./MapGridVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapTile(extras) {
    _reporterNs.report("MapTile", "./MapTile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./SceneManager", _context.meta, extras);
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
      Rect = _cc.Rect;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ObjDictionary = _unresolved_2.default;
    }, function (_unresolved_3) {
      mGameConfig = _unresolved_3.default;
    }, function (_unresolved_4) {
      sceneManager = _unresolved_4.sceneManager;
    }, function (_unresolved_5) {
      LayerEnum = _unresolved_5.default;
    }, function (_unresolved_6) {
      MapGridVO = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapTile = _unresolved_7.default;
    }, function (_unresolved_8) {
      SceneManager = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "630bdtDFftLi5pqIRmH/0PJ", "WorldMap", undefined);

      __checkObsolete__(['Layers', 'Node', 'Rect', 'Sprite', 'Vec2']);

      _export("default", WorldMap = class WorldMap {
        get container() {
          return this._container;
        }

        get gridVO() {
          return this._gridVO;
        }

        get gridTiles() {
          return this._gridTiles;
        }
        /**
         * 已经加载的Tile 
         */


        constructor() {
          this._container = void 0;
          this._gridVO = new (_crd && MapGridVO === void 0 ? (_reportPossibleCrUseOfMapGridVO({
            error: Error()
          }), MapGridVO) : MapGridVO)();
          this._gridTiles = void 0;
          this._loadedTiles = new (_crd && ObjDictionary === void 0 ? (_reportPossibleCrUseOfObjDictionary({
            error: Error()
          }), ObjDictionary) : ObjDictionary)();
          this._container = new Node();
          this._container.layer = Layers.Enum.UI_2D;
          ;
          this.init();
        }

        init() {
          //let bg:Sprite = new Sprite();
          //bg.loadImage("res/bg3.jpg");
          //_container.addChild(bg);
          this.createTiles();
        }

        reset() {
          WorldMap._instance = null;
        }

        createTiles() {
          this._gridTiles = new Array();

          for (var col = 0; col < this._gridVO.col; col++) {
            this._gridTiles[col] = new Array();

            for (var row = 0; row < this._gridVO.row; row++) {
              this._gridTiles[col][row] = new (_crd && MapTile === void 0 ? (_reportPossibleCrUseOfMapTile({
                error: Error()
              }), MapTile) : MapTile)(row, col, this._container);
            }
          }
        }

        update() {
          if (!(_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).instance.camera || !this._container.parent) return;
          var camView = (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).instance.camera.cameraView;
          var tiles = this.getNeedLoadTiles(camView.x, camView.y); // console.log(JSON.stringify(tiles.container)+"=========================================");

          this.loadTiles(tiles);
          var vec = (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).instance.camera.focusTarget.parent.position; //actor_layer

          this._container.parent.setPosition(vec); //map_layer


          (_crd && sceneManager === void 0 ? (_reportPossibleCrUseOfsceneManager({
            error: Error()
          }), sceneManager) : sceneManager).getLayer((_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
            error: Error()
          }), LayerEnum) : LayerEnum).DebugLayer).setPosition(vec);
        }

        loadTiles(tiles) {
          if (tiles && tiles.length > 0) {
            var col, row;
            var arr, key;
            var strKey; //先卸载  暂不卸载,在动态加载图片显示时,cocos 会非常卡
            // for(key in this._loadedTiles.container)
            // {
            // 	if(!tiles.containsKey(key))
            // 	{
            // 		arr = key.split("_");
            // 		col = parseInt(arr[0]);
            // 		row = parseInt(arr[1]);
            // 		this._gridTiles[col][row].unloadTile();
            // 		strKey = col + "_" + row;
            // 		this._loadedTiles.remove(strKey);
            // 		console.log("loadtiles remove::",strKey);
            // 	}
            // }
            //再加载

            for (key in tiles.container) {
              if (!this._loadedTiles.containsKey(key)) {
                arr = key.split("_");
                col = parseInt(arr[0]);
                row = parseInt(arr[1]);

                if (col < this._gridVO.col && row < this._gridVO.row) {
                  if (this._gridTiles[col] && this._gridTiles[col][row]) {
                    this._gridTiles[col][row].loadTile();

                    strKey = col + "_" + row;

                    this._loadedTiles.add(strKey, strKey);

                    console.log("loadtiles add::", strKey);
                  }
                }
              }
            }
          }
        }

        getNeedLoadTiles(camX, camY) {
          var cellW = this.gridVO.cellW;
          var cellH = this.gridVO.cellH;
          var rect = new Rect(camX - cellW, camY + cellH, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceW + cellW, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceH + cellH);
          var p1 = this.scenePosToGrid(rect.x, rect.y);
          var p2 = this.scenePosToGrid(rect.x + rect.width, rect.y - rect.height);
          var res = new (_crd && ObjDictionary === void 0 ? (_reportPossibleCrUseOfObjDictionary({
            error: Error()
          }), ObjDictionary) : ObjDictionary)();
          var key;

          for (var i = p1.x; i <= p2.x; i++) {
            for (var j = p1.y; j <= p2.y; j++) {
              key = i + "_" + j;
              res.add(key, key);
            }
          }

          return res;
        }

        getNeedLoadTiles1(camX, camY) {
          var cellW = this.gridVO.cellW;
          var cellH = this.gridVO.cellH; //let rect:Rectangle = new Rectangle(camX-cellW*0.5, camY-cellH*0.5, mGameConfig.DeviceW + cellW, mGameConfig.DeviceH + cellH);

          var rect = new Rect(camX - cellW, camY - cellH, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceW + cellW * 2, (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).DeviceH + cellH * 2);
          var p1 = this.scenePosToGrid(rect.x, rect.y);
          var p2 = this.scenePosToGrid(rect.width, rect.height);
          var res = new (_crd && ObjDictionary === void 0 ? (_reportPossibleCrUseOfObjDictionary({
            error: Error()
          }), ObjDictionary) : ObjDictionary)();
          var centerP;
          var key;

          for (var i = p1.x; i <= p2.x; i++) {
            for (var j = p1.y; j <= p2.y; j++) {
              centerP = this.gridToScenePos(i, j);

              if (rect.contains(centerP)) {
                key = i + "_" + j;
                res.add(key, key);
              }
            }
          }

          return res;
        }

        scenePosToGrid(x, y) {
          var p = new Vec2();
          p.x = parseInt(x / this._gridVO.cellW + ""); //列

          p.y = parseInt(y / this._gridVO.cellH * -1 + ""); //行

          return p;
        }

        gridToScenePos(x, y) {
          var p = new Vec2();
          p.x = (x + 0.5) * this._gridVO.cellW; //列

          p.y = -(y + 0.5) * this._gridVO.cellH; //行

          return p;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new WorldMap();
          }

          return this._instance;
        }

      });

      WorldMap._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43001b475bec6c805c87c6b6518d3959bec163ca.js.map