System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Color, CCBoolean, tween, Vec3, CCFloat, uiMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, TKComponents;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../game/App", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      CCBoolean = _cc.CCBoolean;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      uiMgr = _unresolved_2.uiMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39abb7Vq/1ISKqkFqi+T8RQ", "TKComponents", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Sprite', 'UIOpacity', 'Color', 'CCBoolean', 'tween', 'Vec4', 'Vec3', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TKComponents", TKComponents = (_dec = ccclass('TKComponents'), _dec2 = property({
        type: CCBoolean,
        displayName: '是否播动效'
      }), _dec3 = property({}), _dec4 = property({}), _dec5 = property({
        type: CCFloat,
        displayName: '弹窗动效',
        tooltip: '1.缩放;'
      }), _dec6 = property({
        type: CCFloat,
        displayName: '动效时长',
        tooltip: '动效时长'
      }), _dec7 = property({
        type: CCFloat,
        displayName: '初始缩放',
        tooltip: '初始缩放：弹窗动效为 1 时生效'
      }), _dec8 = property({
        type: CCFloat,
        displayName: '动效对象'
      }), _dec(_class = (_class2 = class TKComponents extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isplayAni", _descriptor, this);

          _initializerDefineProperty(this, "isShapeClose", _descriptor2, this);

          _initializerDefineProperty(this, "isShowShape", _descriptor3, this);

          _initializerDefineProperty(this, "actionType", _descriptor4, this);

          _initializerDefineProperty(this, "actionTime", _descriptor5, this);

          _initializerDefineProperty(this, "startScale", _descriptor6, this);

          _initializerDefineProperty(this, "tweenTarget", _descriptor7, this);
        }

        start() {
          // [3]
          var s = this;
        }

        onEnable() {
          var s = this;

          if (s.isplayAni) {
            this.tweenTarget = this.tweenTarget || s.node.getChildByName("container");

            if (!this.tweenTarget) {
              return;
            }

            this.showAni();
          }

          if (!s.isShowShape) {
            var spr_bg = s.node.getChildByName("spr_bg"); // spr_bg.color = "#0C0B0B9F";?

            spr_bg.getComponent(Sprite).color = new Color(12, 11, 11, 0); // spr_bg.node.addComponent(UIOpacity);
            // const opacityComp = spr_bg.getComponent(UIOpacity);
            // opacityComp.opacity = 0;
          } else {}

          if (s.isShapeClose) {
            var _spr_bg = s.node.getChildByName("spr_bg");

            _spr_bg.on(Node.EventType.TOUCH_START, s.closeHandler, s);
          }
        }

        showAni() {
          var dialogTween = tween(this.node);

          switch (this.actionType) {
            case 1:
              this.node.scale = new Vec3(this.startScale, this.startScale, this.startScale);
              dialogTween.to(this.actionTime, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              });
              break;

            default:
              break;
          }

          dialogTween.start();
        }
        /**
         * close 关闭
         * @param e 
         */


        closeHandler(e, evtdata) {
          if (evtdata === void 0) {
            evtdata = null;
          }

          var s = this;
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent(s.node.name);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isplayAni", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isShapeClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isShowShape", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "actionType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "actionTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startScale", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tweenTarget", [_dec8], {
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
//# sourceMappingURL=b6796bbb0563dfdfe929d8e1822a25d7226a5332.js.map