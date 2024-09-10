System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, modelMgr, observer, GlobalConfig, CatWorkingComponent, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, NewGuideComponentWork;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatWorkingComponent(extras) {
    _reporterNs.report("CatWorkingComponent", "../../game/components/CatWorkingComponent", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }, function (_unresolved_4) {
      CatWorkingComponent = _unresolved_4.CatWorkingComponent;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4657biTk9xAEJ0gYR+jjuka", "NewGuideComponentWork", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewGuideComponentWork", NewGuideComponentWork = (_dec = ccclass('NewGuideComponentWork'), _dec2 = property({
        type: [Node]
      }), _dec3 = property(String), _dec4 = property(Number), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class NewGuideComponentWork extends Component {
        constructor() {
          super(...arguments);

          //连续引导页面
          _initializerDefineProperty(this, "guideItemArr", _descriptor, this);

          _initializerDefineProperty(this, "eventName", _descriptor2, this);

          _initializerDefineProperty(this, "adapt", _descriptor3, this);

          _initializerDefineProperty(this, "guideNode", _descriptor4, this);

          //Guide
          _initializerDefineProperty(this, "item1txt1Guide", _descriptor5, this);

          _initializerDefineProperty(this, "item1txt2Guide", _descriptor6, this);

          _initializerDefineProperty(this, "item2txt1Guide", _descriptor7, this);

          _initializerDefineProperty(this, "item2txt2Guide", _descriptor8, this);

          this.GuideDataInfo = void 0;
        }

        start() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on(this.eventName, this.showFirstGuide, this);
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;
        }

        showFirstGuide(data) {
          this.node.getComponent(_crd && CatWorkingComponent === void 0 ? (_reportPossibleCrUseOfCatWorkingComponent({
            error: Error()
          }), CatWorkingComponent) : CatWorkingComponent).isGuide = true;
          this.showGuide1(); // this.guideNode.active = true
          // this.GuideDataInfo = data.data
          // this.guideItemArr[this.GuideDataInfo.start - 1].active = true
        }

        closeGuide1() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[0].active = false;
        }

        showGuide1() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[0].active = true;
        }

        showGuide2() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[0].active = false;
          this.guideItemArr[1].active = true;
          this.item1txt1Guide.setPosition(0, 0);
          this.item1txt2Guide.setPosition(0, 0);
          this.item2txt1Guide.setPosition(0, 0);
          this.item2txt2Guide.setPosition(0, 0);
        }

        showGuide3() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[1].active = false;
          this.guideItemArr[2].active = true;
        }

        showGuide4() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[2].active = false;
          this.guideItemArr[3].active = true;
        }

        showGuide5() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[3].active = false;
          this.guideItemArr[4].active = true;
        }

        itemGuideClick(button, data) {
          //button.node.getParent().active = false
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[Number(data) - Number(this.adapt)].active = false;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.yindaoReq(Number(data));

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide.push(Number(data));
          } else {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide = [Number(data)];
          } // this.guideItemArr[Number(data) - 1].active = false
          // modelMgr.mainModel.yindaoReq(Number(data) + Number(this.adapt));
          // if(GlobalConfig.instance.LoginData.data.player.guide){
          //     GlobalConfig.instance.LoginData.data.player.guide.push(Number(data) + Number(this.adapt))
          // }else{
          //     GlobalConfig.instance.LoginData.data.player.guide = [(Number(data) + Number(this.adapt))]
          // }
          // if(Number(data) === this.GuideDataInfo.end){
          //     this.guideNode.active = false
          //     return
          // }
          // this.guideItemArr[Number(data)].active = true

        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off(this.eventName, this.showFirstGuide, this);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "guideItemArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "adapt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "guideNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "item1txt1Guide", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "item1txt2Guide", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "item2txt1Guide", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "item2txt2Guide", [_dec9], {
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
//# sourceMappingURL=7dd6f7d674a5119a432fbafae1c61a16a477d376.js.map