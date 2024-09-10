System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SpinBoxComponent;

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
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f00ab1evnhET72fhxexgsa/", "SpinBoxComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpinBoxComponent", SpinBoxComponent = (_dec = ccclass('SpinBoxComponent'), _dec2 = property(EditBox), _dec3 = property(Number), _dec4 = property(Number), _dec(_class = (_class2 = class SpinBoxComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "textLabel", _descriptor, this);

          //输入文本框
          _initializerDefineProperty(this, "min", _descriptor2, this);

          //最小值
          _initializerDefineProperty(this, "max", _descriptor3, this);

          //最大值
          this.temp = void 0;
        }

        start() {}

        onLoad() {
          this.textLabel.node.active = true;
          this.textLabel.string = String(this.min);
        }

        update(deltaTime) {}

        up(evt, num) {
          // 调高数字
          var temp = Number(this.textLabel.string) + Number(num);

          if (temp > this.max) {
            temp = this.max;
          }

          this.textLabel.string = String(temp);
          this.node.emit("update_money", this.textLabel.string);
        }

        down(evt, num) {
          // 调低数字
          var temp = Number(this.textLabel.string) - Number(num);

          if (temp < this.min) {
            temp = this.min;
          }

          this.textLabel.string = String(temp);
          this.node.emit("update_money", this.textLabel.string);
        }

        inputBegin() {
          // 输入开始
          this.temp = this.textLabel.string;
        }

        inputDone() {
          // 输入结束
          if (isNaN(Number(this.textLabel.string))) {
            this.textLabel.string = this.temp; // 如果输入非数字则数字不变
          } else if (Number(this.textLabel.string) > this.max) {
            // 输入数字不能超过最大值
            this.textLabel.string = String(this.max);
          } else if (Number(this.textLabel.string) < this.min) {
            // 输入数字不能小于最小值
            this.textLabel.string = String(this.min);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "min", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "max", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=edb9126365953de86cc39bfa3fdd6c11b805d1ee.js.map