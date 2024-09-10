System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, showMsg2, modelMgr, uiMgr, LoadingController, DataEvents, StringUtils, WebUtils, JishiGoumaiZZTK, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, TAG, GoumaiZZItem;

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

  function _reportPossibleCrUseOfDataEvents(extras) {
    _reporterNs.report("DataEvents", "../../../model/DataEvents", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtils(extras) {
    _reporterNs.report("StringUtils", "../../../utils/StringUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJishiGoumaiZZTK(extras) {
    _reporterNs.report("JishiGoumaiZZTK", "./JishiGoumaiZZTK", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../../assets/src/utils/LogUtils", _context.meta, extras);
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
      DataEvents = _unresolved_5.DataEvents;
    }, function (_unresolved_6) {
      StringUtils = _unresolved_6.default;
    }, function (_unresolved_7) {
      WebUtils = _unresolved_7.default;
    }, function (_unresolved_8) {
      JishiGoumaiZZTK = _unresolved_8.JishiGoumaiZZTK;
    }, function (_unresolved_9) {
      Log = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f59odeJFO0JT8C91hzl+X", "GoumaiZZItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'GoumaiZZItem';
      /**
       * 种子item
       */

      _export("GoumaiZZItem", GoumaiZZItem = (_dec = ccclass('GoumaiZZItem'), _dec2 = property(String), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec(_class = (_class2 = class GoumaiZZItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "oprType", _descriptor, this);

          _initializerDefineProperty(this, "itempic", _descriptor2, this);

          _initializerDefineProperty(this, "spr_select", _descriptor3, this);

          _initializerDefineProperty(this, "chiyou", _descriptor4, this);

          _initializerDefineProperty(this, "Label_name", _descriptor5, this);

          _initializerDefineProperty(this, "Sprite_jiesuo", _descriptor6, this);

          _initializerDefineProperty(this, "Label_jiesuo", _descriptor7, this);

          _initializerDefineProperty(this, "shoujia", _descriptor8, this);

          _initializerDefineProperty(this, "spr_xiangou", _descriptor9, this);

          this._da = void 0;
          this.isSelectShow = void 0;
          this.isSelect = void 0;
        }

        start() {
          this.node.on("update_data", this.updateData, this);
        }

        onDestroy() {
          this.node.off("update_data", this.updateData, this);
        }

        onEnable() {
          this.node.on("update_data", this.updateData, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEndHandler, this); // observer.on(EventType.CHOUSHOU_ITEM_SELECTSTATE, this.setSelcet, this);

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.on((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_SHOP, this.freshShopData, this);
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.on((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_STORE, this.freshData, this);
        }

        onDisable() {
          this.node.off(Node.EventType.TOUCH_END, this.touchEndHandler, this);
          this.node.off("update_data", this.updateData, this); // observer.off(EventType.CHOUSHOU_ITEM_SELECTSTATE, this.setSelcet, this);

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.off((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_SHOP, this.freshShopData, this);
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.off((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).UPDATE_JISHI_STORE, this.freshData, this);
        }
        /**
         * 设置限购
         */


        setXiangou() {
          // "restrict": 0, //限购类型(0:不限购|1:每日限购|2:每周限购|3:每月限购|4:赛季限购)
          // "quota": 0, //限购数量
          // "sale": false, //是否可卖(已达到限购数量)
          if (!this.spr_xiangou) {
            return;
          }

          var bg = this.spr_xiangou.getChildByName("Sprite_bg");
          var label = this.spr_xiangou.getChildByName("Label_num");
          var bgres = "";

          switch (this._da.restrict) {
            case 0:
              this.spr_xiangou.active = false;
              break;

            case 1:
              this.spr_xiangou.active = true;
              bgres = "newjishi/xiangou_1";
              break;

            case 2:
              this.spr_xiangou.active = true;
              bgres = "newjishi/xiangou_3";
              break;

            case 3:
              this.spr_xiangou.active = true;
              bgres = "newjishi/xiangou_2";
              break;

            case 4:
              this.spr_xiangou.active = false;
              break;

            default:
              this.spr_xiangou.active = false;
              break;
          }

          if (this.spr_xiangou.active && bgres) {
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(bgres, bg);
            label.getComponent(Label).string = this._da.quanta + "/" + this._da.quota;

            if (this._da.quanta >= this._da.quota) {
              (_crd && StringUtils === void 0 ? (_reportPossibleCrUseOfStringUtils({
                error: Error()
              }), StringUtils) : StringUtils).setGray(this.node, 1);
            } else {
              (_crd && StringUtils === void 0 ? (_reportPossibleCrUseOfStringUtils({
                error: Error()
              }), StringUtils) : StringUtils).setGray(this.node, 0);
            }
          }
        }

        setSelcet(da) {
          if (this.oprType == "chushou") {
            if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).jishiModel.hasPlSelect) {
              this.isSelectShow = true;
            } else {
              this.isSelectShow = false;
            }

            this.spr_select.active = this.isSelectShow;

            if (da.data.from == "self") {
              this.isSelect = da.data.isSelect;

              if (this.isSelect) {
                (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                  error: Error()
                }), WebUtils) : WebUtils).getResouceImg("newjishi/select", this.spr_select);
              } else {
                (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                  error: Error()
                }), WebUtils) : WebUtils).getResouceImg("newjishi/unselect", this.spr_select);
              }
            }

            var ind = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).jishiModel.hasSelectData.indexOf(this._da);

            if (!this.isSelect) {
              if (ind >= 0) {
                (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                  error: Error()
                }), modelMgr) : modelMgr).jishiModel.hasSelectData.splice(ind, 1);
              }
            } else if (this.isSelect && da.data.from == "self") {
              (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).jishiModel.hasSelectData.push(this._da);
            }
          }
        }

        update(deltaTime) {}
        /**
         * 出售
         * @param da 
         */


        freshData(da) {
          //seedId == subtype 种子或道具的id
          if (da && da.data) {
            if (this._da && this._da.seedId == da.data.seedId && this._da.dimension) //dimension 确认是种子
              this._da = da.data; // 添加后,刷新出现item 丢失 

            this.updateData(this._da);
          }
        }
        /**
         * 购买
         * @param da 
         */


        freshShopData(da) {
          if (da && da.data) {
            if (this._da && this._da.subType && this._da.subType == da.data.subType && this._da.dimension) //dimension 确认是种子
              this._da = da.data; // 添加后,刷新出现item 丢失 

            this.updateData(this._da);
          }
        }
        /**
         * 视图更新
         * @param da 
         */


        updateData(da) {
          this._da = da;

          if (this._da) {
            this.node.active = true;

            if (!this._da.icon) {
              console.warn("没有图片:", this._da);
            } else {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getRemoteImg(this._da.icon + "?imageView&thumbnail=162x191", this.itempic);
            }

            if (this.oprType == "goumai") {
              this.chiyou.string = "持有:" + this._da.amount + "";
              this.shoujia.string = this._da.buyPrice + "";
              this.Sprite_jiesuo.active = false;
              this.setXiangou();
            } else if (this.oprType == "chushou") {
              this.chiyou.string = "持有:" + this._da.amount + "";
              this.shoujia.string = this._da.salePrice + "";
              this.setSelcet({
                data: {
                  isSelect: false
                }
              }); //每次更新数据都要重置选择
            }

            this.Label_name.string = this._da.name + "";
          } else {
            this.node.active = false;
          }
        }

        /**
         * 
         * @param evt 
         */
        touchEndHandler(evt) {
          if (this.oprType == "goumai") {
            if (this._da.quota != 0 && this._da.quanta >= this._da.quota) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)("已达到限购数量，不能购买");
              return;
            }

            if (!this._da.sell) {
              // if (this._da.unlockLevel>modelMgr.mainModel.userinfo.level) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)("等级不足，不能购买未解锁的商品");
              return;
            }
          }

          if (this.oprType == "chushou" && (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.hasPlSelect) {
            this.setSelcet({
              data: {
                isSelect: !this.isSelect,
                from: "self"
              }
            });
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).jishiModel.hasSelectData);
          } else {
            (_crd && JishiGoumaiZZTK === void 0 ? (_reportPossibleCrUseOfJishiGoumaiZZTK({
              error: Error()
            }), JishiGoumaiZZTK) : JishiGoumaiZZTK).oprType = this.oprType;
            (_crd && JishiGoumaiZZTK === void 0 ? (_reportPossibleCrUseOfJishiGoumaiZZTK({
              error: Error()
            }), JishiGoumaiZZTK) : JishiGoumaiZZTK).DATA = this._da; //弹出购买弹框

            (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
              error: Error()
            }), LoadingController) : LoadingController).ins.showLoading();
            (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
              error: Error()
            }), uiMgr) : uiMgr).popToParent("prefabs/jishi/pre_jishiGmZZ");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "oprType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itempic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spr_select", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chiyou", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_jiesuo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_jiesuo", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "shoujia", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spr_xiangou", [_dec10], {
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
//# sourceMappingURL=3fab3cb57bf831c06af5f37722f16aa5e0d473ef.js.map