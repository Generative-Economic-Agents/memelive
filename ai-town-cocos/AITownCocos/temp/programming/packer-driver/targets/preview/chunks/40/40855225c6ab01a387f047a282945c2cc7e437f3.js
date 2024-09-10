System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, EditBox, Label, Node, Sprite, LoadingController, modelMgr, observer, socket, uiMgr, network, GlobalConfig, EventType, StaticConfigModel, GuideIndex, NewGuideComponentWork, Log, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _crd, ccclass, property, TAG, currentWorkCostAp, CatWorkingComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "./LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatInfo(extras) {
    _reporterNs.report("catInfo", "../config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../../model/StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideIndex(extras) {
    _reporterNs.report("GuideIndex", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewGuideComponentWork(extras) {
    _reporterNs.report("NewGuideComponentWork", "../../module/main/NewGuideComponentWork", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
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
      observer = _unresolved_3.observer;
      socket = _unresolved_3.socket;
      uiMgr = _unresolved_3.uiMgr;
    }, function (_unresolved_4) {
      network = _unresolved_4.network;
    }, function (_unresolved_5) {
      GlobalConfig = _unresolved_5.GlobalConfig;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      StaticConfigModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      GuideIndex = _unresolved_8.GuideIndex;
    }, function (_unresolved_9) {
      NewGuideComponentWork = _unresolved_9.NewGuideComponentWork;
    }, function (_unresolved_10) {
      Log = _unresolved_10.default;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d3c2WIp1ZK87U9T1MUgcvQ", "CatWorkingComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'ColorKey', 'Component', 'EditBox', 'Label', 'Node', 'RichText', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'CatWorkingComponent';
      currentWorkCostAp = 20;

      _export("CatWorkingComponent", CatWorkingComponent = (_dec = ccclass("CatWorkingComponent"), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(EditBox), _dec14 = property(EditBox), _dec15 = property(EditBox), _dec16 = property(EditBox), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec(_class = (_class2 = class CatWorkingComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "catSelectList", _descriptor, this);

          _initializerDefineProperty(this, "energyTxt", _descriptor2, this);

          _initializerDefineProperty(this, "catName", _descriptor3, this);

          _initializerDefineProperty(this, "catOccupation", _descriptor4, this);

          //引导
          _initializerDefineProperty(this, "energyTxtGuide", _descriptor5, this);

          _initializerDefineProperty(this, "catNameGuide", _descriptor6, this);

          _initializerDefineProperty(this, "catOccupationGuide", _descriptor7, this);

          //
          _initializerDefineProperty(this, "itemsCombe", _descriptor8, this);

          _initializerDefineProperty(this, "apLimit", _descriptor9, this);

          _initializerDefineProperty(this, "apLimitGuide", _descriptor10, this);

          _initializerDefineProperty(this, "catSelectNum", _descriptor11, this);

          _initializerDefineProperty(this, "EditBox1", _descriptor12, this);

          _initializerDefineProperty(this, "EditBox2", _descriptor13, this);

          //引导部分
          _initializerDefineProperty(this, "EditBox1Guide", _descriptor14, this);

          _initializerDefineProperty(this, "EditBox2Guide", _descriptor15, this);

          //
          _initializerDefineProperty(this, "go", _descriptor16, this);

          //引导部分
          _initializerDefineProperty(this, "goGuide", _descriptor17, this);

          //
          _initializerDefineProperty(this, "occupationBg", _descriptor18, this);

          this.selectCatId = void 0;

          _initializerDefineProperty(this, "item1txt1", _descriptor19, this);

          _initializerDefineProperty(this, "item1txt2", _descriptor20, this);

          _initializerDefineProperty(this, "item2txt1", _descriptor21, this);

          _initializerDefineProperty(this, "item2txt2", _descriptor22, this);

          //Ap不足
          _initializerDefineProperty(this, "apDown", _descriptor23, this);

          this.isGuide = false;
        }

        start() {
          this.item1txt1.setPosition(0, 0);
          this.item1txt2.setPosition(0, 0);
          this.item2txt1.setPosition(0, 0);
          this.item2txt2.setPosition(0, 0);
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading();
          this.setUserAp();
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (!(guideInfo != null && guideInfo.find != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE7.end))) {
            //触发第7阶段引导
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_GUIDE_INFO_WORK_PAGE, {
              start: 1,
              end: 5
            });
          }
        }

        editItemOver(data) {
          var addStr = this.EditBox1.string.length && this.EditBox2.string.length ? " + " : "";
          (this.EditBox1.string.length || this.EditBox2.string.length) && (this.itemsCombe.string = "" + this.EditBox1.string + addStr + this.EditBox2.string);
          this.EditBox1Guide.string = this.EditBox1.string;
          this.EditBox2Guide.string = this.EditBox2.string;

          if (this.isGuide && this.EditBox1.string.length && this.EditBox2.string.length) {
            this.node.getComponent(_crd && NewGuideComponentWork === void 0 ? (_reportPossibleCrUseOfNewGuideComponentWork({
              error: Error()
            }), NewGuideComponentWork) : NewGuideComponentWork).showGuide3();
          }

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, data);
        }

        editItemOverGuide(data) {
          var addStr = this.EditBox1Guide.string.length && this.EditBox2Guide.string.length ? " + " : "";
          (this.EditBox1Guide.string.length || this.EditBox2Guide.string.length) && (this.itemsCombe.string = "" + this.EditBox1Guide.string + addStr + this.EditBox2Guide.string);
          this.EditBox1.string = this.EditBox1Guide.string;
          this.EditBox2.string = this.EditBox2Guide.string;

          if (this.isGuide && this.EditBox1.string.length && this.EditBox2.string.length) {
            this.node.getComponent(_crd && NewGuideComponentWork === void 0 ? (_reportPossibleCrUseOfNewGuideComponentWork({
              error: Error()
            }), NewGuideComponentWork) : NewGuideComponentWork).showGuide3();
          }

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, data);
        }

        setGoButtonState(interactable) {
          this.go.getComponent(Button).interactable = interactable;
          this.go.getComponent(Sprite).grayscale = !interactable;
          this.goGuide.getComponent(Button).interactable = interactable;
          this.goGuide.getComponent(Sprite).grayscale = !interactable;
        }

        update(deltaTime) {
          if ((this.EditBox1.string.length || this.EditBox2.string.length || this.EditBox1Guide.string.length || this.EditBox2Guide.string.length) && (this.catName.string.length || this.catNameGuide.string.length) && !this.apDown.active) {
            this.setGoButtonState(true);
          } else {
            this.setGoButtonState(false);
          }

          if (this.catName.string.length || this.catNameGuide.string.length) {
            this.catSelectNum.string = "1/1";
          } else {
            this.catSelectNum.string = "0/1";
          }
        }

        showCatSelectList() {}

        setUserAp() {
          var currentAp = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002).toFixed(0);
          var work_cost_energy = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getconfigByGrpAId((_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
            error: Error()
          }), StaticConfigModel) : StaticConfigModel).SysParameter, 4); // this.apLimit.string = `${work_cost_energy.value}/${currentAp}`;
          // this.apLimitGuide.string = `${work_cost_energy.value}/${currentAp}`;

          if (Number(work_cost_energy.value) > Number(currentAp)) {
            this.apLimit.string = "" + currentAp;
            this.apLimitGuide.string = "" + currentAp;
            this.apLimit.color = new Color('#FF5946');
            this.apLimitGuide.color = new Color('#FF5946');
            this.apDown.active = true;
            this.setGoButtonState(false);
          } else {
            this.apLimit.string = "" + currentAp;
            this.apLimitGuide.string = "" + currentAp;
            this.apLimit.color = new Color('#00ff00');
            this.apLimitGuide.color = new Color('#00ff00');
            this.apDown.active = false;
          }
        }

        setPreWorkData(data) {
          this.selectCatId = data.id;
          this.energyTxt.string = data.rate.toFixed(0);
          this.catName.string = data.name;
          this.catOccupation.string = data.career;
          this.energyTxtGuide.string = data.rate.toFixed(0);
          this.catNameGuide.string = data.name;
          this.catOccupationGuide.string = data.career;
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, "setPreWorkData");
        }

        showCatSelectView() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.isGuide) {
            this.node.getComponent(_crd && NewGuideComponentWork === void 0 ? (_reportPossibleCrUseOfNewGuideComponentWork({
              error: Error()
            }), NewGuideComponentWork) : NewGuideComponentWork).closeGuide1();
          }

          this.catSelectList.active = true;
          this.occupationBg.active = false;
        }

        hideCatSelectView() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.isGuide) {
            this.node.getComponent(_crd && NewGuideComponentWork === void 0 ? (_reportPossibleCrUseOfNewGuideComponentWork({
              error: Error()
            }), NewGuideComponentWork) : NewGuideComponentWork).showGuide2();
          }

          this.catSelectList.active = false;
          this.occupationBg.active = true;
        }

        goToWork() {
          if (this.selectCatId && (this.EditBox1.string.length || this.EditBox2.string.length)) {
            var catWorkData = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).CreateCatWorkCatRequest();
            catWorkData.data.catIds = [this.selectCatId];
            var itemArr = [];
            this.EditBox1.string.length && itemArr.push(this.EditBox1.string);
            this.EditBox2.string.length && itemArr.push(this.EditBox2.string);
            catWorkData.data.items = itemArr;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(catWorkData);
          }

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).START_CAT_WORK); //AudioManager.instance.playSound("new_starWork");

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.closeWorkPage();
        }

        closeWorkPage() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "catOccupation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "energyTxtGuide", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "catNameGuide", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "catOccupationGuide", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "itemsCombe", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "apLimit", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "apLimitGuide", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "catSelectNum", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "EditBox1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "EditBox2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "EditBox1Guide", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "EditBox2Guide", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "go", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "goGuide", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "occupationBg", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "item1txt1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "item1txt2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "item2txt1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "item2txt2", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "apDown", [_dec24], {
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
//# sourceMappingURL=40855225c6ab01a387f047a282945c2cc7e437f3.js.map