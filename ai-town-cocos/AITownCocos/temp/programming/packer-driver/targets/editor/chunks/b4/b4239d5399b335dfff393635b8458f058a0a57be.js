System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Camera, RenderTexture, director, gfx, SpriteFrame, ImageAsset, Sprite, Texture2D, Vec3, Canvas, WASManager, Log, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, postCardSize, windowSize, upLoadPostcard, TAG, JietuComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function base64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  }

  function _reportPossibleCrUseOfWASManager(extras) {
    _reporterNs.report("WASManager", "../../src/manager/WASManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  _export("base64ToUint8Array", base64ToUint8Array);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Camera = _cc.Camera;
      RenderTexture = _cc.RenderTexture;
      director = _cc.director;
      gfx = _cc.gfx;
      SpriteFrame = _cc.SpriteFrame;
      ImageAsset = _cc.ImageAsset;
      Sprite = _cc.Sprite;
      Texture2D = _cc.Texture2D;
      Vec3 = _cc.Vec3;
      Canvas = _cc.Canvas;
    }, function (_unresolved_2) {
      WASManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Log = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3665a2M/U5PmqNFOdANgO7g", "JietuComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Camera', 'RenderTexture', 'director', 'gfx', 'SpriteFrame', 'ImageAsset', 'Sprite', 'Texture2D', 'EventTouch', 'Vec3', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);
      postCardSize = {
        width: 750,
        height: 1334
      };
      windowSize = {
        width: 750,
        height: 1334
      };

      _export("upLoadPostcard", upLoadPostcard = 'upLoadPostcard');

      TAG = 'JietuComponent';
      /**
       * 
       */

      _export("JietuComponent", JietuComponent = (_dec = ccclass('JietuComponent'), _dec2 = property(Camera), _dec3 = property(Canvas), _dec4 = property(Sprite), _dec(_class = (_class2 = class JietuComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "canvas", _descriptor2, this);

          _initializerDefineProperty(this, "base64HeadSpr", _descriptor3, this);

          this.base64Head = void 0;
          this._renderTex = new RenderTexture();
          this.canmove = false;
        }

        start() {
          this._renderTex.reset({
            width: 750,
            height: 1334
          });

          this.base64HeadSpr.node.on(Node.EventType.TOUCH_START, this.touchStartHandler, this);
          this.base64HeadSpr.node.on(Node.EventType.TOUCH_MOVE, this.touchMOveHandler, this);
          this.base64HeadSpr.node.on(Node.EventType.TOUCH_END, this.touchendHandler, this);
        }

        update(deltaTime) {}
        /** */


        clickCaptureHandler() {
          this.capture(windowSize, "chatLogImage");
        }
        /**生成明信片分享到TG */


        createPostcard() {
          this.capture(postCardSize, 'postcard');
        }
        /**
         * 将camera 绘制的内容渲染到 指定的 rendertexture,对应的canvas内容将失效,不再更新新的数据;
         * @returns 
         */


        capture(size, path) {
          window.global = window;
          let camera = this.camera;
          camera.targetTexture = this._renderTex;
          this.scheduleOnce(() => {
            //this._renderTex.reset(size)
            this.base64Head = this.copyRenderTex(this._renderTex);
            camera.targetTexture = null;
            const generateUniqueId = `id_${Date.now().toString(36)}`;
            let temp = this.base64Head.split("data:image/jpeg;base64,")[1];
            (_crd && WASManager === void 0 ? (_reportPossibleCrUseOfWASManager({
              error: Error()
            }), WASManager) : WASManager).setConfig();
            const arrayBuffer = base64ToUint8Array(temp);
            (_crd && WASManager === void 0 ? (_reportPossibleCrUseOfWASManager({
              error: Error()
            }), WASManager) : WASManager).uploadTextureToS3(arrayBuffer, 'catoss', `${path}/${generateUniqueId}.jpg`); //this.node.emit(message,"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7VdNaxNBGH5md0sJ2mpLNUlT6qEq1KpEhGpJPVSaglUPbcAcRKxSvHgSPBXBX6BnUfCmEBDFqycPildBFPET+pE2pR9pWhLytduZKZvukm1mpjSXkgeWeWfmnWfeeebdN1lSnP9ioQ7QUCc0iBvEisRff/xGcyiCpuAAfxLvPkAWRPSCMPIL0QmYpglN05Cf+wwZCKUInzqBxw8nuc3I+wbjkIGUxlMP7qDT38HtX3+n+Sn2hJjh/eunFfvmvUdCf2liJonP18ztP/9nhf5K6Xa29zhvmdYiOZSIT/f2VOxnL9/U9CWq9ZjlM8PJnm58/5TY0W+f1wrnhbUdasGeETsvbHQ4UtNX6fKOha8jmVriNl1X01cp4vnFZd4eFsigRDx4dRKWtXW42LUhob+UFOzS+odvc2L2Wmf+fRQtkYs4On6/Eu2LJ1MyS8TErP6m19a5PRqNID42AhkYtSaZBJcuhvnTHQrwuiwLUq//bkbq28+tHejvmUXLIdOSEFLRlM/RvhO2j6+9DQcCHdB1vYqYvB27TBnYwp0Cd85t2yyQluBRnJu4gdaQvzriUr6A3YBtkVvNoFzIe84b4Vvj2z2TRqO5j+0ac9hE03HQf4RGG/Am1rs6oekEZtlytS5uxxztYXU5jQ2agu25LFrpiO5FnHj+CiowyyZy2SxvjSYDsbtx9J0/U028ns5AFXbGFAtFLMwkvYlHYldc6WWnFuvbaeUcLxVLWEymsLaShr8riP6hAc/NSePjxsYmos7ZM/x85v8AAAAASUVORK5CYII=");
          }, 1);
          return "";
        }
        /**
         * 将rendertexture 中的内容复制出来
         * @param renderTex 
         * @returns 
         */


        copyRenderTex(renderTex) {
          let arrayBuffer = new ArrayBuffer(renderTex.width * renderTex.height * 4);
          let region = new gfx.BufferTextureCopy();
          region.texOffset.x = 0;
          region.texOffset.y = 0;
          region.texExtent.width = renderTex.width;
          region.texExtent.height = renderTex.height;
          let dataview = new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength); // console.log(dataview);[0,0,0,0,0,0,0,0,0,0,0,,,]
          //获取到纹理数据

          director.root.device.copyTextureToBuffers(renderTex.getGFXTexture(), [dataview], [region]); // director.root.device.copyFramebufferToBuffer(renderTex.window.framebuffer, arrayBuffer, [region]);
          // console.log(dataview);[0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255,,,,]

          return this.toB64(dataview.buffer);
        }
        /**
         * 通过htmlcanvas ,将纹理缓冲绘制到canvas,
         * 将canvas 上图片转换为base64 数据;
         * @param arrayBuffer 
         * @returns 
         */


        toB64(arrayBuffer) {
          let canvas = document.createElement('canvas');
          let width = canvas.width = Math.floor(750);
          let height = canvas.height = Math.floor(1334);
          let ctx = canvas.getContext('2d');
          let imageU8Data = new Uint8Array(arrayBuffer);
          let rowBytes = width * 4;
          let rowBytesh = height * 4;

          for (let row = 0; row < rowBytesh; row++) {
            let sRow = height - 1 - row;
            let imageData = ctx.createImageData(width, 1);
            let start = sRow * rowBytes;

            for (let i = 0; i < rowBytes; i++) {
              imageData.data[i] = imageU8Data[start + i];
            }

            ctx.putImageData(imageData, 0, row);
          }

          var base64 = canvas.toDataURL("image/jpeg", 0.1); //压缩语句

          try {
            localStorage.setItem('base64Head', base64);
          } catch (error) {} // console.log('base64', base64)


          return base64;
        }

        copybase64toSprite(evt) {
          let img = new Image();
          let texture = new Texture2D();
          img.src = this.base64Head;

          img.onload = () => {
            texture.image = new ImageAsset(img);
            const spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            this.base64HeadSpr.getComponent(Sprite).spriteFrame = spriteFrame;
            this.scheduleOnce(() => {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, this.base64HeadSpr);
            });
          };
        }

        touchStartHandler(Tevt) {
          this.canmove = true;
        }

        touchMOveHandler(Tevt) {
          let loca = Tevt.getLocation();

          if (this.canmove) {
            // this.base64HeadSpr.node.position = new Vec3(loca.x,loca.y);
            this.base64HeadSpr.node.worldPosition = new Vec3(loca.x, loca.y);
          }
        }

        touchendHandler(evt) {
          this.canmove = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "base64HeadSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4239d5399b335dfff393635b8458f058a0a57be.js.map