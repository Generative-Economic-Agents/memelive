System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Vec3, tween, UITransform, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScrollingText;

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
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ed5dIGCVpDe5xl8+WvB4BG", "ScrollingText", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Vec3', 'tween', 'UITransform', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollingText", ScrollingText = (_dec = ccclass('ScrollingText'), _dec2 = property(Label), _dec(_class = (_class2 = class ScrollingText extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);

          this.scrollDuration = 5;

          // 滚动一次的持续时间
          _initializerDefineProperty(this, "scrollSpeed", _descriptor2, this);

          //一秒钟滚动多少宽度
          _initializerDefineProperty(this, "loopCount", _descriptor3, this);

          // 循环次数
          this._currentLoop = 0;
          // 当前循环次数
          this._originalPosition = new Vec3();
        }

        // 原始位置
        start() {
          //test...
          //    let obj=  modelMgr.configModel.getconfigByGrpAId(StaticConfigModel.TaskCfg,10005);
          //   this.startScroll(obj.showmsg)        // 保存原始位置
          // 保存原始位置
          this._originalPosition = this.node.position.clone();
        }

        startScroll(txt) {
          this.setText(txt);
          this.scheduleOnce(() => {
            this.node.setPosition(this._originalPosition);
            this.startScrolling();
          }, 0);
        }

        startScrolling() {
          if (this.label && this.label.node.getComponent(UITransform)) {
            // 计算文本结束位置
            var labelWidth = this.label.node.getComponent(UITransform).width;
            this.scrollDuration = (labelWidth + this._originalPosition.x) / this.scrollSpeed;
            var endPosition = new Vec3(-labelWidth, this._originalPosition.y, this._originalPosition.z); // 创建并运行滚动动画

            tween(this.node).to(this.scrollDuration, {
              position: endPosition
            }).call(() => {
              // 循环逻辑
              this._currentLoop++;

              if (this._currentLoop < this.loopCount) {
                // 重置位置并重新开始滚动
                this.node.position = this._originalPosition;
                this.startScrolling();
              } else {
                // 抛出完成事件
                this.node.emit('scrolling-finished'); // 重置循环次数

                this._currentLoop = 0;
              }
            }).start();
          }
        } // 设置文本内容的方法


        setText(content) {
          if (this.label) {
            this.label.string = content;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loopCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class)); // 其他对象监听 'scrolling-finished' 事件的示例
      // const scrollingTextComponent = this.node.getComponent(ScrollingText);
      // if (scrollingTextComponent) {
      //     scrollingTextComponent.node.on('scrolling-finished', () => {
      //         console.log('Scrolling finished!');
      //         // 在这里执行其他逻辑
      //     });
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04b34c607ab8142bf66bd465c900eed796f099ab.js.map