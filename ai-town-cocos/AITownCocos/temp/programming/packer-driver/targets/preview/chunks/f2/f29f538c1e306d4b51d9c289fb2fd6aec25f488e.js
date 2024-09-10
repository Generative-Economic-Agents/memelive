System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, sp, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ske, image, atlas, ske1, image1, atlas1, ske2, image2, atlas2, ToySpineMap, testSpine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3595FdQtRPJrfrNFph9xQR", "testSpine", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'ImageAsset', 'Node', 'random', 'randomRange', 'randomRangeInt', 'resources', 'sp', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);
      ske = "spinetest/estp_f/estp.json";
      image = "spinetest/estp_f/estp.png";
      atlas = "spinetest/estp_f/estp.atlas";
      ske1 = "spinetest/esfp_f/estp.json";
      image1 = "spinetest/esfp_f/estp.png";
      atlas1 = "spinetest/esfp_f/estp.atlas";
      ske2 = "spinetest/estp_f/entp.json";
      image2 = "spinetest/estp_f/entp.png";
      atlas2 = "spinetest/estp_f/entp.atlas"; //assets/resources/spinetest/estp_f/estp.atlas

      _export("ToySpineMap", ToySpineMap = {
        10101003: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/can_f/can.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/can_f/can.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/can_f/can.png'
        },
        10101004: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Cat_strips_f/Cat_strips.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Cat_strips_f/Cat_strips.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Cat_strips_f/Cat_strips.png'
        },
        10101005: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/sponge_f/sponge.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/sponge_f/sponge.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/sponge_f/sponge.png'
        },
        10101006: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Natural_Cat_Stick/Natural_Cat_Stick.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Natural_Cat_Stick/Natural_Cat_Stick.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Natural_Cat_Stick/Natural_Cat_Stick.png'
        },
        10101007: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Scratch_board/Scratch_board.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Scratch_board/Scratch_board.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/Scratch_board/Scratch_board.png'
        },
        10101008: {
          atlas: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/mouse/mouse.atlas',
          json: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/mouse/mouse.json',
          img: 'https://catoss.s3.ap-southeast-1.amazonaws.com/spine_toy/mouse/mouse.png'
        }
      }); // let image = "http://localhost/download/spineres/1/1.png";
      // let ske = "http://localhost/download/spineres/1/1.json";
      // let atlas = "http://localhost/download/spineres/1/1.atlas";


      _export("testSpine", testSpine = (_dec = ccclass('testSpine'), _dec2 = property(sp.Skeleton), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.Skeleton), _dec(_class = (_class2 = class testSpine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ske", _descriptor, this);

          _initializerDefineProperty(this, "skeData", _descriptor2, this);

          _initializerDefineProperty(this, "toy", _descriptor3, this);

          this._turn = 0;
          this.currentAdd = 0;
          this.spine_default_stop = false;
        }

        start() {//this.ske.setAnimation(0, 'idle', true);
          //this.loadRemoteSpineRes()
          // this.ske.setCompleteListener((data: sp.spine.TrackEntry)=>{
          //     if(data.animation.name === 'action'){
          //         this.spine_default_stop = true
          //         const actStr = randomRangeInt(0, 2) ? 'idle' : 'walk' 
          //         this.playSpineAnimation(actStr, true)
          //     }else{
          //         if(this.currentAdd >= 10){
          //             const refresh = randomRangeInt(0, 2) ? 'idle' : 'walk' 
          //             this.playSpineAnimation(refresh, true)
          //             this.currentAdd = 0
          //         }
          //     }
          //     console.log('game Complete', data.animation.name)
          // })
          // this.loadRemoteSpineRes(atlas, ske, image, this.ske, null, ()=>{
          //     this.playSpineAnimation('idle', true)
          // })
        }

        setSke1() {
          this.loadRemoteSpineRes(atlas1, ske1, image1, this.ske, null, () => {
            this.playSpineAnimation('idle', true);
          });
        }

        setSke2() {
          this.loadRemoteSpineRes(atlas2, ske2, image2, this.ske, null, () => {
            this.playSpineAnimation('idle', true);
          });
        }

        update(deltaTime) {
          // if (this._turn === 0) {
          // 	this.ske.skeletonData = null;
          // } else {
          // 	this.ske.skeletonData= this.skeData;
          // 	this.ske.setAnimation(0, 'walk', true);
          // }
          // this._turn = (this._turn + 1) % 2;/Users/feiwang/cutepet_test_self/assets/cases/spine/can
          this.currentAdd += deltaTime;
        }

        clickCat() {
          this.toy.node.active = true;
          this.playSpineAnimation('action', false);
        }

        loadRemoteSpineRes(atlas, ske, image, ske_component, cat, call_back) {
          if (cat === void 0) {
            cat = null;
          }

          resources.loadDir('spinetest/entp_f', data => {
            console.log('======', data);
          }); // assetManager.loadAny([{ url: atlas, ext: '.txt' }, { url: ske, ext: '.txt' }], (error, assets) => {
          //     assetManager.loadRemote(image, (error, spine_texture: ImageAsset) => {
          //         let asset = new sp.SkeletonData();
          //         asset.skeletonJson = JSON.parse(assets[1]);
          //         asset.atlasText = assets[0];
          //         let texture = new Texture2D();
          //         texture.image = spine_texture;
          //         asset.textures = [texture];
          //         asset.textureNames = ['cc.png'];
          //         asset._uuid = ske; // 可以传入任意字符串，但不能为空
          //         ske_component.skeletonData = asset;
          //         cat && (cat.active = false)
          //         call_back()
          //         //this.playSpineAnimation('idle')
          //     });
          // });
        }

        playSpineAnimation(aniName, loop) {
          this.ske.setAnimation(0, aniName, loop);
        }

        playToySpineAnimation(aniName, loop) {
          this.toy.setAnimation(0, aniName, loop);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ske", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skeData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toy", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f29f538c1e306d4b51d9c289fb2fd6aec25f488e.js.map