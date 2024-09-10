System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Component, _decorator, Button, Color, Enum, instantiate, js, Label, Layout, log, size, Sprite, EventHandler, UITransform, EDITOR, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, PARAM_TYPE, TabButtonGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Enum = _cc.Enum;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Label = _cc.Label;
      Layout = _cc.Layout;
      log = _cc.log;
      size = _cc.size;
      Sprite = _cc.Sprite;
      EventHandler = _cc.EventHandler;
      UITransform = _cc.UITransform;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13a10ARJ8VESZNQ2Ycoe5ju", "TabButtonGroup%20copy", undefined);

      __checkObsolete__(['Node', 'Component', '_decorator', 'Button', 'Color', 'Enum', 'instantiate', 'js', 'Label', 'Layout', 'log', 'size', 'Sprite', 'EventHandler', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      PARAM_TYPE = /*#__PURE__*/function (PARAM_TYPE) {
        PARAM_TYPE[PARAM_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
        PARAM_TYPE[PARAM_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
        return PARAM_TYPE;
      }(PARAM_TYPE || {}); ///不可用


      _export("default", TabButtonGroup = (_dec = ccclass("TabButtonGroup"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: [Node]
      }), _dec4 = property({
        tooltip: 'tab节点',
        type: [Node]
      }), _dec5 = property({}), _dec6 = property({
        tooltip: 'tab激活时的label的颜色'
      }), _dec7 = property({}), _dec8 = property({
        tooltip: 'tab未激活时的label的颜色'
      }), _dec9 = property({
        type: Enum(PARAM_TYPE),
        tooltip: '节点按钮事件的自定义数据, node_index为节点的的index, node_name为节点名字'
      }), _dec10 = property([EventHandler]), _dec(_class = (_class2 = class TabButtonGroup extends Component {
        constructor() {
          super(...arguments);
          this._isAddBtn = false;

          _initializerDefineProperty(this, "defaultTab", _descriptor, this);

          _initializerDefineProperty(this, "_tabsNode", _descriptor2, this);

          _initializerDefineProperty(this, "_onLabColor", _descriptor3, this);

          _initializerDefineProperty(this, "_offLabColor", _descriptor4, this);

          _initializerDefineProperty(this, "customData", _descriptor5, this);

          _initializerDefineProperty(this, "touchEvents", _descriptor6, this);
        }

        set TabsNode(tabArr) {
          // log("gen init")
          if (tabArr.length < 1) {
            this.TabsNode = new Array(1);
            return;
          }

          this._tabsNode = tabArr;

          this._genTabs(tabArr);

          this._updateLayout();
        }

        get TabsNode() {
          return this._tabsNode;
        }

        set OnLabColor(color) {
          this._onLabColor = color;

          if (this.defaultTab) {
            var lb = this.defaultTab.getChildByName("on").getChildByName("label");
            if (lb) lb.getComponent(Label).color = this._onLabColor;
          }
        }

        get OnLabColor() {
          return this._onLabColor;
        }

        set OffLabColor(color) {
          this._offLabColor = color;

          if (this.defaultTab) {
            var lb = this.defaultTab.getChildByName("on").getChildByName("label");
            lb.getComponent(Label).color = this._offLabColor;
          }
        }

        get OffLabColor() {
          return this._offLabColor;
        }

        // LIFE-CYCLE CALLBACKS:

        /**
         * 生成初始化tab
         * @param tabArr tab数量
         */
        _genTabs(tabArr) {
          if (EDITOR) {
            //删除已有
            var children = this.node.children.concat();

            for (var i = 0; i < children.length; i++) {
              if (i == 0) {
                continue;
              }

              if (children[i] != null) {
                children[i].removeFromParent();
                children[i].destroy();
              }
            } //generate 


            for (var _i = 0; _i < tabArr.length; _i++) {
              if (_i == 0 && this.node.children.length == 1) {
                this.TabsNode[_i] = this.node.children[_i];
                continue;
              }

              var tab = null;

              if (this.defaultTab && this.node.children.length > 0) {
                tab = instantiate(this.defaultTab);
              } else {
                tab = this._genNewTab(_i);
                this.defaultTab = tab;
              }

              tab.parent = this.node;
              this.TabsNode[_i] = tab;
            }
          }
        }
        /**
         * 生成一个新的tab模版
         * @param i 下标
         */


        _genNewTab(i) {
          var tab = new Node("tab");

          var onNode = this._genButtonNode("on", this.OnLabColor);

          var offNode = this._genButtonNode("off", this.OffLabColor);

          onNode.active = false;
          var uiTrans = tab.getComponent(UITransform);
          uiTrans.anchorX = 0.5;
          uiTrans.setContentSize(size(100, 100));
          tab.addChild(offNode);
          tab.addChild(onNode);
          return tab;
        }

        _genButtonNode(name, color) {
          var root = new Node(name);
          root.addComponent(Sprite);

          var label = this._genLabel(color);

          root.addChild(label);
          return root;
        }

        _genLabel(color) {
          var label = new Node("label");
          label.addComponent(Label);
          var lb = label.getComponent(Label);
          lb.string = "TAB Name";
          lb.color = color;
          return label;
        }
        /**
         * 根据tab 调整layout大小
         */


        _updateLayout() {
          if (!this.defaultTab) {
            return;
          }

          var w,
              h = null;
          var layout = this.node.getComponent(Layout);

          if (layout.type == Layout.Type.VERTICAL) {
            h = (this.defaultTab.getComponent(UITransform).height + layout.spacingY) * this.TabsNode.length;
            w = this.defaultTab.getComponent(UITransform).width;
          } else if (layout.type == Layout.Type.HORIZONTAL) {
            w = (this.defaultTab.getComponent(UITransform).width + layout.spacingX) * this.TabsNode.length;
            h = this.defaultTab.getComponent(UITransform).height;
          }

          this.node.getComponent(UITransform).width = w;
          this.node.getComponent(UITransform).height = h;
        }
        /**
         * 添加button组件
         */


        _addTabButtonComp() {
          if (this._isAddBtn) {
            return;
          }

          this._isAddBtn = true;
          this.node.children.forEach((node, nodeIndex) => {
            var btnComp = node.getComponent(Button);

            if (btnComp == null) {
              node.addComponent(Button);
              btnComp = node.getComponent(Button);
            } // 判断button，将ccButton替换为自定义的UICustomButton


            var btnCompName = js.getClassName(btnComp);

            if (btnCompName === 'Button') {
              var newBtnComp = node.addComponent("Button");
              newBtnComp.transition = btnComp.transition;
              newBtnComp.zoomScale = btnComp.zoomScale;
              newBtnComp.disabledSprite = btnComp.disabledSprite;
              newBtnComp.hoverSprite = btnComp.hoverSprite;
              newBtnComp.normalSprite = btnComp.normalSprite;
              newBtnComp.pressedSprite = btnComp.pressedSprite;
              newBtnComp.hoverColor = btnComp.hoverColor;
              newBtnComp.normalColor = btnComp.normalColor;
              newBtnComp.pressedColor = btnComp.pressedColor;
              newBtnComp.disabledColor = btnComp.disabledColor;
              newBtnComp.target = btnComp.target;
              btnComp = newBtnComp;
              node.removeComponent(Button); // 移除老button
            } //绑定回调事件


            this.touchEvents.forEach(event => {
              //克隆数据，每个节点获取的都是不同的回调
              var hd = new EventHandler(); //copy对象

              hd.component = event['_componentName'];
              hd.handler = event.handler;
              hd.target = event.target;

              if (this.customData === PARAM_TYPE.NODE_INDEX) {
                hd.customEventData = nodeIndex.toString();
              } else {
                hd.customEventData = node.name;
              }

              btnComp.clickEvents.push(hd);
            });
          });
        }

        onLoad() {
          if (EDITOR) {
            console.log("11111111"); //添加layout

            if (!this.node.getComponent(Layout)) {
              this.node.getComponent(UITransform).anchorY = 1;
              log("TabButtonGroup add Layout");
              this.node.addComponent(Layout);
              this.node.getComponent(Layout).type = Layout.Type.VERTICAL;
              this.node.getComponent(UITransform).anchorY = 1;

              this._updateLayout();
            }

            if (!this.defaultTab || this.TabsNode.length < 1) {
              this.TabsNode = this.TabsNode;
            }

            return;
          } // this._addTabButtonComp();

        }
        /**
         * tab状态切换
         * @param index tab下标
         */


        changeTab(index) {
          if (!this._isAddBtn) {
            this._addTabButtonComp();
          }

          for (var i = 0; i < this.TabsNode.length; i++) {
            this.TabsNode[i].getComponent(Button).interactable = true;
            this.TabsNode[i].getChildByName("on").active = false;
            this.TabsNode[i].getChildByName("off").active = true;
          }

          this.TabsNode[index].getComponent(Button).interactable = false;
          this.TabsNode[index].getChildByName("on").active = true;
          this.TabsNode[index].getChildByName("off").active = false;
          console.log("change tab..");
        }
        /**
         * 设置默认激活tab
         */


        initTab(index) {
          if (index === void 0) {
            index = 1;
          }

          this.changeTab(index - 1);
        }
        /**
         * 设置tab label string
         * @param list 
         */


        setTabLabel(list) {
          for (var index = 0; index < list.length; index++) {
            if (this.TabsNode[index]) {
              this.TabsNode[index].active = true;
              this.TabsNode[index].getChildByName("on").getChildByName("label").getComponent(Label).string = list[index].title;
              this.TabsNode[index].getChildByName("off").getChildByName("label").getComponent(Label).string = list[index].title;
            } else {
              var newtab = instantiate(this.TabsNode[0]);
              newtab.getChildByName("on").getChildByName("label").getComponent(Label).string = list[index].title;
              newtab.getChildByName("off").getChildByName("label").getComponent(Label).string = list[index].title;
              var btnComp = newtab.getComponent(Button);
              btnComp.clickEvents[0].customEventData = index.toString();
              this.node.addChild(newtab);
              this.TabsNode.push(newtab);
            }
          }
        }

        hideAll() {
          for (var i = 0; i < this.TabsNode.length; i++) {
            this.TabsNode[i].active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultTab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_tabsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array(1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "TabsNode", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "TabsNode"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_onLabColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "OnLabColor", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "OnLabColor"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_offLabColor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(235, 181, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "OffLabColor", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "OffLabColor"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "customData", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PARAM_TYPE.NODE_INDEX;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "touchEvents", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cdd713c35c7d6f3e569c430ff96ff2cafaac541.js.map