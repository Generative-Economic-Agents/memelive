System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, Vec2, GlobalConfig, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, touch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../game/config/GlobalConfig", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GlobalConfig = _unresolved_2.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bb17DPH0tO8KMeF6jKqHT7", "touch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'ScrollView', 'SystemEvent', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("touch", touch = (_dec = ccclass('touch'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class touch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollNode", _descriptor, this);

          _initializerDefineProperty(this, "canvas", _descriptor2, this);

          this.npcIndex = 0;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            var scroll = this.scrollNode.getComponent(ScrollView);
          });
          this.node.on(Node.EventType.TOUCH_END, event => {
            var startPos = event.touch.getStartLocation();
            var prePos = event.touch.getPreviousLocation();

            if (Math.abs(startPos.y - prePos.y) > Math.abs(startPos.x - prePos.x)) {
              if (startPos.y > prePos.y) {
                var scroll = this.scrollNode.getComponent(ScrollView);
                scroll.scrollToOffset(new Vec2(scroll.getScrollOffset().x, scroll.getScrollOffset().y - 930), 1, true);
              }

              if (startPos.y < prePos.y) {
                var _scroll = this.scrollNode.getComponent(ScrollView);

                _scroll.scrollToOffset(new Vec2(_scroll.getScrollOffset().x, _scroll.getScrollOffset().y + 930), 1, true);
              }
            } else {
              if (startPos.x > prePos.x) {
                console.log('====left');

                if (this.canvas.scale.x === 2) {
                  this.canvas.setScale(1, 1);
                }
              }

              if (startPos.x < prePos.x) {
                console.log('====right');

                if (this.canvas.scale.x === 1) {
                  this.canvas.setScale(2, 2);
                }
              }
            }
          });
        }

        scrollEvent(event, data) {
          var preOffset;
          var curOffset;

          if (data === 12) {
            var scroll = this.scrollNode.getComponent(ScrollView);
            preOffset = scroll.getScrollOffset().y;
            console.log('====', scroll.getScrollOffset().y);
          }

          if (data === 9) {
            var _scroll2 = this.scrollNode.getComponent(ScrollView);

            curOffset = _scroll2.getScrollOffset().y;
            console.log('====', _scroll2.getScrollOffset().y);
          }

          if (preOffset < curOffset) {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9537f87e74b3aa93c4e046703c7af96b1c37397a.js.map