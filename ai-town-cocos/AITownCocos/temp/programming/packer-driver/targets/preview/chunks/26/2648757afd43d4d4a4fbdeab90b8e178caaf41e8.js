System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, RichText, Animation, modelMgr, observer, uiMgr, EventType, GlobalConfig, WebUtils, LoadingController, NumberCounter, AudioManager, SpriteAtlasAnimation, ActionType, GuideIndex, TouchCatTips, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _crd, ccclass, property, showWorkLimit, UserinfoComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberCounter(extras) {
    _reporterNs.report("NumberCounter", "../../utils/NumberCounter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteAtlasAnimation(extras) {
    _reporterNs.report("SpriteAtlasAnimation", "./SpriteAtlasAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatActionInfo(extras) {
    _reporterNs.report("CatActionInfo", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideIndex(extras) {
    _reporterNs.report("GuideIndex", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTouchCatTips(extras) {
    _reporterNs.report("TouchCatTips", "../../model/StaticTextConfig", _context.meta, extras);
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
      RichText = _cc.RichText;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      EventType = _unresolved_3.EventType;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
    }, function (_unresolved_5) {
      WebUtils = _unresolved_5.default;
    }, function (_unresolved_6) {
      LoadingController = _unresolved_6.LoadingController;
    }, function (_unresolved_7) {
      NumberCounter = _unresolved_7.NumberCounter;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }, function (_unresolved_9) {
      SpriteAtlasAnimation = _unresolved_9.SpriteAtlasAnimation;
    }, function (_unresolved_10) {
      ActionType = _unresolved_10.ActionType;
      GuideIndex = _unresolved_10.GuideIndex;
      TouchCatTips = _unresolved_10.TouchCatTips;
    }, function (_unresolved_11) {
      Log = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62c20D+GLlNNbnIoZqYEDbf", "UserinfoComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'Animation', 'AnimationState', 'animation']);

      ({
        ccclass,
        property
      } = _decorator);
      showWorkLimit = 49;

      _export("UserinfoComponent", UserinfoComponent = (_dec = ccclass('UserinfoComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(RichText), _dec13 = property(RichText), _dec14 = property(RichText), _dec15 = property(RichText), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec(_class = (_class2 = class UserinfoComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Label_cv", _descriptor, this);

          _initializerDefineProperty(this, "Label_ap", _descriptor2, this);

          _initializerDefineProperty(this, "Label_cc", _descriptor3, this);

          _initializerDefineProperty(this, "Sprite_icon", _descriptor4, this);

          _initializerDefineProperty(this, "Sprite_icon_guide", _descriptor5, this);

          _initializerDefineProperty(this, "Spriteani_aixin", _descriptor6, this);

          _initializerDefineProperty(this, "Spriteani_jinbi", _descriptor7, this);

          _initializerDefineProperty(this, "Node_aixints1", _descriptor8, this);

          _initializerDefineProperty(this, "Node_aixints2", _descriptor9, this);

          _initializerDefineProperty(this, "Node_apts", _descriptor10, this);

          _initializerDefineProperty(this, "heartChangeTxt", _descriptor11, this);

          _initializerDefineProperty(this, "apChangeTxt", _descriptor12, this);

          _initializerDefineProperty(this, "heartChangeTxtReverse", _descriptor13, this);

          _initializerDefineProperty(this, "apChangeTxtReverse", _descriptor14, this);

          _initializerDefineProperty(this, "heartRoot", _descriptor15, this);

          _initializerDefineProperty(this, "heartRootReverse", _descriptor16, this);

          _initializerDefineProperty(this, "heartRed", _descriptor17, this);

          _initializerDefineProperty(this, "heartBlack", _descriptor18, this);

          _initializerDefineProperty(this, "heartRedReverse", _descriptor19, this);

          _initializerDefineProperty(this, "heartBlackReverse", _descriptor20, this);

          _initializerDefineProperty(this, "apRoot", _descriptor21, this);

          _initializerDefineProperty(this, "apRootReverse", _descriptor22, this);

          _initializerDefineProperty(this, "progress", _descriptor23, this);

          this.spriteAtlasAnimation = null;
          this.jinbispriteAtlasAnimation = null;
          this.heartAnimation = void 0;
          this.apAnimation = void 0;
          this.heartAnimationReverse = void 0;
          this.apAnimationReverse = void 0;
          this.hasApAni = false;
          this.hasWorkProgress = void 0;
          this.counter = void 0;
          this.ccCounter = void 0;
          this.apcounter = void 0;
        }

        start() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, this.updatePlayersData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ITEMUPDATE, this.updatePlayersData, this); //道具改变

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.changeCatsHandler, this); //切换猫咪

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGEINFO_CATS, this.chageCatinfoDataHandler, this); //当前猫咪信息改变

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_CAT_CV, this.chageCatByTouchHandler, this); //当前猫咪信息改变

          if (this.Spriteani_aixin) {
            this.spriteAtlasAnimation = this.Spriteani_aixin.getComponent(_crd && SpriteAtlasAnimation === void 0 ? (_reportPossibleCrUseOfSpriteAtlasAnimation({
              error: Error()
            }), SpriteAtlasAnimation) : SpriteAtlasAnimation);
          }

          if (this.Spriteani_jinbi) {
            this.jinbispriteAtlasAnimation = this.Spriteani_jinbi.getComponent(_crd && SpriteAtlasAnimation === void 0 ? (_reportPossibleCrUseOfSpriteAtlasAnimation({
              error: Error()
            }), SpriteAtlasAnimation) : SpriteAtlasAnimation);
          }

          this.heartAnimation = this.heartRoot.getComponent(Animation);
          this.apAnimation = this.apRoot.getComponent(Animation);
          this.heartAnimationReverse = this.heartRootReverse.getComponent(Animation);
          this.apAnimationReverse = this.apRootReverse.getComponent(Animation);
          this.heartAnimation.on(Animation.EventType.FINISHED, this.heartAniStop, this);
          this.heartAnimation.on(Animation.EventType.PLAY, this.heartAniStart, this);
          this.apAnimation.on(Animation.EventType.FINISHED, this.apAniStop, this);
          this.apAnimation.on(Animation.EventType.PLAY, this.apAniStart, this);
          this.heartAnimationReverse.on(Animation.EventType.FINISHED, this.heartAniStopReverse, this);
          this.heartAnimationReverse.on(Animation.EventType.PLAY, this.heartAniStartReverse, this);
          this.apAnimationReverse.on(Animation.EventType.FINISHED, this.apAniStopReverse, this);
          this.apAnimationReverse.on(Animation.EventType.PLAY, this.apAniStartReverse, this);
        }

        update(dt) {
          if (this.counter) {
            this.counter.update(dt);
          }

          if (this.ccCounter) {
            this.ccCounter.update(dt);
          }

          if (this.apcounter) {
            this.apcounter.update(dt);
          }
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, this.updatePlayersData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ITEMUPDATE, this.updatePlayersData, this); //道具改变

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.updatePlayersData, this); //切换猫咪

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGEINFO_CATS, this.chageCatinfoDataHandler, this); //当前猫咪信息改变

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_CAT_CV, this.chageCatinfoDataHandler, this); //当前猫咪信息改变
        }

        openMxp() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.showLoading();
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_mingxp");
        }

        heartAniStart(type, state) {
          if (this.progress.active) {
            this.hasWorkProgress = true;
            this.progress.active = false;
          }
        }

        heartAniStartReverse(type, state) {
          if (this.progress.active) {
            this.hasWorkProgress = true;
            this.progress.active = false;
          }
        }

        apAniStart(type, state) {
          if (this.progress.active || this.hasWorkProgress) {
            this.progress.active = false;
            this.hasWorkProgress = true;
          }
        }

        apAniStartReverse(type, state) {
          if (this.progress.active || this.hasWorkProgress) {
            this.progress.active = false;
            this.hasWorkProgress = true;
          }
        }

        heartAniStop(type, state) {
          if (!this.hasWorkProgress) {
            if (this.hasApAni) {
              this.progress.active = false;
            } else {
              this.progress.active = true;
            }
          } else {
            return;
          }
        }

        heartAniStopReverse(type, state) {
          if (!this.hasWorkProgress || this.progress.active === false) {
            return;
          }

          if (this.hasApAni) {
            this.progress.active = false;
          } else {
            this.progress.active = true;
          }
        }

        apAniStop(type, state) {
          if (!this.hasWorkProgress) {
            return;
          }

          this.progress.active = true;
          this.hasApAni = false;
          this.hasWorkProgress = false;
        }

        apAniStopReverse(type, state) {
          if (!this.hasWorkProgress) {
            return;
          }

          this.progress.active = true;
          this.hasApAni = false;
          this.hasWorkProgress = false;
        }
        /**
         * 当前猫咪数据改变
         */


        chageCatinfoDataHandler() {
          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
          var catdata = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(catid);
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (catdata.cv >= showWorkLimit && !(guideInfo != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE6.end))) {
            //触发第六阶段引导
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE6);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SHOW_WORK_BUTTON);
          }

          if (catdata) {
            var curccnum = this.Label_cv.string;

            if (curccnum == "") {
              //首次登录
              this.Label_cv.string = "" + catdata.cv.toFixed(0); //当前猫德值
            } else {
              //数据变化
              var max = catdata.cv.toFixed(0);

              if (curccnum != max && Number(max) >= 100) {
                this.openMxp();
              }

              var cvend = Number(catdata.cv.toFixed(0));

              if (Number(curccnum) != cvend) {
                if (Number(curccnum) < cvend) {
                  var _this$spriteAtlasAnim;

                  //增加
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound("maode_add");
                  (_this$spriteAtlasAnim = this.spriteAtlasAnimation) == null || _this$spriteAtlasAnim.play();

                  if (Math.abs(cvend - Number(curccnum)) >= 10) {
                    this.heartChangeTxt.fontSize = 30;
                    this.heartChangeTxtReverse.fontSize = 30;
                  } else {
                    this.heartChangeTxt.fontSize = 40;
                    this.heartChangeTxtReverse.fontSize = 40;
                  }

                  this.heartChangeTxt.string = "<color=#FF0000>+" + (cvend - Number(curccnum)) + "</color>";
                  this.heartChangeTxtReverse.string = "<color=#FF0000>+" + (cvend - Number(curccnum)) + "</color>";
                  this.heartRed.active = true;
                  this.heartBlack.active = false;
                  this.heartRedReverse.active = true;
                  this.heartBlackReverse.active = false;
                } else {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound("maode_jianshao");
                  this.heartChangeTxt.string = "<color=#805959>" + (cvend - Number(curccnum)) + "</color>";
                  this.heartChangeTxtReverse.string = "<color=#805959>" + (cvend - Number(curccnum)) + "</color>";
                  this.heartRed.active = false;
                  this.heartBlack.active = true;
                  this.heartRedReverse.active = false;
                  this.heartBlackReverse.active = true;
                }

                if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.catRootNode.getScale().x > 0) {
                  this.heartAnimation.play();
                } else {
                  this.heartAnimationReverse.play();
                }

                this.counter = new (_crd && NumberCounter === void 0 ? (_reportPossibleCrUseOfNumberCounter({
                  error: Error()
                }), NumberCounter) : NumberCounter)({
                  startNumber: Number(curccnum),
                  endNumber: cvend,
                  duration: 1,
                  onUpdate: currentNumber => {
                    this.Label_cv.string = currentNumber.toFixed(0) + "";
                  },
                  onComplete: () => {
                    (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                      error: Error()
                    }), Log) : Log).log('Counting completed.');
                  }
                });
              }
            }
          } else {
            this.Label_cv.string = "0";
          }
        }
        /**
        * 当前猫咪数据改变
        */


        chageCatByTouchHandler(data) {
          if (data === void 0) {
            data = null;
          }

          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
          var catdata = data ? data.data.data : (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(catid);
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (catdata.cv >= showWorkLimit && !(guideInfo != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE6.end))) {
            //触发第六阶段引导
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE6);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SHOW_WORK_BUTTON);
          }

          var touchText = (_crd && TouchCatTips === void 0 ? (_reportPossibleCrUseOfTouchCatTips({
            error: Error()
          }), TouchCatTips) : TouchCatTips)[1];

          if (catdata) {
            var curccnum = this.Label_cv.string;

            if (curccnum == "") {
              //首次登录
              this.Label_cv.string = "" + catdata.cv.toFixed(0); //当前猫德值
            } else {
              //数据变化
              var max = catdata.cv.toFixed(0);

              if (curccnum != max && Number(max) >= 100) {
                this.openMxp();
              }

              var cvend = Number(catdata.cv.toFixed(0));

              if (Number(curccnum) != cvend) {
                if (Math.abs(cvend - Number(curccnum)) >= 10) {
                  this.heartChangeTxt.fontSize = 30;
                  this.heartChangeTxtReverse.fontSize = 30;
                } else {
                  this.heartChangeTxt.fontSize = 40;
                  this.heartChangeTxtReverse.fontSize = 40;
                }

                if (Number(curccnum) < cvend) {
                  var _this$spriteAtlasAnim2;

                  //增加
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound("maode_add");

                  var _catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                    error: Error()
                  }), GlobalConfig) : GlobalConfig).instance.getCurCatId();

                  var _catdata = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                    error: Error()
                  }), modelMgr) : modelMgr).mainModel.getServerCatsData(_catid);

                  (_this$spriteAtlasAnim2 = this.spriteAtlasAnimation) == null || _this$spriteAtlasAnim2.play();
                  this.heartChangeTxt.string = "<color=#FF0000>+" + (cvend - Number(curccnum)) + "</color>";
                  this.heartChangeTxtReverse.string = "<color=#FF0000>+" + (cvend - Number(curccnum)) + "</color>";
                  this.heartRed.active = true;
                  this.heartBlack.active = false;
                  this.heartRedReverse.active = true;
                  this.heartBlackReverse.active = false;
                } else {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).instance.playSound("maode_jianshao");
                  this.heartChangeTxt.string = "<color=#805959>" + (cvend - Number(curccnum)) + "</color>";
                  this.heartChangeTxtReverse.string = "<color=#805959>" + (cvend - Number(curccnum)) + "</color>";
                  this.heartRed.active = false;
                  this.heartBlack.active = true;
                  this.heartRedReverse.active = false;
                  this.heartBlackReverse.active = true;
                }

                if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.catRootNode.getScale().x > 0) {
                  this.heartAnimation.play();
                } else {
                  this.heartAnimationReverse.play();
                }

                this.counter = new (_crd && NumberCounter === void 0 ? (_reportPossibleCrUseOfNumberCounter({
                  error: Error()
                }), NumberCounter) : NumberCounter)({
                  startNumber: Number(curccnum),
                  endNumber: cvend,
                  duration: 1,
                  onUpdate: currentNumber => {
                    this.Label_cv.string = currentNumber.toFixed(0) + "";
                  },
                  onComplete: () => {
                    (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                      error: Error()
                    }), Log) : Log).log('Counting completed.');
                  }
                });
              }

              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
                error: Error()
              }), EventType) : EventType).SOCKET_CHAT, {
                data: {
                  "requestId": 1,
                  "playerId": 1,
                  "type": 1,
                  "command": 1,
                  "code": 1,
                  "message": catdata.msg,
                  "data": {
                    "message": catdata.msg,
                    "catId": catdata.msg
                  }
                }
              });
            }

            var actionData = {
              type: (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).TOUCH,
              text: catdata.msg,
              duringTime: 1.3
            };
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SEND_CAT_ACTION, actionData);
          } else {
            this.Label_cv.string = "0";
          }
        }
        /**
         * 切换猫咪
         */


        changeCatsHandler() {
          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
          var catdata = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(catid);
          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (catdata.cv >= showWorkLimit && !(guideInfo != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE6.end))) {
            //触发第六阶段引导
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).UPDATE_GUIDE_INFO_MAIN_VIEW, (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
              error: Error()
            }), GuideIndex) : GuideIndex).START_GUIDE_STATE6);
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).SHOW_WORK_BUTTON);
          }

          if (catdata) {
            var _instance$curCatData;

            this.Label_cv.string = "" + catdata.cv.toFixed(0); //当前猫德值

            var mbti = (_instance$curCatData = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curCatData) == null ? void 0 : _instance$curCatData.mbti;
            if (mbti) mbti = mbti.toLowerCase();

            if (!mbti) {
              var _configModel$getCatDa;

              mbti = (_configModel$getCatDa = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getCatDataById(catid)) == null ? void 0 : _configModel$getCatDa.mbti;
              if (mbti) mbti = mbti.toLowerCase();
            }

            if (mbti) {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("catspic/" + mbti + "_tx", this.Sprite_icon);
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("catspic/" + mbti + "_tx", this.Sprite_icon_guide);
            }
          } else {
            this.Label_cv.string = "" + 0; //当前猫德值
          }
        }
        /**更新cat cv 好感度 */


        updateCatCv(data) {}

        updatePlayersData() {
          // if (false) {
          if (this.Label_ap.string == "") {
            //首次展示直接赋值
            this.Label_ap.string = "" + (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002).toFixed(0); //10101002 体力(AP)//10101000 猫币（金币）
          } else {
            var apend = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101002);

            if (Number(this.Label_ap.string) != apend) {
              this.apcounter = new (_crd && NumberCounter === void 0 ? (_reportPossibleCrUseOfNumberCounter({
                error: Error()
              }), NumberCounter) : NumberCounter)({
                startNumber: Number(this.Label_ap.string),
                endNumber: apend,
                duration: 1,
                onUpdate: currentNumber => {
                  this.Label_ap.string = currentNumber.toFixed(0) + "";
                },
                onComplete: () => {
                  (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                    error: Error()
                  }), Log) : Log).log('Counting completed.');
                }
              });

              if (Math.abs(Number(this.Label_ap.string) - Number(apend)) >= 10) {
                this.heartChangeTxt.fontSize = 30;
                this.heartChangeTxtReverse.fontSize = 30;
              } else {
                this.heartChangeTxt.fontSize = 40;
                this.heartChangeTxtReverse.fontSize = 40;
              }

              if (Number(this.Label_ap.string) > Number(apend)) {
                this.apChangeTxt.string = "<color=#805959>" + (Number(apend) - Number(this.Label_ap.string)) + "</color>";
                this.apChangeTxtReverse.string = "<color=#805959>" + (Number(apend) - Number(this.Label_ap.string)) + "</color>";
              } else {
                this.apChangeTxt.string = "<color=#FF0000>+" + (Number(apend) - Number(this.Label_ap.string)) + "</color>";
                this.apChangeTxtReverse.string = "<color=#FF0000>+" + (Number(apend) - Number(this.Label_ap.string)) + "</color>";
              }

              this.hasApAni = true;

              if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.catRootNode.getScale().x > 0) {
                this.scheduleOnce(() => {
                  this.apAnimation.play();
                }, 0.6);
              } else {
                this.scheduleOnce(() => {
                  this.apAnimationReverse.play();
                }, 0.6);
              }
            }
          } // if (false) {


          if (this.Label_cc.string == "") {
            this.Label_cc.string = "" + (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101000);
          } else {
            var apend2 = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getserItemCountById(10101000);

            if (Number(this.Label_cc.string) != apend2) {
              if (Number(this.Label_cc.string) < apend2) {
                var _this$jinbispriteAtla;

                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound("coin");
                (_this$jinbispriteAtla = this.jinbispriteAtlasAnimation) == null || _this$jinbispriteAtla.play();
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

          if (this.Label_cv.string == "") {
            var _instance$curCatData2;

            //只有进入游戏时刷新一次
            var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
            var catdata = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getServerCatsData(catid);

            if (!catdata) {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log("没有猫咪", catdata);
              return;
            }

            this.Label_cv.string = "" + catdata.cv.toFixed(0); //当前猫德值

            var mbti = (_instance$curCatData2 = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.curCatData) == null ? void 0 : _instance$curCatData2.mbti;
            if (mbti) mbti = mbti.toLowerCase();

            if (!mbti) {
              var _configModel$getCatDa2;

              mbti = (_configModel$getCatDa2 = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getCatDataById(catid)) == null ? void 0 : _configModel$getCatDa2.mbti;
              if (mbti) mbti = mbti.toLowerCase();
            }

            if (mbti) {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("catspic/" + mbti + "_tx", this.Sprite_icon);
            }
          }
        }

        iconClickHandler(evt, data) {
          switch (data) {
            case "btn_aixin":
              this.Node_aixints1.active = true;
              this.Node_aixints2.active = false;
              this.Node_apts.active = false;
              break;

            case "axts1btn":
              this.Node_aixints1.active = false;
              this.Node_aixints2.active = true;
              this.Node_apts.active = false;
              break;

            case "axts2btn":
              this.Node_aixints1.active = false;
              this.Node_aixints2.active = false;
              this.Node_apts.active = false;
              break;

            case "btn_ap":
              this.Node_aixints1.active = false;
              this.Node_aixints2.active = false;
              this.Node_apts.active = true;
              break;

            case "apts1btn":
              this.Node_aixints1.active = false;
              this.Node_aixints2.active = false;
              this.Node_apts.active = false;
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_cv", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_ap", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_cc", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon_guide", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Spriteani_aixin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Spriteani_jinbi", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_aixints1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_aixints2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_apts", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "heartChangeTxt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "apChangeTxt", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "heartChangeTxtReverse", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "apChangeTxtReverse", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "heartRoot", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "heartRootReverse", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "heartRed", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "heartBlack", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "heartRedReverse", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "heartBlackReverse", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "apRoot", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "apRootReverse", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec24], {
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
//# sourceMappingURL=2648757afd43d4d4a4fbdeab90b8e178caaf41e8.js.map