System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, Vec3, UITransform, instantiate, error, Vec2, ListItemComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, menu, _temp_vec3, ListViewCtrl2H;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListItemComponent(extras) {
    _reporterNs.report("ListItemComponent", "./ListItemComponent", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      error = _cc.error;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ListItemComponent = _unresolved_2.ListItemComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "797e8qTN+BMF6q75j42IIgz", "listViewCtrl2H", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'Label', 'Button', 'Vec3', 'UITransform', 'instantiate', 'error', 'Vec2']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      _temp_vec3 = new Vec3();
      /**
       * 调整版本
       */

      _export("ListViewCtrl2H", ListViewCtrl2H = (_dec = ccclass("ListViewCtrl2H"), _dec2 = property(Node), _dec3 = property(ScrollView), _dec(_class = (_class2 = class ListViewCtrl2H extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "scrollView", _descriptor2, this);

          _initializerDefineProperty(this, "spawnCount", _descriptor3, this);

          // 初始化 item 数量
          _initializerDefineProperty(this, "totalCount", _descriptor4, this);

          // 滚动列表里总的 item 数量
          _initializerDefineProperty(this, "spacing", _descriptor5, this);

          // item 水平排布间隔
          _initializerDefineProperty(this, "bufferZone", _descriptor6, this);

          // when item is away from bufferZone, we relocate it
          this._content = null;
          this._items = [];
          this._updateTimer = 0;
          this._updateInterval = 0.2;
          this._lastContentPosX = 0;
          this._itemTemplateUITrans = void 0;
          this._contentUITrans = void 0;
          this._itemdata = null;
        }

        onLoad() {
          this._content = this.scrollView.content;
          this.initialize();
          this._updateTimer = 0;
          this._updateInterval = 0.2;
          this._lastContentPosX = 0; // use this variable to detect if we are scrolling up or down
        }

        /**
         * 设置spwan,itemdata;
         * 
         */
        initData(spawnCount, itemdata) {
          this.reset();
          this.spawnCount = spawnCount;
          this.totalCount = itemdata ? itemdata.length : 0;
          this._itemdata = itemdata;
          this.initialize();
          this.scheduleOnce(() => {
            //等待初始化完成后，可获取组件
            for (var i = 0; i < this._items.length; i++) {
              this._items[i].getComponent(_crd && ListItemComponent === void 0 ? (_reportPossibleCrUseOfListItemComponent({
                error: Error()
              }), ListItemComponent) : ListItemComponent).setData(this._itemdata[i]);
            } // this._content.getComponent(UITransform).height = this._contentUITrans.height;

          }, 0.1);
        }

        reset() {
          this.spawnCount = 0;
          this.totalCount = 0;
          this._itemdata = [];

          this._content.removeAllChildren();

          this._items = [];
        } // 初始化 item


        initialize() {
          this._itemTemplateUITrans = this.itemTemplate.getComponent(UITransform);
          this._contentUITrans = this._content.getComponent(UITransform);
          this._contentUITrans.width = this.totalCount * (this._itemTemplateUITrans.width + this.spacing) + this.spacing; // get total content height

          for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = instantiate(this.itemTemplate);

            this._content.addChild(item);

            var itemUITrans = item.getComponent(UITransform);
            item.setPosition(itemUITrans.width * (0.5 + i) + this.spacing * i - 60, 0, 0); // const labelComp = item.getComponentInChildren(Label)!;
            // const labelComp = item.getComponent(ListItemComponent)!["item_label"];
            // labelComp.string = `item_${i}`;

            var indexlabelComp = item.getComponent(_crd && ListItemComponent === void 0 ? (_reportPossibleCrUseOfListItemComponent({
              error: Error()
            }), ListItemComponent) : ListItemComponent).index_label;
            indexlabelComp.string = i + "";

            this._items.push(item);
          }
        }

        getPositionInView(item) {
          // get item position in scrollview's node space
          var worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
          var viewPos = this.scrollView.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          return viewPos;
        }

        update(dt) {// this._updateTimer += dt;
          // if (this._updateTimer < this._updateInterval) return; // we don't need to do the math every frame
          // this._updateTimer = 0;
          // let items = this._items;
          // let buffer = this.bufferZone;
          // let isDown = this.scrollView.content!.position.x < this._lastContentPosX; // scrolling direction
          // let offset = (this._itemTemplateUITrans.width + this.spacing) * items.length;
          // for (let i = 0; i < items.length; ++i) {
          //     let viewPos = this.getPositionInView(items[i]);
          //     items[i].getPosition(_temp_vec3);
          //     if (isDown) {
          //         // if away from buffer zone and not reaching top of content
          //         if (viewPos.x < -buffer && _temp_vec3.x + offset < 0) {
          //             _temp_vec3.x += offset;
          //             items[i].setPosition(_temp_vec3);
          //             const indexlabelComp =  items[i].getComponent(ListItemComponent)!.index_label;
          //             indexlabelComp.string = Math.floor(_temp_vec3.x/this._contentUITrans.width * this.totalCount)+"";
          //             items[i].getComponent(ListItemComponent).setData();
          //         }
          //     } else {
          //         // if away from buffer zone and not reaching bottom of content
          //         if (viewPos.x > buffer && _temp_vec3.x - offset > -this._contentUITrans.width) {
          //             _temp_vec3.x -= offset;
          //             items[i].setPosition(_temp_vec3);
          //             const indexlabelComp =  items[i].getComponent(ListItemComponent)!.index_label;
          //             indexlabelComp.string = Math.floor(_temp_vec3.x/this._contentUITrans.width * this.totalCount)+"";
          //             items[i].getComponent(ListItemComponent).setData();
          //         }
          //     }
          // }
          // // update lastContentPosY
          // this._lastContentPosX = this.scrollView.content!.position.x;
          //console.log("Total Items: " + this.totalCount);
        }

        addItem() {
          this._contentUITrans.width = (this.totalCount + 1) * (this._itemTemplateUITrans.width + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount + 1;
        }

        removeItem() {
          if (this.totalCount - 1 < 30) {
            error("can't remove item less than 30!");
            return;
          }

          this._contentUITrans.width = (this.totalCount - 1) * (this._itemTemplateUITrans.width + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount - 1;
          this.moveBottomItemToTop();
        }

        moveBottomItemToTop() {
          var offset = (this._itemTemplateUITrans.width + this.spacing) * this._items.length;
          var length = this._items.length;
          var item = this.getItemAtBottom();
          item.getPosition(_temp_vec3); // whether need to move to top

          if (_temp_vec3.x + offset < 0) {
            _temp_vec3.x = _temp_vec3.x + offset;
            item.setPosition(_temp_vec3);
          }
        }

        getItemAtBottom() {
          var item = this._items[0];

          for (var i = 1; i < this._items.length; ++i) {
            if (item.position.x > this._items[i].position.y) {
              item = this._items[i];
            }
          }

          return item;
        }

        scrollToFixedPosition() {
          this.scrollView.scrollToOffset(new Vec2(0, 500), 2, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spawnCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bufferZone", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fa7b1904cd14df5ad1b335bb1dd377beb3d4d6a.js.map