System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, Node, NPCDirect, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NewComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNPCDirect(extras) {
    _reporterNs.report("NPCDirect", "../StaticUtils/KeyCodeUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCDisplayInfo(extras) {
    _reporterNs.report("NPCDisplayInfo", "../StaticUtils/KeyCodeUtils", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      NPCDirect = _unresolved_2.NPCDirect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7904dYEWZhA+od05T6U8oca", "NPCControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Event', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Node', 'sys', 'System', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass('NewComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class NewComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "npcRoot", _descriptor, this);

          _initializerDefineProperty(this, "npc", _descriptor2, this);

          _initializerDefineProperty(this, "hair", _descriptor3, this);

          _initializerDefineProperty(this, "pants", _descriptor4, this);

          _initializerDefineProperty(this, "shirt", _descriptor5, this);

          this.keyDown = false;
          //是否处于按下状态
          this.currentDirectKey = void 0;
          //当前按下的按键是那个
          this.npcDisplayInfo = {
            hair: 0,
            pants: 0,
            shirt: 0
          };
        }

        //当前选择的人物的服装信息
        start() {
          this.setNPCDisplay({
            hair: -256,
            pants: -1280,
            shirt: -512
          });
          input.on(Input.EventType.KEY_DOWN, event => {
            this.setNPCMoveDirect(event.keyCode);
            this.keyDown = true;
            this.currentDirectKey = event.keyCode;
          });
          input.on(Input.EventType.KEY_UP, event => {
            this.keyDown = false;
          });
        }

        update(deltaTime) {
          if (this.keyDown) {
            this.setNPCMoveDirect(this.currentDirectKey);
            this.setMoveSprite(this.currentDirectKey);
          }
        }

        setNPCDisplayBase() {}

        setNPCDisplay(npcDisplayInfo) {
          if (npcDisplayInfo === void 0) {
            npcDisplayInfo = {
              hair: 0,
              pants: 0,
              shirt: 0
            };
          }

          this.npcDisplayInfo = npcDisplayInfo;
          this.hair.setPosition(this.npcDisplayInfo.hair, 0);
          this.pants.setPosition(this.npcDisplayInfo.pants, 0);
          this.shirt.setPosition(this.npcDisplayInfo.shirt, 0);
        }

        setNPCMoveDirect(key) {
          this.npcRoot.setPosition(this.npcRoot.getPosition().x, (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
            error: Error()
          }), NPCDirect) : NPCDirect)[key].directPos);
          this.setNPCPosition(key);
        }

        setNPCPosition(key) {
          var originPos = this.npc.getPosition();
          this.npc.setPosition(originPos.x + (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
            error: Error()
          }), NPCDirect) : NPCDirect)[key].offsetX, originPos.y + (_crd && NPCDirect === void 0 ? (_reportPossibleCrUseOfNPCDirect({
            error: Error()
          }), NPCDirect) : NPCDirect)[key].offsetY);
        }

        setMoveSprite(key) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "npcRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "npc", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hair", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pants", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shirt", [_dec6], {
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
//# sourceMappingURL=802d9bec0549c448e25c771e3550292a6238d3c3.js.map