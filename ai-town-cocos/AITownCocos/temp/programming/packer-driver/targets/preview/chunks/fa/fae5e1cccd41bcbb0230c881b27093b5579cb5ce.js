System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, dragonBones, ProgressBar, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, DragonbonesCtrl, NORMAL_ANIMATION_GROUP;

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
      dragonBones = _cc.dragonBones;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20abbDaRt1FmZCLbyjUfp3w", "dragonbonesCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'dragonBones', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonbonesCtrl", DragonbonesCtrl = (_dec = ccclass("DragonbonesCtrl"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: ProgressBar
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = class DragonbonesCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_role", _descriptor, this);

          _initializerDefineProperty(this, "prg_blood", _descriptor2, this);

          _initializerDefineProperty(this, "label_over", _descriptor3, this);

          this._isAttack = void 0;
          this._armature = null;
          this._armatureDisplay = null;
          this._role = void 0;
          this._rolearm = void 0;
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
          this._armature = this._armatureDisplay.armature();
          this.node.on(Node.EventType.TOUCH_START, event => {
            this.startAttack();
          }, this); // [3]
        }

        onLoad() {
          var _this$node_role, _this$_role;

          if (this.prg_blood) {
            this.prg_blood.progress = 1;
          }

          if (this.label_over) {
            this.label_over.node.active = false;
          }

          this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);

          this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);

          this._role = (_this$node_role = this.node_role) == null ? void 0 : _this$node_role.getComponent(dragonBones.ArmatureDisplay);
          this._rolearm = (_this$_role = this._role) == null ? void 0 : _this$_role.armature();

          this._rolearm.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);
        }

        _animationEventHandler(event) {
          if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) {} else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {} else if (event.type === dragonBones.EventObject.COMPLETE) {
            if (event.animationState.name === "hurt") {
              this._isAttack = false;
            }
          }
        }

        startAttack() {
          if (this.prg_blood) {
            this.prg_blood.progress -= 0.1;
          }

          if (this.prg_blood && this.prg_blood.progress <= 0) {
            if (this.label_over) {
              this.label_over.node.active = true;
            }

            return;
          }

          this._armature.animation.fadeIn("hurt", -1, -1, 0, NORMAL_ANIMATION_GROUP);

          console.log("role::", this._role, this._isAttack);

          if (this._rolearm && !this._isAttack) {
            this._isAttack = true;
            console.log("play role===================");

            this._rolearm.animation.fadeIn("hurt", -1, -1, 0, NORMAL_ANIMATION_GROUP);
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prg_blood", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label_over", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      NORMAL_ANIMATION_GROUP = "normal";
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
//# sourceMappingURL=fae5e1cccd41bcbb0230c881b27093b5579cb5ce.js.map