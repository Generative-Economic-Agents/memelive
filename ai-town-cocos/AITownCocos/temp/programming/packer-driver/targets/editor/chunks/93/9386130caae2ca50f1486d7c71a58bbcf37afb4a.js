System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, Label, Button, Vec3, UITransform, instantiate, error, Vec2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, menu, _temp_vec3, ListViewCtrl;

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
      ScrollView = _cc.ScrollView;
      Label = _cc.Label;
      Button = _cc.Button;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      error = _cc.error;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4cd67QgY99J/q8+hpaUQjt0", "listViewCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'Label', 'Button', 'Vec3', 'UITransform', 'instantiate', 'error', 'Vec2']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      _temp_vec3 = new Vec3();

      _export("ListViewCtrl", ListViewCtrl = (_dec = ccclass("ListViewCtrl"), _dec2 = menu('UI/ListViewCtrl'), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = _dec2(_class = (_class2 = class ListViewCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "scrollView", _descriptor2, this);

          _initializerDefineProperty(this, "spawnCount", _descriptor3, this);

          // 初始化 item 数量
          _initializerDefineProperty(this, "totalCount", _descriptor4, this);

          // 滚动列表里总的 item 数量
          _initializerDefineProperty(this, "spacing", _descriptor5, this);

          // item 垂直排布间隔
          _initializerDefineProperty(this, "bufferZone", _descriptor6, this);

          // when item is away from bufferZone, we relocate it
          _initializerDefineProperty(this, "btnAddItem", _descriptor7, this);

          _initializerDefineProperty(this, "btnRemoveItem", _descriptor8, this);

          _initializerDefineProperty(this, "btnJumpToPosition", _descriptor9, this);

          _initializerDefineProperty(this, "lblJumpPosition", _descriptor10, this);

          _initializerDefineProperty(this, "lblTotalItems", _descriptor11, this);

          this._content = null;
          this._items = [];
          this._updateTimer = 0;
          this._updateInterval = 0.2;
          this._lastContentPosY = 0;
          this._itemTemplateUITrans = void 0;
          this._contentUITrans = void 0;
        }

        onLoad() {
          this._content = this.scrollView.content;
          this.initialize();
          this._updateTimer = 0;
          this._updateInterval = 0.2;
          this._lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        } // 初始化 item


        initialize() {
          this._itemTemplateUITrans = this.itemTemplate._uiProps.uiTransformComp;
          this._contentUITrans = this._content._uiProps.uiTransformComp;
          this._contentUITrans.height = this.totalCount * (this._itemTemplateUITrans.height + this.spacing) + this.spacing; // get total content height

          for (let i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            let item = instantiate(this.itemTemplate);

            this._content.addChild(item);

            let itemUITrans = item._uiProps.uiTransformComp;
            item.setPosition(0, -itemUITrans.height * (0.5 + i) - this.spacing * (i + 1), 0);
            const labelComp = item.getComponentInChildren(Label);
            labelComp.string = `item_${i}`;

            this._items.push(item);
          }
        }

        getPositionInView(item) {
          // get item position in scrollview's node space
          let worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
          let viewPos = this.scrollView.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          return viewPos;
        }

        update(dt) {
          this._updateTimer += dt;
          if (this._updateTimer < this._updateInterval) return; // we don't need to do the math every frame

          this._updateTimer = 0;
          let items = this._items;
          let buffer = this.bufferZone;
          let isDown = this.scrollView.content.position.y < this._lastContentPosY; // scrolling direction

          let offset = (this._itemTemplateUITrans.height + this.spacing) * items.length;

          for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            items[i].getPosition(_temp_vec3);

            if (isDown) {
              // if away from buffer zone and not reaching top of content
              if (viewPos.y < -buffer && _temp_vec3.y + offset < 0) {
                _temp_vec3.y += offset;
                items[i].setPosition(_temp_vec3);
              }
            } else {
              // if away from buffer zone and not reaching bottom of content
              if (viewPos.y > buffer && _temp_vec3.y - offset > -this._contentUITrans.height) {
                _temp_vec3.y -= offset;
                items[i].setPosition(_temp_vec3);
              }
            }
          } // update lastContentPosY


          this._lastContentPosY = this.scrollView.content.position.y;
          this.lblTotalItems.string = "Total Items: " + this.totalCount;
        }

        addItem() {
          this._contentUITrans.height = (this.totalCount + 1) * (this._itemTemplateUITrans.height + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount + 1;
        }

        removeItem() {
          if (this.totalCount - 1 < 30) {
            error("can't remove item less than 30!");
            return;
          }

          this._contentUITrans.height = (this.totalCount - 1) * (this._itemTemplateUITrans.height + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount - 1;
          this.moveBottomItemToTop();
        }

        moveBottomItemToTop() {
          let offset = (this._itemTemplateUITrans.height + this.spacing) * this._items.length;
          let length = this._items.length;
          let item = this.getItemAtBottom();
          item.getPosition(_temp_vec3); // whether need to move to top

          if (_temp_vec3.y + offset < 0) {
            _temp_vec3.y = _temp_vec3.y + offset;
            item.setPosition(_temp_vec3);
          }
        }

        getItemAtBottom() {
          let item = this._items[0];

          for (let i = 1; i < this._items.length; ++i) {
            if (item.position.y > this._items[i].position.y) {
              item = this._items[i];
            }
          }

          return item;
        }

        scrollToFixedPosition() {
          this.scrollView.scrollToOffset(new Vec2(0, 500), 2, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spawnCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bufferZone", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnAddItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnRemoveItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnJumpToPosition", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lblJumpPosition", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalItems", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9386130caae2ca50f1486d7c71a58bbcf37afb4a.js.map