System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, GuideIndex, modelMgr, observer, EventType, GlobalConfig, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NewGuideComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGuideIndex(extras) {
    _reporterNs.report("GuideIndex", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
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
      GuideIndex = _unresolved_2.GuideIndex;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      GlobalConfig = _unresolved_5.GlobalConfig;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4248aHGhPFBGLurVCYqYptF", "NewGuideComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewGuideComponent", NewGuideComponent = (_dec = ccclass('NewGuideComponent'), _dec2 = property({
        type: [Node]
      }), _dec3 = property(String), _dec4 = property(Number), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class NewGuideComponent extends Component {
        constructor() {
          super(...arguments);

          //连续引导页面
          _initializerDefineProperty(this, "guideItemArr", _descriptor, this);

          _initializerDefineProperty(this, "eventName", _descriptor2, this);

          _initializerDefineProperty(this, "adapt", _descriptor3, this);

          _initializerDefineProperty(this, "guideNode", _descriptor4, this);

          _initializerDefineProperty(this, "checkInBtn", _descriptor5, this);

          this.GuideDataInfo = void 0;
        }

        start() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on(this.eventName, this.showFirstGuide, this);
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (!(guideInfo != null && guideInfo.find != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE1.end))) {
            //触发第1阶段引导
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE1);
          }
        }

        showFirstGuide(data) {
          this.guideNode.active = true;
          this.GuideDataInfo = data.data;
          this.guideItemArr[this.GuideDataInfo.start - 1].active = true;
        }

        itemGuideClick(button, data) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.guideItemArr[Number(data) - 1].active = false;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.yindaoReq(Number(data) + Number(this.adapt));

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide) {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide.push(Number(data) + Number(this.adapt));
          } else {
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide = [Number(data) + Number(this.adapt)];
          }

          if (Number(data) === 9 && this.checkInBtn.active === false) {
            (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.yindaoReq(11);
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide.push(11);
          } else {
            if (Number(data) === this.GuideDataInfo.end) {
              this.guideNode.active = false;
              return;
            }

            this.guideItemArr[Number(data)].active = true;
          }
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "checkInBtn", [_dec6], {
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
//# sourceMappingURL=81f78995ebf9b9f83920bbe3e793a8d39627b05c.js.map