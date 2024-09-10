System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Material, Sprite, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, testTransition;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Material = _cc.Material;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e5f5puF6dAMZ2qxtoyyB8R", "testTransition", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Material', 'Node', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("testTransition", testTransition = (_dec = ccclass('testTransition'), _dec2 = property(Material), _dec3 = property(Sprite), _dec(_class = (_class2 = class testTransition extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mats", _descriptor, this);

          _initializerDefineProperty(this, "sp", _descriptor2, this);
        }

        start() {
          this.startTransition();
        }

        startTransition() {
          let start = {
            num: 0
          };
          let end = {
            num: 255
          };
          const sp = this.sp;
          const color = new Color(255, 255, 255);
          sp.color = color;
          const mat = this.mats;
          sp.material = mat;
          tween(start).delay(0.0016).to(2.5, end, {
            onUpdate(target, ratio) {
              color.r = target.num;
              sp.color = color;
            }

          }).start();
        }

        reverse() {
          let start = {
            num: 0
          };
          let end = {
            num: 255
          };
          const sp = this.sp;
          const color = new Color(255, 255, 255);
          sp.color = color;
          const mat = this.mats;
          sp.material = mat;
          tween(start).delay(0.0016).to(2.5, end, {
            onUpdate(target, ratio) {
              color.r = target.num;
              sp.color = color;
            }

          }).start();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mats", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6788a152490c1d04d68c8138bfd4bddaa2552254.js.map