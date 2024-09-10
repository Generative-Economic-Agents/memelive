System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, modelMgr, observer, uiMgr, EventType, SpriteAtlasAnimation, ShopMangerTipsArray, AudioManager, NumberCounter, showMsgWithMask, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TAG, ShopLIstComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteAtlasAnimation(extras) {
    _reporterNs.report("SpriteAtlasAnimation", "../SpriteAtlasAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopMangerTipsArray(extras) {
    _reporterNs.report("ShopMangerTipsArray", "./CatEnjoyToolsDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberCounter(extras) {
    _reporterNs.report("NumberCounter", "../../../utils/NumberCounter", _context.meta, extras);
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
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      SpriteAtlasAnimation = _unresolved_4.SpriteAtlasAnimation;
    }, function (_unresolved_5) {
      ShopMangerTipsArray = _unresolved_5.ShopMangerTipsArray;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      NumberCounter = _unresolved_7.NumberCounter;
    }, function (_unresolved_8) {
      showMsgWithMask = _unresolved_8.showMsgWithMask;
    }, function (_unresolved_9) {
      Log = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed17dZ/SF5OLrO2KuAI0ciE", "ShopLIstComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'math', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'ShopLIstComponent';

      _export("ShopLIstComponent", ShopLIstComponent = (_dec = ccclass('ShopLIstComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class ShopLIstComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Label_cc", _descriptor, this);

          _initializerDefineProperty(this, "shopMangerTips", _descriptor2, this);

          _initializerDefineProperty(this, "commonCat", _descriptor3, this);

          _initializerDefineProperty(this, "happyCat", _descriptor4, this);

          _initializerDefineProperty(this, "SpriteAni_coin", _descriptor5, this);

          _initializerDefineProperty(this, "purchaseNode", _descriptor6, this);

          this.CoinSpriteAtlasAnimation = null;
          this.ccCounter = void 0;
        }

        start() {
          this.Label_cc.string = "" + (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101000);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SEND_BUY_SHOP_ITEM_SUCCESS_INFO, this.refreshTittleInfo, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, this.updateCoinNum, this);

          if (this.SpriteAni_coin) {
            this.CoinSpriteAtlasAnimation = this.SpriteAni_coin.getComponent(_crd && SpriteAtlasAnimation === void 0 ? (_reportPossibleCrUseOfSpriteAtlasAnimation({
              error: Error()
            }), SpriteAtlasAnimation) : SpriteAtlasAnimation);
          }
        }

        setCatManger(isHappy) {
          //this.commonCat.active = !isHappy
          this.happyCat.active = isHappy;
          this.shopMangerTips.string = isHappy ? (_crd && ShopMangerTipsArray === void 0 ? (_reportPossibleCrUseOfShopMangerTipsArray({
            error: Error()
          }), ShopMangerTipsArray) : ShopMangerTipsArray).HAPPY : (_crd && ShopMangerTipsArray === void 0 ? (_reportPossibleCrUseOfShopMangerTipsArray({
            error: Error()
          }), ShopMangerTipsArray) : ShopMangerTipsArray).COMMON[Math.round(Math.random())];
        }

        updateCoinNum() {
          let apend2 = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101000);

          if (Number(this.Label_cc.string) != apend2) {
            if (Number(this.Label_cc.string) < apend2) {
              var _this$CoinSpriteAtlas;

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound("coin");
              (_this$CoinSpriteAtlas = this.CoinSpriteAtlasAnimation) == null ? void 0 : _this$CoinSpriteAtlas.play();
            }

            this.ccCounter = new (_crd && NumberCounter === void 0 ? (_reportPossibleCrUseOfNumberCounter({
              error: Error()
            }), NumberCounter) : NumberCounter)({
              startNumber: Number(this.Label_cc.string),
              endNumber: apend2,
              duration: 1,
              onUpdate: currentNumber => {
                this.Label_cc.string = currentNumber.toFixed(0) + "";
              },
              onComplete: () => {
                (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                  error: Error()
                }), Log) : Log).log('Counting completed.');
              }
            });
          }
        }

        refreshTittleInfo(data) {
          this.purchaseNode.active = false;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_shopBuy");
          (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
            error: Error()
          }), showMsgWithMask) : showMsgWithMask)(`${data.data.data.shopData.name} + ${data.data.data.goods[0].count}`);
          this.setCatManger(true); //this.updateCoinNum()
        }

        update(deltaTime) {
          if (this.ccCounter) {
            this.ccCounter.update(deltaTime);
          }
        }

        closeShopPage() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/shop_home_page");
        }

        onDestroy() {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'ondestroy');
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SEND_BUY_SHOP_ITEM_SUCCESS_INFO, this.refreshTittleInfo, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, this.updateCoinNum, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_cc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shopMangerTips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "commonCat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "happyCat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SpriteAni_coin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "purchaseNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b393638765fbc0a10ccf1736b810c5736e2e5aa8.js.map