System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, AStarStep;

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
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cccad9OJuZJ4rPV7RplJWJ4", "AStarStep", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec2', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AStarStep", AStarStep = (_dec = ccclass('AStarStep'), _dec2 = property(Vec2), _dec3 = property({
        type: Number
      }), _dec4 = property(AStarStep), _dec(_class = (_class2 = class AStarStep extends Component {
        get f() {
          return this.g + this.h;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "position", _descriptor, this);

          _initializerDefineProperty(this, "g", _descriptor2, this);

          _initializerDefineProperty(this, "h", _descriptor3, this);

          _initializerDefineProperty(this, "last", _descriptor4, this);

          if (arguments.length > 0 && (arguments.length <= 0 ? undefined : arguments[0]) instanceof Vec2) {
            this.position = arguments.length <= 0 ? undefined : arguments[0];
          }
        }

        equalTo(other) {
          return other instanceof AStarStep && this.position.equals(other.position);
        }

        toString() {
          return "(position: " + this.position + ", g: " + this.g + ", h: " + this.h + ", f: " + this.f + ")";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "g", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "h", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "f", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "f"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "last", [_dec4], {
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
//# sourceMappingURL=3f4ec990ad5176e84cfe93e1bdf7bbcde5f6b1b5.js.map