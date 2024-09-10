System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ZhongziComponent;

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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2af32cFehCF6vSW9OfFCCf", "ZhongziComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ZhongziComponent", ZhongziComponent = (_dec = ccclass('ZhongziComponent'), _dec2 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class ZhongziComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemarr", _descriptor, this);

          this._data = void 0;
        }

        start() {
          this.node.on("setdata", this.setData, this);
        }

        setData(data) {
          if (!data) {
            return;
          }

          this._data = data;

          for (var i = 0; i < this.itemarr.length; i++) {
            if (data[i]) {
              this.itemarr[i].active = true;
            } else {
              this.itemarr[i].active = false;
            }

            this.itemarr[i].emit("update_data", data[i]); // this.itemarr[i].getComponent(GoumaiZZItem).updateData(da[i]);
          }
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off("setdata");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemarr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07ae4bc37a548048d29bba42a59c7cd022a565b5.js.map