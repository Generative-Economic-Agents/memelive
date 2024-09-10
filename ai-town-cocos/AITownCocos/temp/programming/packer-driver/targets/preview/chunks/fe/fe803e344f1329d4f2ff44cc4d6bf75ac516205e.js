System.register(["__unresolved_0", "cc", "__unresolved_1", "lodash"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Node, NPCControl, originRootX, _, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PlayerControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNPCControl(extras) {
    _reporterNs.report("NPCControl", "./NPCControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOforiginRootX(extras) {
    _reporterNs.report("originRootX", "./NPCControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_(extras) {
    _reporterNs.report("_", "lodash", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      NPCControl = _unresolved_2.NPCControl;
      originRootX = _unresolved_2.originRootX;
    }, function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "704a4+xwS1FRpeA1PHgoxpv", "PlayerControl", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'Component', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerControl", PlayerControl = (_dec = ccclass('PlayerControl'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class PlayerControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "createRoleInfoNode", _descriptor2, this);
        }

        start() {
          input.on(Input.EventType.KEY_DOWN, event => {
            if (this.createRoleInfoNode.active || !(_crd && _ === void 0 ? (_reportPossibleCrUseOf_({
              error: Error()
            }), _) : _).includes([KeyCode.KEY_A, KeyCode.KEY_W, KeyCode.KEY_S, KeyCode.KEY_D], event.keyCode)) {
              return;
            }

            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).setNPCMoveDirect(event.keyCode);
            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).keyDown = true;
            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).currentDirectKey = event.keyCode;
          });
          input.on(Input.EventType.KEY_UP, event => {
            if (this.createRoleInfoNode.active) {
              return;
            }

            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).keyDown = false;
            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).npcRoot.setPosition(_crd && originRootX === void 0 ? (_reportPossibleCrUseOforiginRootX({
              error: Error()
            }), originRootX) : originRootX, this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).npcRoot.getPosition().y);
            this.player.getComponent(_crd && NPCControl === void 0 ? (_reportPossibleCrUseOfNPCControl({
              error: Error()
            }), NPCControl) : NPCControl).stepIndex = 0;
          });
        } // update(deltaTime: number) {
        //     this.createRoleInfoNode.setPosition(this.player.getPosition().x, this.player.getPosition().y)
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "createRoleInfoNode", [_dec3], {
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
//# sourceMappingURL=fe803e344f1329d4f2ff44cc4d6bf75ac516205e.js.map