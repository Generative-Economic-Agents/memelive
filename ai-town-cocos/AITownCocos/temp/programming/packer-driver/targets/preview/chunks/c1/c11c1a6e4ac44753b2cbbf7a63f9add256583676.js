System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, uiMgr, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, ShowMsgPanelComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../App", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      uiMgr = _unresolved_2.uiMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99163YI9iBOmYM+ZAQ+8ZC+", "ShowMsgPanelComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowMsgPanelComponent", ShowMsgPanelComponent = (_dec = ccclass('ShowMsgPanelComponent'), _dec2 = property(Label), _dec(_class = (_class2 = (_class3 = class ShowMsgPanelComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Label_content", _descriptor, this);
        }

        start() {
          // this.scheduleOnce(this.closeself,3);
          this.Label_content.string = ShowMsgPanelComponent.CONTENT;
        }

        closeself(d) {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/rewards/pre_showMsg");
        }

        update(deltaTime) {}

      }, _class3.CONTENT = "", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_content", [_dec2], {
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
//# sourceMappingURL=c11c1a6e4ac44753b2cbbf7a63f9add256583676.js.map