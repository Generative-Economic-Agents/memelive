System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteAtlas, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SpriteAtlasAnimation;

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
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb75cwMZNRJaaZS8dSkCqxP", "SpriteAtlasAnimation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'SpriteAtlas', 'director', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteAtlasAnimation", SpriteAtlasAnimation = (_dec = ccclass('SpriteAtlasAnimation'), _dec2 = property(Sprite), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = class SpriteAtlasAnimation extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          // 精灵组件
          _initializerDefineProperty(this, "atlas", _descriptor2, this);

          // SpriteAtlas 资源
          _initializerDefineProperty(this, "prefix", _descriptor3, this);

          // 序列帧名称前缀
          _initializerDefineProperty(this, "fps", _descriptor4, this);

          // 每秒帧数
          this.frames = [];
          // 存储序列帧
          this.currentFrame = 0;
          // 当前帧
          this.timer = 0;

          // 计时器
          _initializerDefineProperty(this, "hideOnComplete", _descriptor5, this);

          // 是否在播放完毕后隐藏
          this.onCompleteCallback = null;
          // 播放完毕后的回调函数
          this.totalFrames = 0;
        }

        // 设置播放完毕后的回调
        setOnCompleteCallback(callback) {
          this.onCompleteCallback = callback;
        }

        start() {
          if (!this.atlas) {
            console.error('SpriteAtlas is not assigned!');
            return;
          }

          this.enabled = false; // 加载所有序列帧

          this.frames = this.atlas.getSpriteFrames();
          this.totalFrames = this.frames.length - 1; // 可以根据需要对 frames 进行排序或筛选
          // 例如，如果序列帧命名有规律，可以用前缀筛选
          // this.frames = this.frames.filter(frame => frame.name.startsWith(this.prefix));

          this.currentFrame = 0;
          this.timer = 0;
        } // 播放动画


        play() {
          this.enabled = true; // 启用 update 方法

          this.show();
        } // 停止动画


        stop() {
          this.enabled = false; // 禁用 update 方法

          this.currentFrame = 0; // 重置到第一帧
        } // 隐藏 Sprite


        hide() {
          if (this.sprite) {
            this.sprite.enabled = false;
          }
        } // 显示 Sprite


        show() {
          if (this.sprite) {
            this.sprite.enabled = true;
          }
        }

        update(deltaTime) {
          if (this.enabled) {
            // ... 现有的帧更新逻辑 ...
            if (this.frames.length === 0 || !this.sprite) {
              return;
            }

            this.timer += deltaTime;

            if (this.timer >= 1 / this.fps) {
              this.sprite.spriteFrame = this.frames[this.currentFrame];
              this.currentFrame = (this.currentFrame + 1) % this.frames.length;
              this.timer = 0;
            }

            if (this.currentFrame >= this.totalFrames) {
              var _this$onCompleteCallb;

              if (this.hideOnComplete) {
                this.hide(); // 播放完毕后隐藏
              }

              (_this$onCompleteCallb = this.onCompleteCallback) == null || _this$onCompleteCallb.call(this); // 调用回调函数

              this.stop(); // 停止动画
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'frame';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fps", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hideOnComplete", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db1fc329feed080fca19b613ea2fa39960a9a49c.js.map