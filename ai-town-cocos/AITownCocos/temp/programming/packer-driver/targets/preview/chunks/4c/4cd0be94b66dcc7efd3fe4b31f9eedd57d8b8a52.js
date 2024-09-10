System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, WebUtils, modelMgr, observer, GlobalConfig, showMsg2, EventType, ActionType, TouchCatTips, ToysInfo, showMsgWithMask, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, TAG, ToyItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatActionInfo(extras) {
    _reporterNs.report("CatActionInfo", "../../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTouchCatTips(extras) {
    _reporterNs.report("TouchCatTips", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToysInfo(extras) {
    _reporterNs.report("ToysInfo", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToyDataType(extras) {
    _reporterNs.report("ToyDataType", "../shop/CatEnjoyToolsDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../../core/message/MaskToastManager", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
    }, function (_unresolved_5) {
      showMsg2 = _unresolved_5.showMsg2;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      ActionType = _unresolved_7.ActionType;
      TouchCatTips = _unresolved_7.TouchCatTips;
      ToysInfo = _unresolved_7.ToysInfo;
    }, function (_unresolved_8) {
      showMsgWithMask = _unresolved_8.showMsgWithMask;
    }, function (_unresolved_9) {
      Log = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9cfa4zK6VpI5b/4rO432LAc", "ToyItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'ToyItem';

      _export("ToyItem", ToyItem = (_dec = ccclass('ToyItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class ToyItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itempic", _descriptor, this);

          _initializerDefineProperty(this, "Label_name", _descriptor2, this);

          _initializerDefineProperty(this, "Top_node", _descriptor3, this);

          _initializerDefineProperty(this, "item_num", _descriptor4, this);

          _initializerDefineProperty(this, "use_btn", _descriptor5, this);

          _initializerDefineProperty(this, "bubble", _descriptor6, this);

          _initializerDefineProperty(this, "rootNode", _descriptor7, this);

          this._da = void 0;
          this._servda = void 0;
        }

        start() {
          this.node.on("update_data", this.updateData, this); //observer.on(EventType.SOCKET_CHANGE_CATS, this.updateSerData, this);
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.setScale(0, 0);
          this.node.off("update_data", this.updateData, this); //observer.off(EventType.SOCKET_CHANGE_CATS, this.updateSerData, this);
        }

        updateSerData() {
          (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
            error: Error()
          }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getStrById(10007));
          this.updateData(this._da);
        }
        /**
        * 视图更新
        * @param da 
        */


        updateData(da) {
          if (da) {
            this._da = da;
            this.Label_name.string = (_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[da.goodsId].eName;
            this.item_num.string = String(da.count);
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg((_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[da.goodsId].picUrl, this.itempic);
            this.node.setScale(1, 1);
          }
        }
        /**
         * 显示使用逗猫玩具
         * @param evt 
         * @param da 
         * @returns 
         */


        toyClickShowUseBtn() {
          // this.Top_node.getComponent(ToyComponent).currentGoodId = this._da.goodsId
          // this.use_btn.active = true
          // this.use_btn.setParent(this.node)
          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.catRootNode.scale.x > 0) {
            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x < -450 || (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x > 40) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)('Wait for your cat to return!');
              return;
            }
          } else {
            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x < -40 || (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x > 450) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)('Wait for your cat to return!');
              return;
            }
          }

          if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002) <= 0) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("Insufficient Ap!");
            return;
          }

          if (!(_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playAniComplete) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("Cat has Action now!");
            return;
          }

          this.rootNode.active = false;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playWithCat((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId(), this._da.goodsId, 1);
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'use Toy', this._da.goodsId);
          this.rootNode;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.hasToySpine = true;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.checkplayerItems();
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'cat node happy');
          var actionData = {
            type: (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).TOY_PLAY,
            text: (_crd && TouchCatTips === void 0 ? (_reportPossibleCrUseOfTouchCatTips({
              error: Error()
            }), TouchCatTips) : TouchCatTips)[1],
            duringTime: 7,
            toyId: this._da.goodsId
          };
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SEND_CAT_ACTION, actionData);
          this.bubble.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itempic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Top_node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item_num", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "use_btn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bubble", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec8], {
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
//# sourceMappingURL=4cd0be94b66dcc7efd3fe4b31f9eedd57d8b8a52.js.map