System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec3, ObjDictionary, mGameConfig, Camera2D, LayerEnum, SceneManager, _crd;

  function _reportPossibleCrUseOfObjDictionary(extras) {
    _reporterNs.report("ObjDictionary", "../../core/dataStructue/ObjDictionary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmGameConfig(extras) {
    _reporterNs.report("mGameConfig", "../../utils/MGameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCamera2D(extras) {
    _reporterNs.report("Camera2D", "./Camera2D", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerEnum(extras) {
    _reporterNs.report("LayerEnum", "./LayerEnum", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ObjDictionary = _unresolved_2.default;
    }, function (_unresolved_3) {
      mGameConfig = _unresolved_3.default;
    }, function (_unresolved_4) {
      Camera2D = _unresolved_4.default;
    }, function (_unresolved_5) {
      LayerEnum = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e57ahRnG1PNoKQSxATws89", "SceneManager", undefined);

      __checkObsolete__(['Component', 'Node', 'Sprite', 'Vec3']);

      _export("default", SceneManager = class SceneManager {
        get camera() {
          return this._camera;
        }

        get scene() {
          return this._scene;
        }

        constructor() {
          this._camera = void 0;
          this._scene = void 0;
          this._layer_map = void 0;
          this._layer_actor = void 0;
          this._layer_effect = void 0;
          this._layer_tip = void 0;
          this._layer_debug = void 0;
          this._layerDic = void 0;
        }

        init() {// this.init2dScene();
          //Laya.stage.scrollRect = new Rectangle(0, 0, mGameConfig.DeviceW, mGameConfig.DeviceH); 
        }

        init2dScene(scene) {
          this._scene = scene;
          this._layer_map = this._scene.getChildByPath("_layer_map");
          this._layer_actor = this._scene.getChildByPath("_layer_actor");
          this._layer_effect = this._scene.getChildByPath("_layer_effect");
          this._layer_debug = this._scene.getChildByPath("_layer_debug"); // this._layer_tip =  this._scene.getChildByPath("_layer_tip");

          this._layer_debug.active = (_crd && mGameConfig === void 0 ? (_reportPossibleCrUseOfmGameConfig({
            error: Error()
          }), mGameConfig) : mGameConfig).IsDebug;
          this._layerDic = new (_crd && ObjDictionary === void 0 ? (_reportPossibleCrUseOfObjDictionary({
            error: Error()
          }), ObjDictionary) : ObjDictionary)(Node);

          this._layerDic.add((_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
            error: Error()
          }), LayerEnum) : LayerEnum).MapLayer, this._layer_map);

          this._layerDic.add((_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
            error: Error()
          }), LayerEnum) : LayerEnum).ActorLayer, this._layer_actor);

          this._layerDic.add((_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
            error: Error()
          }), LayerEnum) : LayerEnum).EffectLayer, this._layer_effect);

          this._layerDic.add((_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
            error: Error()
          }), LayerEnum) : LayerEnum).DebugLayer, this._layer_debug); // this._layerDic.add(LayerEnum.TipLayer, this._layer_tip);


          this._camera = new (_crd && Camera2D === void 0 ? (_reportPossibleCrUseOfCamera2D({
            error: Error()
          }), Camera2D) : Camera2D)(this._scene);
        } // public showAutoPlayerAni():void
        // {
        // 	let ani:Laya.Animation = new Laya.Animation();
        // 	ani.loadImages(["ui_main/ui_auto_01.png","ui_main/ui_auto_02.png","ui_main/ui_auto_03.png","ui_main/ui_auto_04.png"]);
        // 	ani.pos((mGameConfig.DeviceW>>1)-100, (mGameConfig.DeviceH>>1) + 200);
        // 	Laya.stage.addChild(ani);
        // 	ani.interval = 250;
        // 	ani.play();
        // }


        addToLayer(spr, layer, posX, posY) {
          if (layer === void 0) {
            layer = (_crd && LayerEnum === void 0 ? (_reportPossibleCrUseOfLayerEnum({
              error: Error()
            }), LayerEnum) : LayerEnum).MapLayer;
          }

          if (posX === void 0) {
            posX = 0;
          }

          if (posY === void 0) {
            posY = 0;
          }

          var layerSpr = this._layerDic.get(layer);

          if (layerSpr) {
            layerSpr.addChild(spr);
            spr.setPosition(new Vec3(posX, posY, 0));
          } else {
            console.log("can not find layer " + layer);
          }
        }

        getLayer(layer) {
          return this._layerDic.get(layer);
        } // public getGlobalScreenPos():Point
        // {
        // 	if(this._scene)
        // 		return this._scene.localToGlobal(new Point(this._scene.mouseX, this._scene.mouseY));
        // 	else
        // 		return new Point();
        // }
        // public getMousePos():Point
        // {
        // 	if(this._scene)
        // 		return new Point(this._scene.mouseX, this._scene.mouseY);
        // 	else
        // 		return new Point();
        // }


        update() {
          if (this._camera) this._camera.update();
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new SceneManager();
          }

          return this._instance;
        }

      });

      SceneManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0700ddf0b4954d0e571333ab0fc958af31f4729.js.map