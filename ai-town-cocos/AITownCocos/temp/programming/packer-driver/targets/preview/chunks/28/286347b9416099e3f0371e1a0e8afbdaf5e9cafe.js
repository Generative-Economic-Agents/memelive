System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, WebUtils, ShopPurchaseComponent, ToysInfo, Log, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TAG, CatEnjoyToolsItemComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopPurchaseComponent(extras) {
    _reporterNs.report("ShopPurchaseComponent", "../ShopPurchaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatEnjoyToolsData(extras) {
    _reporterNs.report("CatEnjoyToolsData", "./CatEnjoyToolsDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToysInfo(extras) {
    _reporterNs.report("ToysInfo", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../manager/AudioManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      ShopPurchaseComponent = _unresolved_3.ShopPurchaseComponent;
    }, function (_unresolved_4) {
      ToysInfo = _unresolved_4.ToysInfo;
    }, function (_unresolved_5) {
      Log = _unresolved_5.default;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6404fcsJe1CQI6Toq7Lcewe", "CatEnjoyToolsItemComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'CatEnjoyToolsItemComponent';

      _export("CatEnjoyToolsItemComponent", CatEnjoyToolsItemComponent = (_dec = ccclass('CatEnjoyToolsItemComponent'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = class CatEnjoyToolsItemComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itempic", _descriptor, this);

          _initializerDefineProperty(this, "Label_name", _descriptor2, this);

          _initializerDefineProperty(this, "sprite_name", _descriptor3, this);

          _initializerDefineProperty(this, "Sprite_select", _descriptor4, this);

          _initializerDefineProperty(this, "buy_page", _descriptor5, this);

          _initializerDefineProperty(this, "price", _descriptor6, this);

          this._da = void 0;
        }

        start() {
          this.node.on("update_data", this.updateData, this);
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off("update_data", this.updateData, this);
        }
        /**
        * 视图更新
        * @param da 
        */


        updateData(da) {
          this._da = da;
          this.node.setScale(1, 1);

          if (this._da) {
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("shopGoodsPic/" + da.storeId + "_shopItem_" + da.id, this.itempic);
            this.Label_name.string = (_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[da.item[0]].eName;
            this.price.string = String(da.price);
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, da);
          }
        }
        /**
         * 切换购买道具
         * @param evt 
         * @param da 
         * @returns 
         */


        clickHandler(evt, da) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this._da) {
            this.buy_page.active = true;
            this.buy_page.getComponent(_crd && ShopPurchaseComponent === void 0 ? (_reportPossibleCrUseOfShopPurchaseComponent({
              error: Error()
            }), ShopPurchaseComponent) : ShopPurchaseComponent).setItemData(this._da);
          }

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'click', this._da);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprite_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_select", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buy_page", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec7], {
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
//# sourceMappingURL=286347b9416099e3f0371e1a0e8afbdaf5e9cafe.js.map