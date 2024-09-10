System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Animation, uiMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ListItemComponent2;

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
      Node = _cc.Node;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      uiMgr = _unresolved_2.uiMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bf0dRvnW9HzbG0REhfPnKd", "ListItemComponent2", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'EventTouch', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListItemComponent2", ListItemComponent2 = (_dec = ccclass('ListItemComponent2'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class ListItemComponent2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Label_title", _descriptor, this);

          _initializerDefineProperty(this, "Label_num", _descriptor2, this);

          _initializerDefineProperty(this, "contentNode", _descriptor3, this);

          _initializerDefineProperty(this, "btnsNode", _descriptor4, this);

          _initializerDefineProperty(this, "Sprite_touxiang", _descriptor5, this);

          this.touchStartX = 0;

          /**
           * 是否已打开
           */
          this._hasPlaying = false;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          this.node.on("setdata", this.setData, this);
        }

        touchStart(event) {
          this.touchStartX = event.touch.getLocationX();
        }

        touchMove(event) {
          const currTouchX = event.touch.getLocationX();

          if (!this._hasPlaying && this.touchStartX - currTouchX > 30) {
            this.contentNode.getComponent(Animation).play("gedanitem");
            this._hasPlaying = true;
          }

          if (this.touchStartX - currTouchX < -30 && this._hasPlaying) {
            this.contentNode.getComponent(Animation).play("gedanitem2");
            this._hasPlaying = false;
          }
        }

        touchEnd(event) {}
        /**
         * 更新数据
         */


        setData() {
          let v = this.contentNode.getPosition();
          v.x = -344;
          this.contentNode.setPosition(v);
          this._hasPlaying = false;
        }
        /**
         * 
         * @param evt 
         */


        openGedanXiangqing(evt) {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_gequlist");
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_num", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_touxiang", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f7b825658e7d956bd7459734f544b9d7aff8430.js.map