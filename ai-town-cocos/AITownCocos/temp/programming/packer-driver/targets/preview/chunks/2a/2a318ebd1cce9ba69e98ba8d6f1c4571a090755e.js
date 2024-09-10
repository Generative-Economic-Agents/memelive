System.register(["__unresolved_0", "cc", "lodash-es"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, forEach, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PageViewItemCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfforEach(extras) {
    _reporterNs.report("forEach", "lodash-es", _context.meta, extras);
  }

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
    }, function (_lodashEs) {
      forEach = _lodashEs.forEach;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ad014mwCRAdqUJtltjVPEM", "PageViewItemCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PageViewItemCtrl", PageViewItemCtrl = (_dec = ccclass('PageViewItemCtrl'), _dec2 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class PageViewItemCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemarr", _descriptor, this);
        }

        start() {}

        updateData(da) {
          for (var i = 0; i < this.itemarr.length; i++) {
            if (da[i]) {
              this.itemarr[i].active = true;
            } else {
              this.itemarr[i].active = false;
            }

            this.itemarr[i].emit("update_data", da[i]); // this.itemarr[i].getComponent(GoumaiZZItem).updateData(da[i]);
          }
        }

        update(deltaTime) {}

        onDestroy() {
          (_crd && forEach === void 0 ? (_reportPossibleCrUseOfforEach({
            error: Error()
          }), forEach) : forEach)(this.itemarr, function (value) {
            value.destroy();
          });
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
//# sourceMappingURL=2a318ebd1cce9ba69e98ba8d6f1c4571a090755e.js.map