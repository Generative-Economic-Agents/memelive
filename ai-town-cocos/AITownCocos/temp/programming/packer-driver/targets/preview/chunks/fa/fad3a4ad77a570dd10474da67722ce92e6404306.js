System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, observer, EventType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TabGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../EventType", _context.meta, extras);
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
      Button = _cc.Button;
    }, function (_unresolved_2) {
      observer = _unresolved_2.observer;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0036Wjh5dCWIqwcJCWSpCr", "TabGroup", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabGroup", TabGroup = (_dec = ccclass('TabGroup'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: [Node]
      }), _dec4 = property(String), _dec(_class = (_class2 = class TabGroup extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tabbtns", _descriptor, this);

          _initializerDefineProperty(this, "tabcontents", _descriptor2, this);

          _initializerDefineProperty(this, "tabtype", _descriptor3, this);
        }

        start() {
          //记录打开当前页index,即使被销毁后
          //this.on_tab_button_click(null, modelMgr.mainModel.currentTapIndex[this.tabtype]);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this); // for (let index = 0; index <  this.tabbtns.length; index++) {
          //     const element =  this.tabbtns[index];
          //     if(!element.hasEventListener(Button.EventType.CLICK,this.on_tab_button_click,this)){
          //         element.on(Button.EventType.CLICK,this.on_tab_button_click,this);
          //     }
          // }
        }

        _onTouchEnd(touchEvent) {}

        update(deltaTime) {}

        disable_tab(index) {
          if (this.tabbtns[index]) {
            this.tabbtns[index].getComponent(Button).interactable = true;
            this.tabbtns[index].getChildByName("on").active = false;
            this.tabbtns[index].getChildByName("off").active = true;
            this.tabcontents[index].active = false;
          }
        }

        enable_tab(index) {
          if (this.tabbtns[index]) {
            this.tabbtns[index].getComponent(Button).interactable = false; //禁用,已处于点击状态

            this.tabbtns[index].getChildByName("on").active = true;
            this.tabbtns[index].getChildByName("off").active = false;
            this.tabcontents[index].active = true; //modelMgr.mainModel.currentTapIndex[this.tabtype] = index;

            this.node.emit("update_tab_content", this.tabcontents[index]);
          }
        }

        on_tab_button_click(e, index) {
          //AudioManager.instance.playSound("new_NormanBtn");
          index = parseInt(index);

          for (var i = 0; i < this.tabbtns.length; i++) {
            if (i == index) {// this.enable_tab(i);
            } else {
              this.disable_tab(i);
            }
          } //支持操作同一个content


          if (this.tabbtns[index]) {
            this.enable_tab(index);
            this.node.emit("tabgroupeclick", index);
          }
        }

        refresh_tab_content(e, index) {
          index = parseInt(index);

          for (var i = 0; i < this.tabbtns.length; i++) {
            if (i == index) {// this.enable_tab(i);
            } else {
              if (this.tabbtns[i]) {
                this.tabbtns[i].getComponent(Button).interactable = true;
                this.tabbtns[i].getChildByName("on").active = false;
                this.tabbtns[i].getChildByName("off").active = true;
              }
            }
          } //支持操作同一个content


          if (this.tabbtns[index]) {
            //this.enable_tab(index);
            if (this.tabbtns[index]) {
              this.tabbtns[index].getComponent(Button).interactable = false; //禁用,已处于点击状态

              this.tabbtns[index].getChildByName("on").active = true;
              this.tabbtns[index].getChildByName("off").active = false; //this.tabcontents[index].active = true;
              //modelMgr.mainModel.currentTapIndex[this.tabtype] = index;
            }
          }

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_ROLE_PLAY_INDEX, index + 1);
        }
        /**
         * 外部改变tabgroup
         * @param ind 
         */


        chgTab(ind) {
          this.on_tab_button_click(null, ind);
        }
        /**
         * 显示/隐藏某个tab
         * @param tabIndex 
         * @param needShow 
         */


        setShowTab(tabIndex, needShow) {
          if (this.tabbtns[tabIndex]) {
            this.tabbtns[tabIndex].active = needShow;

            if (this.tabcontents[tabIndex].active) {
              if (tabIndex == 0) {
                this.on_tab_button_click(null, tabIndex + 1);
              } else {
                this.on_tab_button_click(null, 0);
              }
            }
          }
        }
        /**
         * 隐藏所有tabs
         */


        resetAllTabs() {
          for (var i = 0; i < this.tabbtns.length; i++) {
            this.disable_tab(i);
          } ///modelMgr.mainModel.currentTapIndex[this.tabtype] = -1;

        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabbtns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabcontents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tabtype", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      /**
       * 
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fad3a4ad77a570dd10474da67722ce92e6404306.js.map