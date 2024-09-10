System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, WebUtils, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TabViewComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../utils/WebUtils", _context.meta, extras);
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
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7094fatBz1Ei45kKPc6VtQW", "TabViewComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabViewComponent", TabViewComponent = (_dec = ccclass('TabViewComponent'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property({
        type: [Node]
      }), _dec5 = property(Node), _dec(_class = (_class2 = class TabViewComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite_jiantou", _descriptor, this);

          _initializerDefineProperty(this, "label_current", _descriptor2, this);

          this.grpArr = [];

          _initializerDefineProperty(this, "toggleArrs", _descriptor3, this);

          _initializerDefineProperty(this, "togglecontainer", _descriptor4, this);

          this._isShow = void 0;
        }

        start() {
          this.grpArr = [{
            name: "稀有度",
            index: 0
          }, {
            name: "颜色",
            index: 1
          }, {
            name: "系列",
            index: 2
          }];
          this.setListData(0);
        }

        onEnable() {
          for (var i = 0; i < this.toggleArrs.length; i++) {
            this.toggleArrs[i].on("toggle", this.itemTouchendHandler, this);
          }

          this.showList(false);
        }

        onDisable() {
          for (var i = 0; i < this.toggleArrs.length; i++) {
            this.toggleArrs[i].off("toggle", this.itemTouchendHandler, this);
          }
        }
        /**
         * 
         * @param isshow 
         */


        showList(isshow) {
          this._isShow = isshow;
          this.togglecontainer.active = this._isShow;

          if (this._isShow) {
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("newjishi/tabview_6", this.sprite_jiantou);
          } else {
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("newjishi/tabview_2", this.sprite_jiantou);
          }
        }
        /**
         * top 点击
         * @param evt 
         */


        topClickHandler(evt) {
          this.showList(!this._isShow);
        }
        /**
         * 
         * @param evt 
         */


        itemTouchendHandler(evt) {
          var tar = evt.target;

          for (var i = 0; i < this.toggleArrs.length; i++) {
            if (tar == this.toggleArrs[i]) {
              this.setListData(i);
            }
          }
        }
        /**
         * 根据index 修改数据
         * @param selectInd 
         */


        setListData(selectInd) {
          this.label_current.string = this.grpArr[selectInd].name;
          this.showList(false);
        }

        update(deltaTime) {}

        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_jiantou", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label_current", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleArrs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "togglecontainer", [_dec5], {
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
//# sourceMappingURL=eb2d7741791821a132c40ca633be2fa214e2a242.js.map