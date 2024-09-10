System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, showMsg2, modelMgr, uiMgr, LoadingController, SpinBoxComponent, DataEvents, ComponentsUtils, WebUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _crd, ccclass, property, JishiGoumaiTK;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpinBoxComponent(extras) {
    _reporterNs.report("SpinBoxComponent", "../../../game/components/SpinBoxComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataEvents(extras) {
    _reporterNs.report("DataEvents", "../../../model/DataEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentsUtils(extras) {
    _reporterNs.report("ComponentsUtils", "../../../utils/ComponentsUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
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
      showMsg2 = _unresolved_2.showMsg2;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      uiMgr = _unresolved_3.uiMgr;
    }, function (_unresolved_4) {
      LoadingController = _unresolved_4.LoadingController;
    }, function (_unresolved_5) {
      SpinBoxComponent = _unresolved_5.SpinBoxComponent;
    }, function (_unresolved_6) {
      DataEvents = _unresolved_6.DataEvents;
    }, function (_unresolved_7) {
      ComponentsUtils = _unresolved_7.default;
    }, function (_unresolved_8) {
      WebUtils = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9726bRr7yJB67YmHNEJGPWE", "JishiGoumaiTK", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 购买/出售道具弹框
       */

      _export("JishiGoumaiTK", JishiGoumaiTK = (_dec = ccclass('JishiGoumaiTK'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = (_class3 = class JishiGoumaiTK extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sinbox", _descriptor, this);

          _initializerDefineProperty(this, "zongjia", _descriptor2, this);

          _initializerDefineProperty(this, "btnGoumai", _descriptor3, this);

          _initializerDefineProperty(this, "btnchushou", _descriptor4, this);

          _initializerDefineProperty(this, "Label_name", _descriptor5, this);

          _initializerDefineProperty(this, "Label_jieshao", _descriptor6, this);

          _initializerDefineProperty(this, "spr_xiangou", _descriptor7, this);

          _initializerDefineProperty(this, "chiyou", _descriptor8, this);

          _initializerDefineProperty(this, "itempic", _descriptor9, this);

          this.danjia = 0;
          this._totalnum = 1;
        }

        start() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.on((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_SHOP, this.updateData, this);
          this.sinbox.on("update_money", this.updateMoneyHandler, this);

          if (JishiGoumaiTK.oprType == "goumai") {
            this.btnGoumai.active = true;
            this.btnchushou.active = false;
            this.danjia = JishiGoumaiTK.DATA.buyPrice;
            this.sinbox.getComponent(_crd && SpinBoxComponent === void 0 ? (_reportPossibleCrUseOfSpinBoxComponent({
              error: Error()
            }), SpinBoxComponent) : SpinBoxComponent).max = JishiGoumaiTK.DATA.quota;
          } else if (JishiGoumaiTK.oprType == "chushou") {
            this.btnGoumai.active = false;
            this.btnchushou.active = true;
            this.danjia = JishiGoumaiTK.DATA.salePrice;
            this.sinbox.getComponent(_crd && SpinBoxComponent === void 0 ? (_reportPossibleCrUseOfSpinBoxComponent({
              error: Error()
            }), SpinBoxComponent) : SpinBoxComponent).max = JishiGoumaiTK.DATA.amount;
          }

          this.Label_name.string = JishiGoumaiTK.DATA.name;
          this.Label_jieshao.string = JishiGoumaiTK.DATA.profile;
          this.zongjia.string = this.danjia + "";
          this.chiyou.string = "" + JishiGoumaiTK.DATA.amount + "";
          this.Label_name.string = JishiGoumaiTK.DATA.name;
          this.Label_jieshao.string = JishiGoumaiTK.DATA.profile + "";
          this.zongjia.string = this.danjia + "";
          this.initXiangou();
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getRemoteImg(JishiGoumaiTK.DATA.icon + "?imageView&thumbnail=162x191", this.itempic);
        }

        initXiangou() {
          switch (JishiGoumaiTK.DATA.restrict) {
            case 0:
              this.spr_xiangou.active = false;
              break;

            case 1:
              this.spr_xiangou.active = true;
              break;

            case 2:
              this.spr_xiangou.active = true;
              break;

            case 3:
              this.spr_xiangou.active = true;
              break;

            case 4:
              this.spr_xiangou.active = false;
              break;

            default:
              this.spr_xiangou.active = false;
              break;
          }

          if (this.spr_xiangou.active) {
            this.spr_xiangou.getComponent(Label).string = "本日剩余次数: (" + JishiGoumaiTK.DATA.quanta + "/" + JishiGoumaiTK.DATA.quota + ")";
          } else {
            this.spr_xiangou.getComponent(Label).string = "";
          }

          if (this.spr_xiangou.active && JishiGoumaiTK.DATA.quanta >= JishiGoumaiTK.DATA.quota) {
            (_crd && ComponentsUtils === void 0 ? (_reportPossibleCrUseOfComponentsUtils({
              error: Error()
            }), ComponentsUtils) : ComponentsUtils).setGray(this.btnGoumai, true);
          }
        }

        onDestroy() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.off((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_SHOP, this.updateData, this);
        }

        updateData(da) {
          JishiGoumaiTK.DATA = da.data;
          this.initXiangou();
          this.chiyou.string = "" + JishiGoumaiTK.DATA.amount + "";
        }
        /**
         * 
         * @param evt 
         * @param num 
         */


        updateMoneyHandler(num) {
          if (!Number.isNaN(Number(num))) {
            this._totalnum = num;
            this.zongjia.string = Number(num) * this.danjia + "";
          }
        }

        choushou() {
          var data = {
            "plantName": JishiGoumaiTK.DATA.name,
            "amount": this._totalnum,
            "flash": JishiGoumaiTK.DATA.flash
          };
          (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
            error: Error()
          }), showMsg2) : showMsg2)("出售成功");
          this.closeself();
        }

        goumai() {
          (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
            error: Error()
          }), showMsg2) : showMsg2)("购买成功");
        }

        update(deltaTime) {}
        /**
        * 关闭自己
        */


        closeself() {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/jishi/pre_jishiGm");
        }

      }, _class3.DATA = void 0, _class3.oprType = "", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sinbox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "zongjia", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnGoumai", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnchushou", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_jieshao", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spr_xiangou", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chiyou", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itempic", [_dec10], {
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
//# sourceMappingURL=aa882a824f7b2511e65b4bff1a57eacd972e6ff0.js.map