System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Animation, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ToastMask;

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
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c02b2L6nWpHu6GilWUgjCtS", "toastMask", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToastMask", ToastMask = (_dec = ccclass('ToastMask'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class ToastMask extends Component {
        constructor() {
          super(...arguments);

          // [1]
          // dummy = '';
          // [2]
          // @property
          // serializableDummy = 0;
          _initializerDefineProperty(this, "spr_bg", _descriptor, this);

          _initializerDefineProperty(this, "roots", _descriptor2, this);

          this._timer = void 0;
        }

        start() {// [3]
        }

        onEnable() {
          // [4]
          this.node.getComponent(Animation).play();
        }

        effectHandler(param) {
          console.log("effectHandler");
          this._timer = setTimeout(() => {
            if (this.roots.isValid) this.roots.removeFromParent();
          }, 3100);
        }

        onDisable() {
          clearTimeout(this._timer);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spr_bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roots", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be733acdc5933c4f465950bba921804f1507eba9.js.map