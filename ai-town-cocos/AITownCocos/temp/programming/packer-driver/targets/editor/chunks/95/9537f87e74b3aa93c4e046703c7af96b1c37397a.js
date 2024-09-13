System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ScrollView, Vec2, GlobalConfig, WebUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, npcICON, NpcHomeName, NpcViewName, touch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../utils/WebUtils", _context.meta, extras);
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
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GlobalConfig = _unresolved_2.GlobalConfig;
    }, function (_unresolved_3) {
      WebUtils = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bb17DPH0tO8KMeF6jKqHT7", "touch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'ScrollView', 'Sprite', 'SystemEvent', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("npcICON", npcICON = {
        0: "home/topInfoColum/Farmer",
        1: "home/topInfoColum/Grocer",
        2: "home/topInfoColum/Baker",
        3: "home/topInfoColum/FLOKI",
        4: "home/topInfoColum/Herdman",
        5: "home/PePe"
      });

      _export("NpcHomeName", NpcHomeName = {
        0: "Farmer Home",
        1: "Grocer Home",
        2: "Baker Home",
        3: "FLOKI Home",
        4: "Herdman Home",
        5: "PePe Home"
      });

      _export("NpcViewName", NpcViewName = {
        0: "Farmer View",
        1: "Grocer View",
        2: "Baker View",
        3: "FLOKI View",
        4: "Herdman View",
        5: "PePe View"
      });

      _export("touch", touch = (_dec = ccclass("touch"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class touch extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollNode", _descriptor, this);

          _initializerDefineProperty(this, "canvas", _descriptor2, this);

          _initializerDefineProperty(this, "watchType", _descriptor3, this);

          _initializerDefineProperty(this, "npcIcon", _descriptor4, this);

          _initializerDefineProperty(this, "npcHomeName", _descriptor5, this);

          _initializerDefineProperty(this, "camera", _descriptor6, this);

          _initializerDefineProperty(this, "front", _descriptor7, this);

          this.npcIndex = 0;
          this.preOffset = void 0;
          this.curOffset = void 0;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            const scroll = this.scrollNode.getComponent(ScrollView);
          });
          this.node.on(Node.EventType.TOUCH_END, event => {
            const startPos = event.touch.getStartLocation();
            const prePos = event.touch.getPreviousLocation();

            if (Math.abs(startPos.y - prePos.y) > Math.abs(startPos.x - prePos.x)) {
              if (startPos.y > prePos.y) {
                const scroll = this.scrollNode.getComponent(ScrollView);
                scroll.scrollToOffset(new Vec2(scroll.getScrollOffset().x, scroll.getScrollOffset().y - 930), 1, true);
              }

              if (startPos.y < prePos.y) {
                const scroll = this.scrollNode.getComponent(ScrollView);
                scroll.scrollToOffset(new Vec2(scroll.getScrollOffset().x, scroll.getScrollOffset().y + 930), 1, true);
              }
            } else {
              if (startPos.x > prePos.x) {
                if (this.canvas.scale.x === 2) {
                  this.canvas.active = false;
                  this.canvas.setScale(1, 1);
                  (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                    error: Error()
                  }), WebUtils) : WebUtils).getResouceImg("home/topInfoColum/view", this.watchType);
                  (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                    error: Error()
                  }), WebUtils) : WebUtils).getResouceImg(npcICON[this.npcIndex], this.npcIcon);
                  this.npcHomeName.string = NpcHomeName[this.npcIndex];
                  this.camera.setPosition(0, 0); // this.front.setScale(1, 1)

                  this.front.setPosition(0, 0);
                  this.canvas.active = true;
                }
              }

              if (startPos.x < prePos.x) {
                if (this.canvas.scale.x === 1) {
                  this.canvas.active = false;
                  this.canvas.setScale(2, 2);
                  (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                    error: Error()
                  }), WebUtils) : WebUtils).getResouceImg("home/topInfoColum/eye", this.watchType);
                  (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                    error: Error()
                  }), WebUtils) : WebUtils).getResouceImg(npcICON[this.npcIndex], this.npcIcon);
                  this.npcHomeName.string = NpcViewName[this.npcIndex];
                  this.canvas.active = true; // const gameView = view.getVisibleSize();
                  // this.camera.setPosition(GlobalConfig.instance.curViewNpcX - gameView.width / 2, this.scrollNode.getPosition().y - (hight - GlobalConfig.instance.curViewNpcY))
                }
              }
            }
          });
        }

        scrollEvent(event, data) {
          if (data === 12) {
            const scroll = this.scrollNode.getComponent(ScrollView);
            this.preOffset = scroll.getScrollOffset().y;
          }

          if (data === 9) {
            const scroll = this.scrollNode.getComponent(ScrollView);
            this.curOffset = scroll.getScrollOffset().y;

            if (Math.abs(this.preOffset - this.curOffset) > 500) {
              if (this.preOffset < this.curOffset) {
                (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex + 1;
                this.npcIndex = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex;
              } else {
                (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex - 1;
                this.npcIndex = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.currentNpcIndex;
              }

              if (this.canvas.scale.x === 1) {
                this.npcHomeName.string = NpcHomeName[this.npcIndex];
              } else {
                this.npcHomeName.string = NpcViewName[this.npcIndex]; // const gameView = view.getVisibleSize();
                // this.camera.setPosition(GlobalConfig.instance.curViewNpcX - gameView.width / 2, this.scrollNode.getPosition().y - (hight - GlobalConfig.instance.curViewNpcY))
              }
            }

            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(npcICON[this.npcIndex], this.npcIcon);
          }
        }

        scrollUp() {}

        scrollDown() {}

        scrollLeft() {}

        scrollRight() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "watchType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "npcIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "npcHomeName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "front", [_dec8], {
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
//# sourceMappingURL=9537f87e74b3aa93c4e046703c7af96b1c37397a.js.map