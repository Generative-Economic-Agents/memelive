System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ShowGequListTiemComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfchatcell(extras) {
    _reporterNs.report("chatcell", "../../../game/config/DataStruct", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41eb7DNcQpO2IcJkDQhQ1rY", "ShowGequListTiemComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'assetManager', 'EventTouch', 'Label', 'color', 'Color', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowGequListTiemComponent", ShowGequListTiemComponent = (_dec = ccclass('ShowGequListTiemComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class ShowGequListTiemComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node1", _descriptor, this);

          _initializerDefineProperty(this, "node2", _descriptor2, this);

          this._data = void 0;
          this._curNode = void 0;
        }

        start() {
          this.node.on("setdata", this.setData, this); // this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        }
        /**
         * 播放歌曲
         * @param event 
         */


        touchStart(event) {}
        /**
         * 更新数据
         */


        setData(data) {
          this._data = data;

          if (this._data.from > 200000) {
            //玩家
            this.node1.active = false;
            this.node2.active = true;
            this._curNode = this.node2;
          } else {
            //猫咪
            this.node1.active = true;
            this.node2.active = false;
            this._curNode = this.node1;
          }

          var txt = this._curNode.getChildByName("Label_title");

          txt.getComponent(Label).string = this._data.content;
          this.scheduleOnce(() => {
            this.setNodeWidth();
          }, 0.1);
        }

        setNodeWidth() {
          var txt = this._curNode.getChildByName("Label_title");

          var bg = this._curNode.getChildByName("Sprite");

          var height = txt.getComponent(UITransform).height;

          if (height < 55) {
            height = 70;
          }

          bg.getComponent(UITransform).height = height + 30;
          this._curNode.getComponent(UITransform).height = height + 30;
          this.node.getComponent(UITransform).height = height + 30;
        }

        freshStateHandler() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node2", [_dec3], {
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
//# sourceMappingURL=10825fbf4c3c4013ddbdb818dfecc5f33964b550.js.map