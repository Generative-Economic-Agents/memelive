System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, Vec3, instantiate, ListItemComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, _temp_vec3, ListViewCtrl4;

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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ListItemComponent = _unresolved_2.ListItemComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "199b5f2NHhG0qfcuQy2qwCT", "listViewCtrl4", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'Label', 'Button', 'Vec3', 'UITransform', 'instantiate', 'error', 'Vec2', 'System', 'Color', 'Layout']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      _temp_vec3 = new Vec3();
      /**
       * scrollview 操作版
       * 遮罩显示list cell
       * cell length 不限制 
       * 适用cell 高度自适应显示
       */

      _export("ListViewCtrl4", ListViewCtrl4 = (_dec = ccclass("ListViewCtrl4"), _dec2 = menu('UI/ListViewCtrl4'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(ScrollView), _dec(_class = _dec2(_class = (_class2 = class ListViewCtrl4 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "cellnode", _descriptor2, this);

          _initializerDefineProperty(this, "content", _descriptor3, this);

          _initializerDefineProperty(this, "scrollView", _descriptor4, this);

          this._items = [];
          this._itemTemplateUITrans = void 0;
          //=================外部调用设置=======================
          this._itemdata = null;
          //=================外部调用设置end=======================
          this._conNodeArr = [];
        }

        onLoad() {}

        /**
         * 设置spwan,itemdata;
         * 
         */
        initData(itemdata) {
          this.reset();
          this._itemdata = itemdata;
          this.initialize();
          this.scheduleOnce(() => {
            for (var i = 0; i < this._itemdata.length; i++) {
              this._items[i].getComponent(_crd && ListItemComponent === void 0 ? (_reportPossibleCrUseOfListItemComponent({
                error: Error()
              }), ListItemComponent) : ListItemComponent).setData(this._itemdata[i]);
            }

            this.scheduleOnce(() => {
              this.scrollView.scrollToBottom(1);
            }, 0.1);
          }, 0.1); // this.scrollView.node.on('scroll-ended', this.onScrollEnded, this);//暂不处理
        }

        reset() {
          this._itemdata = [];
          this.content.removeAllChildren();
          this._items = [];
        }

        // 初始化 item
        initialize() {
          // for (let index = 0; index < 101; index++) {
          //     let node = new Node();
          //     let layout = node.addComponent(Layout);
          //     layout.type = 2;
          //     layout.resizeMode =1; 
          //     node.setPosition(0, 0, 0);
          //     this.content.addChild(node);
          // }
          for (var i = 0; i < this._itemdata.length; i++) {
            // spawn items, we only need to do this once
            var item = instantiate(this.itemTemplate);
            item.setPosition(0, 0, 0);
            this.content.addChild(item); // let itemUITrans = item.getComponent(UITransform);

            var indexlabelComp = item.getComponent(_crd && ListItemComponent === void 0 ? (_reportPossibleCrUseOfListItemComponent({
              error: Error()
            }), ListItemComponent) : ListItemComponent).index_label;
            indexlabelComp.string = i + 1 + "";

            this._items.push(item);
          }

          if (this._itemdata.length >= 100) {
            var _item = instantiate(this.cellnode);

            _item.getChildByName("Label").active = true;

            _item.setPosition(0, 0, 0);

            this.content.addChild(_item);
          }
        }

        update(dt) {
          if (!this._itemTemplateUITrans) {
            return; //未初始化；
          }
        }

        addItem() {
          // 创建新元素
          var newItem = instantiate(this.itemTemplate); // 将新元素添加到内容节点

          this.content.addChild(newItem); // 更新 ScrollView 的 content 大小
          //  this.content.getComponent(UITransform).height += newItem.getComponent(UITransform).height;
        }

        removeItem() {}

        onScrolling() {// let scrollOffset = this.scrollView.getScrollOffset(); // 获取滚动偏移量
          // let maxScrollOffset = this.scrollView.getMaxScrollOffset(); // 获取最大滚动偏移量
          // console.log(scrollOffset,maxScrollOffset);
          // if (maxScrollOffset.y - scrollOffset.y > 300 ) {//还差300滚动到顶部的时候，开始获取数据
          //     // this.addItem();
          // }
        }

        onScrollEnded(event) {
          // 滚动结束事件被触发，可以在这里处理回弹结束的逻辑
          console.log('Scrolling has ended'); // 你可以在这里添加更多的判断逻辑来确定是否是回弹事件

          var scrollOffset = this.scrollView.getScrollOffset(); // 获取滚动偏移量

          var maxScrollOffset = this.scrollView.getMaxScrollOffset(); // 获取最大滚动偏移量

          if (maxScrollOffset.y - scrollOffset.y > 300) {
            //还差300滚动到顶部的时候，开始获取数据
            this.node.emit("scrollended");
          }
        }

        getItemAtBottom() {
          var item = this._items[0];

          for (var i = 1; i < this._items.length; ++i) {
            if (item.position.y > this._items[i].position.y) {
              item = this._items[i];
            }
          }

          return item;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellnode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26a52f6855806eb1acf85a2adb7f9cd70b34f0e7.js.map