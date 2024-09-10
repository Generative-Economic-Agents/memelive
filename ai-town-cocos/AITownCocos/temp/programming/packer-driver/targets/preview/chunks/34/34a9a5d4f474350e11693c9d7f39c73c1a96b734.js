System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Slider, Sprite, socket, network, WebUtils, AudioManager, showMsgWithMask, ToysInfo, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, TAG, MAX_SHOP_SLIDER_COUNT, MIN_SHOP_SLIDER_COUNT, step_percent, ShopPurchaseComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatEnjoyToolsData(extras) {
    _reporterNs.report("CatEnjoyToolsData", "./shop/CatEnjoyToolsDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../core/message/MaskToastManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToysInfo(extras) {
    _reporterNs.report("ToysInfo", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../assets/src/utils/LogUtils", _context.meta, extras);
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
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      socket = _unresolved_2.socket;
    }, function (_unresolved_3) {
      network = _unresolved_3.network;
    }, function (_unresolved_4) {
      WebUtils = _unresolved_4.default;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      showMsgWithMask = _unresolved_6.showMsgWithMask;
    }, function (_unresolved_7) {
      ToysInfo = _unresolved_7.ToysInfo;
    }, function (_unresolved_8) {
      Log = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2d87ooGxhLfpWp1NMbkNh7", "ShopPurchaseComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'halfToFloat', 'js', 'Label', 'math', 'Node', 'Slider', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'ShopPurchaseComponent';
      MAX_SHOP_SLIDER_COUNT = 9;
      MIN_SHOP_SLIDER_COUNT = 0;
      step_percent = 0.111111111;

      _export("ShopPurchaseComponent", ShopPurchaseComponent = (_dec = ccclass('ShopPurchaseComponent'), _dec2 = property(Slider), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Label), _dec(_class = (_class2 = class ShopPurchaseComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "slider", _descriptor, this);

          // 精灵组件
          _initializerDefineProperty(this, "pageNode", _descriptor2, this);

          // 精灵组件
          _initializerDefineProperty(this, "sliderShowBar", _descriptor3, this);

          _initializerDefineProperty(this, "itemName", _descriptor4, this);

          _initializerDefineProperty(this, "itemDescription", _descriptor5, this);

          _initializerDefineProperty(this, "itemTotalPrice", _descriptor6, this);

          _initializerDefineProperty(this, "currentCount", _descriptor7, this);

          _initializerDefineProperty(this, "itempic", _descriptor8, this);

          _initializerDefineProperty(this, "currentCoin", _descriptor9, this);

          this.current_sliderProgress = 0;
          //滑动条默认值为1
          this._data = void 0;
        }

        start() {
          this.currentCount.string = String(this.sliderValue); // observer.on(EventType.SEND_BUY_SHOP_ITEM_SUCCESS_INFO, (data)=>{
          //     console.log(TAG, data)
          //     this.closePurchasePage()
          // }, this);
        }

        setItemData(data) {
          this._data = data;
          this.itemName.string = (_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
            error: Error()
          }), ToysInfo) : ToysInfo)[data.item[0]].eName;
          this.itemDescription.string = data.itemDesc;
          this.itemTotalPrice.string = String(data.originalPprice * this.sliderValue);
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg("shopGoodsPic/" + data.storeId + "_shopItem_" + data.id, this.itempic);
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'setData', data);
        }

        updateSliderValue(event, customData) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          var value = this.current_sliderProgress + Number(customData);

          if (value > MAX_SHOP_SLIDER_COUNT || value < MIN_SHOP_SLIDER_COUNT) {
            return;
          } else {
            this.slider.progress = parseFloat(String(value)) * step_percent;
            this.current_sliderProgress = value; // this.sliderShowBar.setScale(this.slider.progress, 1)
            // this.currentCount.string = String(this.sliderValue)

            this.setSliderBySliderValue();
          }
        }

        useSlider(event, customData) {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, this.slider.progress);
        }

        useSliderChange(slider) {
          this.sliderShowBar.setScale(this.slider.progress, 1);
        }

        get sliderValue() {
          return this.current_sliderProgress + 1;
        }

        setSliderBySliderValue(event) {
          if (event === void 0) {
            event = null;
          }

          if (event) {
            this.current_sliderProgress = Math.round(event.progress * MAX_SHOP_SLIDER_COUNT);
          }

          this.sliderShowBar.setScale(this.slider.progress, 1);
          this.currentCount.string = String(this.sliderValue);
          this.itemTotalPrice.string = String(this._data.originalPprice * this.sliderValue);
        }

        closePurchasePage() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.pageNode.active = false;
          this.current_sliderProgress = 0;
          this.slider.progress = 0;
          this.itempic.getComponent(Sprite).spriteFrame = null;
          this.setSliderBySliderValue(); //this.setCatManger(false)
        }

        buySelectItem() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).BuyShopRequest();
          json.data.shopId = this._data.id;
          json.data.count = this.sliderValue;

          if (Number(this.currentCoin.string) < Number(this.itemTotalPrice.string)) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("Insufficient Coins");
            return;
          }

          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, json);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sliderShowBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemDescription", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemTotalPrice", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentCount", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itempic", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "currentCoin", [_dec10], {
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
//# sourceMappingURL=34a9a5d4f474350e11693c9d7f39c73c1a96b734.js.map