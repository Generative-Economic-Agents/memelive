System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, EditBox, Label, Node, Sprite, LoadingController, modelMgr, socket, uiMgr, network, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, TAG, currentWorkCostAp, CatWorkingComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "./LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatCfgD(extras) {
    _reporterNs.report("catCfgD", "../config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      LoadingController = _unresolved_2.LoadingController;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      socket = _unresolved_3.socket;
      uiMgr = _unresolved_3.uiMgr;
    }, function (_unresolved_4) {
      network = _unresolved_4.network;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d3c2WIp1ZK87U9T1MUgcvQ", "CatWorkingComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'ColorKey', 'Component', 'EditBox', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'CatWorkingComponent';
      currentWorkCostAp = 20;

      _export("CatWorkingComponent", CatWorkingComponent = (_dec = ccclass('CatWorkingComponent'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(EditBox), _dec9 = property(EditBox), _dec10 = property(Node), _dec(_class = (_class2 = class CatWorkingComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "catSelectList", _descriptor, this);

          _initializerDefineProperty(this, "energyTxt", _descriptor2, this);

          _initializerDefineProperty(this, "catName", _descriptor3, this);

          _initializerDefineProperty(this, "itemsCombe", _descriptor4, this);

          _initializerDefineProperty(this, "apLimit", _descriptor5, this);

          _initializerDefineProperty(this, "catSelectNum", _descriptor6, this);

          _initializerDefineProperty(this, "EditBox1", _descriptor7, this);

          _initializerDefineProperty(this, "EditBox2", _descriptor8, this);

          _initializerDefineProperty(this, "go", _descriptor9, this);

          this.selectCatId = void 0;
        }

        start() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading();
          this.setUserAp();
        }

        editItemOver(data) {
          var addStr = this.EditBox1.string.length && this.EditBox2.string.length ? ' + ' : '';
          (this.EditBox1.string.length || this.EditBox2.string.length) && (this.itemsCombe.string = "" + this.EditBox1.string + addStr + this.EditBox2.string);
          console.log(TAG, data);
        }

        setGoButtonState(interactable) {
          this.go.getComponent(Button).interactable = interactable;
          this.go.getComponent(Sprite).grayscale = !interactable;
        }

        update(deltaTime) {
          if ((this.EditBox1.string.length || this.EditBox2.string.length) && this.catName.string.length && this.apLimit.color.equals(Color.GREEN)) {
            this.setGoButtonState(true);
          } else {
            this.setGoButtonState(false);
          }

          if (this.catName.string.length) {
            this.catSelectNum.string = '1/1';
          } else {
            this.catSelectNum.string = '0/1';
          }
        }

        showCatSelectList() {}

        setUserAp() {
          var currentAp = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002).toFixed(0);
          this.apLimit.string = currentAp + "/20";

          if (currentAp < currentAp) {
            this.apLimit.color = new Color(Color.RED);
            this.setGoButtonState(false);
          } else {
            this.apLimit.color = new Color(Color.GREEN);
          }
        }

        setPreWorkData(data) {
          this.selectCatId = data.id;
          this.energyTxt.string = data.earningRate.toFixed(0);
          this.catName.string = data.name;
          console.log(TAG, 'setPreWorkData');
        }

        showCatSelectView() {
          this.catSelectList.active = true;
        }

        hideCatSelectView() {
          this.catSelectList.active = false;
        }

        goToWork() {
          if (this.selectCatId && (this.EditBox1.string.length || this.EditBox2.string.length)) {
            var catWorkData = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).CreateCatWorkCatRequest();
            catWorkData.data.catIds = [this.selectCatId];
            catWorkData.data.items = [this.EditBox1.string, this.EditBox2.string];
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(catWorkData);
          }
        }

        closeWorkPage() {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_cat_working");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "catSelectList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "energyTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "catName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemsCombe", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "apLimit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "catSelectNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "EditBox1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "EditBox2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "go", [_dec10], {
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
//# sourceMappingURL=bda3029a7d9b108fbd9d87e5542bf04864f54948.js.map