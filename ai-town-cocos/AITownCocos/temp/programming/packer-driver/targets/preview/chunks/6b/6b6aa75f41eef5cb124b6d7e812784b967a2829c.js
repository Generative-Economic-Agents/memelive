System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TabViewListItemComponent;

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
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86804vyF65MCLRCRqW9+sEJ", "TabViewListItemComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabViewListItemComponent", TabViewListItemComponent = (_dec = ccclass('TabViewListItemComponent'), _dec2 = property(Label), _dec(_class = (_class2 = class TabViewListItemComponent extends Component {
        constructor() {
          super(...arguments);
          this._data = void 0;

          _initializerDefineProperty(this, "Label_name", _descriptor, this);
        }

        start() {
          this.node.on("setdata", this.setData, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEndHandler, this);
        }

        touchEndHandler(evt) {}

        setData(data) {
          this._data = data;
          this.Label_name.string = this._data.name;
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off("setdata");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec2], {
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
//# sourceMappingURL=6b6aa75f41eef5cb124b6d7e812784b967a2829c.js.map