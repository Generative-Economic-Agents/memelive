System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, WebUtils, modelMgr, CatWorkingComponent, Log, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TAG, workSelectCatItemComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatInfo(extras) {
    _reporterNs.report("catInfo", "../../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatWorkingComponent(extras) {
    _reporterNs.report("CatWorkingComponent", "../../../game/components/CatWorkingComponent", _context.meta, extras);
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
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
    }, function (_unresolved_4) {
      CatWorkingComponent = _unresolved_4.CatWorkingComponent;
    }, function (_unresolved_5) {
      Log = _unresolved_5.default;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04010wkvNND6pfwcpq706sl", "workSelectCatItemComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'workSelectCatItemComponent';

      _export("workSelectCatItemComponent", workSelectCatItemComponent = (_dec = ccclass('workSelectCatItemComponent'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class workSelectCatItemComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "catPic", _descriptor, this);

          _initializerDefineProperty(this, "catName", _descriptor2, this);

          _initializerDefineProperty(this, "occupationTxt", _descriptor3, this);

          _initializerDefineProperty(this, "energyTxt", _descriptor4, this);

          _initializerDefineProperty(this, "energyTxtInfo", _descriptor5, this);

          _initializerDefineProperty(this, "preWorkPageNode", _descriptor6, this);

          _initializerDefineProperty(this, "selectedCatPic", _descriptor7, this);

          //引导
          _initializerDefineProperty(this, "selectedCatPicGuide", _descriptor8, this);

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
          if (da) {
            var _configModel$getCatDa;

            this._da = da;
            this.catName.string = da.name;
            this.occupationTxt.string = "" + da.career;
            this.energyTxt.string = da.rate.toFixed(0);
            var mbti = (_configModel$getCatDa = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getCatDataById(da.id)) == null ? void 0 : _configModel$getCatDa.mbti;
            mbti = mbti.toLowerCase();
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("mingxinpian/" + mbti + "_mxp", this.catPic);
            this.node.setScale(1, 1);
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, da);
          }
        }
        /**
        选择某一个猫
         */


        clickAvatarCat() {
          var _configModel$getCatDa2;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          var mbti = (_configModel$getCatDa2 = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getCatDataById(this._da.id)) == null ? void 0 : _configModel$getCatDa2.mbti;
          mbti = mbti.toLowerCase();
          this.energyTxtInfo.string = this._da.rate.toFixed(0);
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg("mingxinpian/" + mbti + "_mxp", this.selectedCatPic);
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg("mingxinpian/" + mbti + "_mxp", this.selectedCatPicGuide);
          this.preWorkPageNode.getComponent(_crd && CatWorkingComponent === void 0 ? (_reportPossibleCrUseOfCatWorkingComponent({
            error: Error()
          }), CatWorkingComponent) : CatWorkingComponent).setPreWorkData(this._da);
        }

        toyClickShowUseBtn() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "catPic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "catName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "occupationTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "energyTxt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "energyTxtInfo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "preWorkPageNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "selectedCatPic", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "selectedCatPicGuide", [_dec9], {
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
//# sourceMappingURL=a9023f143cb8f58eb705f45cd08bcbe01d8edb75.js.map