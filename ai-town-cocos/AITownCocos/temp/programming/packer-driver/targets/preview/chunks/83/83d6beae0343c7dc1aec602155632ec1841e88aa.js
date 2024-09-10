System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, Component, Sprite, Label, sp, Button, ProgressBar, Material, ParticleSystem2D, AudioSource, EditBox, modelMgr, observer, socket, uiMgr, GlobalConfig, AudioManager, JietuComponent, upLoadPostcard, EventType, network, BoswerUtils, showMsg2, RedManager, LoadingController, StaticConfigModel, ScrollingText, ToyComponent, showMsgWithMask, ActionType, GuideIndex, SpineName, ToysInfo, WorkCatModel, WorkPostCardShow, shareTGPostCard, catSpineControl, Log, CurrentVoice, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _crd, ccclass, property, rootPos, progressPos, TAG, MainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJietuComponent(extras) {
    _reporterNs.report("JietuComponent", "../../manager/JietuComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupLoadPostcard(extras) {
    _reporterNs.report("upLoadPostcard", "../../manager/JietuComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoswerUtils(extras) {
    _reporterNs.report("BoswerUtils", "../../utils/BoswerUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedManager(extras) {
    _reporterNs.report("RedManager", "../../manager/RedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../../model/StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatActionInfo(extras) {
    _reporterNs.report("CatActionInfo", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkResult(extras) {
    _reporterNs.report("WorkResult", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskcell(extras) {
    _reporterNs.report("taskcell", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScrollingText(extras) {
    _reporterNs.report("ScrollingText", "./ScrollingText", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToyComponent(extras) {
    _reporterNs.report("ToyComponent", "./PlayWithCat.ts/ToyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../core/message/MaskToastManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideIndex(extras) {
    _reporterNs.report("GuideIndex", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineName(extras) {
    _reporterNs.report("SpineName", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToysInfo(extras) {
    _reporterNs.report("ToysInfo", "../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkCatModel(extras) {
    _reporterNs.report("WorkCatModel", "../../model/WorkCatModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkPostCardShow(extras) {
    _reporterNs.report("WorkPostCardShow", "./catWork/WorkPostCardShow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshareTGPostCard(extras) {
    _reporterNs.report("shareTGPostCard", "./catWork/WorkPostCardShow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatSpineControl(extras) {
    _reporterNs.report("catSpineControl", "./catSpineControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCurrentVoice(extras) {
    _reporterNs.report("CurrentVoice", "./MxpComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      sp = _cc.sp;
      Button = _cc.Button;
      ProgressBar = _cc.ProgressBar;
      Material = _cc.Material;
      ParticleSystem2D = _cc.ParticleSystem2D;
      AudioSource = _cc.AudioSource;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      socket = _unresolved_2.socket;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      JietuComponent = _unresolved_5.JietuComponent;
      upLoadPostcard = _unresolved_5.upLoadPostcard;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      network = _unresolved_7.network;
    }, function (_unresolved_8) {
      BoswerUtils = _unresolved_8.default;
    }, function (_unresolved_9) {
      showMsg2 = _unresolved_9.showMsg2;
    }, function (_unresolved_10) {
      RedManager = _unresolved_10.default;
    }, function (_unresolved_11) {
      LoadingController = _unresolved_11.LoadingController;
    }, function (_unresolved_12) {
      StaticConfigModel = _unresolved_12.default;
    }, function (_unresolved_13) {
      ScrollingText = _unresolved_13.ScrollingText;
    }, function (_unresolved_14) {
      ToyComponent = _unresolved_14.ToyComponent;
    }, function (_unresolved_15) {
      showMsgWithMask = _unresolved_15.showMsgWithMask;
    }, function (_unresolved_16) {
      ActionType = _unresolved_16.ActionType;
      GuideIndex = _unresolved_16.GuideIndex;
      SpineName = _unresolved_16.SpineName;
      ToysInfo = _unresolved_16.ToysInfo;
    }, function (_unresolved_17) {
      WorkCatModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      WorkPostCardShow = _unresolved_18.WorkPostCardShow;
      shareTGPostCard = _unresolved_18.shareTGPostCard;
    }, function (_unresolved_19) {
      catSpineControl = _unresolved_19.catSpineControl;
    }, function (_unresolved_20) {
      Log = _unresolved_20.default;
    }, function (_unresolved_21) {
      CurrentVoice = _unresolved_21.CurrentVoice;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef9684cFTNI659L1NJWTevu", "MainView", undefined);

      __checkObsolete__(['Node', '_decorator', 'Component', 'Vec2', 'Sprite', 'Vec3', 'Label', 'find', 'sp', 'Button', 'ProgressBar', 'Material', 'System', 'sys', 'ParticleSystem2D', 'ParticleSystem']);

      __checkObsolete__(['AudioSource', 'assert', 'EventTouch', 'UITransform', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);
      rootPos = {
        x: 94.47,
        y: -299.835
      };
      progressPos = {
        infp: {
          //x:-15.94 y:-155.414
          //progress.x - root.x,progress.y - root.y
          progress: {
            x: 142.692,
            y: 108.001
          },
          chatBubble: {
            x: 38.344,
            y: 6.252,
            isReverse: false
          },
          bubble: {
            x: -220.089,
            y: 46.854
          }
        },
        isfp: {
          //x:-23.91 y:-195.264
          progress: {
            x: 142.692,
            y: 108.001
          },
          chatBubble: {
            x: 38.344,
            y: 6.252,
            isReverse: false
          },
          bubble: {
            x: -220.089,
            y: 46.854
          }
        },
        esfp: {
          //x:-35.864 y:-195.264
          progress: {
            x: 142.692,
            y: 108.001
          },
          chatBubble: {
            x: 38.344,
            y: 6.252,
            isReverse: false
          },
          bubble: {
            x: -220.089,
            y: 46.854
          }
        },
        entp: {
          //x:-466.767 y:-230.677
          progress: {
            x: 142.692,
            y: 111.035
          },
          chatBubble: {
            x: 38.344,
            y: 6.252,
            isReverse: false
          },
          bubble: {
            x: -220.089,
            y: 46.854
          }
        },
        estp: {
          //x:-96.491 y:-179.197
          progress: {
            x: 142.692,
            y: 141.001
          },
          chatBubble: {
            x: -343.056,
            y: 6.252,
            isReverse: false
          },
          bubble: {
            x: -220.089,
            y: 46.854
          }
        }
      };
      TAG = 'MainView';

      _export("MainView", MainView = (_dec = ccclass("MainView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(AudioSource), _dec7 = property({
        type: [Node]
      }), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(sp.Skeleton), _dec18 = property(sp.Skeleton), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Label), _dec24 = property(Button), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Material), _dec28 = property(Sprite), _dec29 = property(Node), _dec30 = property(Button), _dec31 = property(Button), _dec32 = property(EditBox), _dec33 = property(Node), _dec(_class = (_class2 = class MainView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canvas", _descriptor, this);

          _initializerDefineProperty(this, "spritetest", _descriptor2, this);

          _initializerDefineProperty(this, "edituserdata", _descriptor3, this);

          _initializerDefineProperty(this, "btn_qiandao", _descriptor4, this);

          _initializerDefineProperty(this, "audioSource", _descriptor5, this);

          _initializerDefineProperty(this, "catSpineItemArr", _descriptor6, this);

          _initializerDefineProperty(this, "spr_selbg", _descriptor7, this);

          _initializerDefineProperty(this, "Node_qipao", _descriptor8, this);

          _initializerDefineProperty(this, "Label_maoname", _descriptor9, this);

          _initializerDefineProperty(this, "Button_qiandao", _descriptor10, this);

          _initializerDefineProperty(this, "Sprite_mao", _descriptor11, this);

          _initializerDefineProperty(this, "Sprite_redpointA", _descriptor12, this);

          _initializerDefineProperty(this, "Label_tishi", _descriptor13, this);

          _initializerDefineProperty(this, "node_tasktishi", _descriptor14, this);

          _initializerDefineProperty(this, "play_with_cat", _descriptor15, this);

          _initializerDefineProperty(this, "catSke", _descriptor16, this);

          _initializerDefineProperty(this, "toySke", _descriptor17, this);

          _initializerDefineProperty(this, "workProgress", _descriptor18, this);

          _initializerDefineProperty(this, "btnWork", _descriptor19, this);

          _initializerDefineProperty(this, "post_button", _descriptor20, this);

          _initializerDefineProperty(this, "postcardNode", _descriptor21, this);

          _initializerDefineProperty(this, "progress_txt", _descriptor22, this);

          _initializerDefineProperty(this, "shareBtn", _descriptor23, this);

          _initializerDefineProperty(this, "idleParticle", _descriptor24, this);

          _initializerDefineProperty(this, "clickParticle", _descriptor25, this);

          _initializerDefineProperty(this, "mat", _descriptor26, this);

          _initializerDefineProperty(this, "transitionNode", _descriptor27, this);

          _initializerDefineProperty(this, "chatLog", _descriptor28, this);

          _initializerDefineProperty(this, "useCmdBtn", _descriptor29, this);

          _initializerDefineProperty(this, "testTools", _descriptor30, this);

          _initializerDefineProperty(this, "cmdEditBox", _descriptor31, this);

          _initializerDefineProperty(this, "testToolsPartNode", _descriptor32, this);

          this.mapEarthStartX = 0;
          this.touchStartX = void 0;
          this.current_add_time = 0;
          this.isSpineAniComplete = false;
          //idle粒子累加时间
          this.particleAddTime = 0;
          this.currentCatSpineNode = null;
        }

        start() {
          var _instance$LoginData2;

          window.global = window;

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.testTools) {
            var _this$testTools;

            ((_this$testTools = this.testTools) == null ? void 0 : _this$testTools.node) && (this.testTools.node.active = true);
          }

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.checkcatReq();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.checkplayerItems();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.tasklistReq();
          this.Node_qipao.active = false;
          this.spr_selbg.active = true;
          this.catSke.setEndListener(() => {// this.isSpineAniComplete = true
            // this.playCatSpineAni(SpineName.idle, true)
          });
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("hideselbg", () => {
            this.spr_selbg.active = false;
          }, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("shotstart", this.clickCaptureHandler, this); // this.scheduleOnce(()=>{
          //   mduManger.openModu(ModuleID.JISHI);
          // },1)
          // ArrUtils.mSort(ArrUtils.testArr, "age");
          // window["au"] = ArrUtils;

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData) {
            var _instance$LoginData;

            if (!((_instance$LoginData = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData) != null && (_instance$LoginData = _instance$LoginData.data) != null && (_instance$LoginData = _instance$LoginData.player) != null && _instance$LoginData.catId)) {
              (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
                error: Error()
              }), uiMgr) : uiMgr).popToParent("prefabs/pre_letterview");
            } else {
              (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
                error: Error()
              }), observer) : observer).post("hideselbg");
            }
          } else {
            (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
              error: Error()
            }), observer) : observer).post("hideselbg");
          }

          this.changeCatSerData();
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).START_CAT_WORK, this.receiveWorkStartMessage, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).WORK_STATE_INFO, this.receiveWorkStateMessage, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_SELECT_CATS, this.selectCatSerData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.changeCatSerData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGEINFO_CATS, this.changeCatSerData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHECK_PLAYERITEMS, da => {
            this.changeCatSerData({
              data: {
                "id": (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                  error: Error()
                }), GlobalConfig) : GlobalConfig).instance.getCurCatId(),
                "name": "esfp cat",
                "userName": "1249499207@qq.com",
                "cv": 31.1,
                "birthday": 1716764513965,
                "workFlag": 0,
                "workTime": 0,
                "workFinish": 0
              }
            });
            (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.zhaohuReq();
          }, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).WORK_DEFAULT, () => {
            this.controlWorkProgressAndButton(false);
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)('work fail');
          }, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_SHARE, this.copyUrl, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_QIANDAO, this.qiandaoRepHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_TASK_CHANGE, this.taskchangeHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SEND_CAT_ACTION, this.showCatAction, this);

          if (!((_instance$LoginData2 = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData) != null && (_instance$LoginData2 = _instance$LoginData2.data) != null && (_instance$LoginData2 = _instance$LoginData2.player) != null && _instance$LoginData2.sign)) {
            //是否签到
            this.Button_qiandao.active = false;
          }

          var guideInfo = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.guide;

          if (guideInfo != null && guideInfo.find != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE5.end)) {
            this.showChatLogButton();
          }

          if (guideInfo != null && guideInfo.find != null && guideInfo.find(element => element === (_crd && GuideIndex === void 0 ? (_reportPossibleCrUseOfGuideIndex({
            error: Error()
          }), GuideIndex) : GuideIndex).START_GUIDE_STATE6.end)) {
            this.showWorkButton();
          }

          (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).instance.registRedPoint((_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).KEY.renwutabred_main, this.Sprite_redpointA, [(_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
            error: Error()
          }), RedManager) : RedManager).KEY.renwutabred_main]);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("keychange", this.updateRenwuKeyList, this); // observer.on("postupload", this.jietuUpload, this);

          this.node.on("postupload", this.jietuUpload);
          this.node.on(_crd && upLoadPostcard === void 0 ? (_reportPossibleCrUseOfupLoadPostcard({
            error: Error()
          }), upLoadPostcard) : upLoadPostcard, this.uploadPostCard);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("showcategg", this.showmaodanHandler, this);
          this.Label_tishi.node.on("scrolling-finished", this.finishHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on(_crd && shareTGPostCard === void 0 ? (_reportPossibleCrUseOfshareTGPostCard({
            error: Error()
          }), shareTGPostCard) : shareTGPostCard, this.createPostcardHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SHOW_CHAT_LOG_BUTTON, this.showChatLogButton, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SHOW_WORK_BUTTON, this.showWorkButton, this); //const guideInfo = GlobalConfig.instance.LoginData.data.player.guide
          // if(!guideInfo?.find(element => element === GuideIndex.START_GUIDE_STATE1.end)){
          //   //触发第1阶段引导
          //   observer.post(EventType.UPDATE_GUIDE_INFO_MAIN_VIEW, GuideIndex.START_GUIDE_STATE1)
          // }
        }

        showWorkButton() {
          this.btnWork.getComponent(Sprite).grayscale = false;
        }

        showChatLogButton() {
          //this.chatLog.active = true
          this.chatLog.getComponent(Sprite).grayscale = false;
        }
        /**
         * 设置任务tishi滚动效果
         * @param da 
         */


        taskchangeHandler(da) {
          var last = da.data.last;
          var cur = da.data.cur;

          if (last.status != 2 && cur.status == 2) {
            this.node_tasktishi.active = true;
            var sct = this.Label_tishi.getComponent(_crd && ScrollingText === void 0 ? (_reportPossibleCrUseOfScrollingText({
              error: Error()
            }), ScrollingText) : ScrollingText);
            var txt = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getconfigByGrpAId((_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
              error: Error()
            }), StaticConfigModel) : StaticConfigModel).TaskCfg, cur.taskId);

            if (txt) {
              sct.startScroll(txt.showmsg);
            }
          }
        }

        finishHandler() {
          this.node_tasktishi.active = false;
        }

        jietuUpload(info) {// WASManager.setConfig()
          // WASManager.uploadTextureToS3(info,'catoss', 'testWAS.png')
          // let da = {
          //   // playerId: GlobalConfig.instance.LoginData.playerId,
          //   playerId: 0,
          //   img: info
          // };
          // // console.log("this.base64Head::" + JSON.stringify(da));
          // AxiosManager.post("api/v1/upload", da, "", (response) => {
          //   // code: 200
          //   // data: "https://catoss.s3.ap-southeast-1.amazonaws.com/images/share/4681125022444560387.png"
          //   // errCode: 200
          //   // exception: null
          //   // msg: "业务处理成功"
          //   // success: true
          //   if (response.success == true) {
          //     // this.sucessfunc(response);
          //     showMsg2(modelMgr.configModel.getStrById(10017));//分享成功
          //   } else {
          //     showMsg2(response.msg);
          //   }
          // }, (err) => {
          //   showMsg2(err ? err.message : "请求异常");
          // })
        }

        sucessfunc(response) {
          // {
          //     "msg": "",
          //     "code": 0,
          //     "data": {},
          //     "success": false,
          //     "exception": "",
          //     "errCode": 0
          //   }
          (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
            error: Error()
          }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getStrById(10017)); //分享成功
        }

        updateRenwuKeyList(da) {
          if (da && da.data) {
            if (da.data == (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
              error: Error()
            }), RedManager) : RedManager).KEY.renwutabred) {
              var isred = (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
                error: Error()
              }), RedManager) : RedManager).instance.getKeyState((_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
                error: Error()
              }), RedManager) : RedManager).KEY.renwutabred);
              (_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
                error: Error()
              }), RedManager) : RedManager).instance.changeState((_crd && RedManager === void 0 ? (_reportPossibleCrUseOfRedManager({
                error: Error()
              }), RedManager) : RedManager).KEY.renwutabred_main, isred);
            }
          }
        }
        /**
         * 选择猫咪后，重新获取数据，重刷接口,
         */


        selectCatSerData() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.checkcatReq();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.checkplayerItems();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.tasklistReq(); //this.Label_maoname.string = GlobalConfig.instance.curCatData.name;
        } //================share url ================


        shareClickHandler() {
          // observer.post("shotstart");
          //链接分享
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.shareReq();
        }

        copyUrl(da) {
          var d = da.data;
          var url = "http://www.infinity.com/invite?from=4639553896547622914";

          if (d.data.url) {
            url = d.data.url;
          } //BoswerUtils.copystring(url);


          (_crd && BoswerUtils === void 0 ? (_reportPossibleCrUseOfBoswerUtils({
            error: Error()
          }), BoswerUtils) : BoswerUtils).webCopyString(url, () => {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10014));
          });
        } //=================================


        clickCaptureHandler() {
          this.node.getComponent(_crd && JietuComponent === void 0 ? (_reportPossibleCrUseOfJietuComponent({
            error: Error()
          }), JietuComponent) : JietuComponent).clickCaptureHandler();
        }

        createPostcardHandler() {
          this.node.getComponent(_crd && JietuComponent === void 0 ? (_reportPossibleCrUseOfJietuComponent({
            error: Error()
          }), JietuComponent) : JietuComponent).createPostcard();
        } //=======================================


        onLoad() {
          // assert(audioSource);
          // init AudioManager
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.init(this.audioSource);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.loadAndPlayRemoteAudio("https://catoss.s3.ap-southeast-1.amazonaws.com/background.mp3");

          if (localStorage.getItem(_crd && CurrentVoice === void 0 ? (_reportPossibleCrUseOfCurrentVoice({
            error: Error()
          }), CurrentVoice) : CurrentVoice)) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setSoundVolume(Number(localStorage.getItem(_crd && CurrentVoice === void 0 ? (_reportPossibleCrUseOfCurrentVoice({
              error: Error()
            }), CurrentVoice) : CurrentVoice)));
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setMusicVolume(Number(localStorage.getItem(_crd && CurrentVoice === void 0 ? (_reportPossibleCrUseOfCurrentVoice({
              error: Error()
            }), CurrentVoice) : CurrentVoice)));
          } // AudioManager.instance.loadAndPlayAudio("/audio/music/background");

        }

        onEnable() {
          var s = this;
        }

        onUpdate() {}

        update(dt) {
          this.particleAddTime = this.particleAddTime + dt;

          if (this.particleAddTime >= 1) {
            this.idleParticle.getComponent(ParticleSystem2D).resetSystem();

            if (this.particleAddTime >= 1) {
              this.particleAddTime = 0;
            }
          }

          var current_progress = this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress;

          if (current_progress <= (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentProgress) {
            this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress += dt / 25;
            this.progress_txt.string = "Working: " + Math.round(this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress * 100) + "%";
          } else {
            this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress = (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
              error: Error()
            }), WorkCatModel) : WorkCatModel).currentProgress;
            this.progress_txt.string = "Working: " + Math.round(this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress * 100) + "%";
          }

          if (this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress === 1) {
            this.post_button.active = true; //AudioManager.instance.playSound("new_progressOver");
          }
        }

        onDisable() {}
        /**
         * 
         */


        soundplayTest() {
          //
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("getMoney");
        }
        /**
         * 打开  商店/集市
         * 
         */


        openshangdian(evt) {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/jishi/pre_shangdian");
        }
        /**
        * 打开  图鉴
        * 
        */


        openTujian(evt) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.showLoading();
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_tujian");
        }
        /**去打工 */


        GoWork() {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'show GoWork');
        }
        /**快速逗猫 */


        PlayWithCat() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.play_with_cat.active = true;
          this.play_with_cat.getChildByName("bg").getChildByName("game").getComponent(_crd && ToyComponent === void 0 ? (_reportPossibleCrUseOfToyComponent({
            error: Error()
          }), ToyComponent) : ToyComponent).get_user_toys((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.playerItems);
        }

        openChatLog() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.chatLog.getComponent(Sprite).grayscale) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)('Unlocked after 3 conversations with your cat.');
            return;
          }

          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.showLoading();
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_gequlist");
        }

        openQiandao() {
          // uiMgr.popToParent("prefabs/pre_getcat");
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.btn_qiandao.active = false;
          this.clickParticle.getComponent(ParticleSystem2D).resetSystem();
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.qiandaoReq();
        }
        /**
         * 打开商店页面
         */


        openShopHomePage() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.showLoading();
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/shop_home_page");
        }
        /**
        * 打开商店页面
        */


        openWorkPage() {
          //ngm 账号名 [on\u003d1]
          // let json = new network.CmdRequest();
          // json.data.cmd = "additem 10101000 100"
          //json.data.cmd = "gm changshi25 1"
          //socket.sendWebSocketBinary(json);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.btnWork.getComponent(Sprite).grayscale) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)('Unlocked when ❤ ≥ 50 or 20 conversations with your cat');
            return;
          }

          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.showLoading();
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_cat_working"); // let json = new network.CreateCatWorkCatRequest();
          // json.data.catIds =[100001]
          // json.data.items = ["梯子", "刷子"]
          // socket.sendWebSocketBinary(json);
          // console.log(TAG, json)
        }

        showPostCard() {
          if ((_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentProgress >= 1 && this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress >= 1) {
            //LoadingController.ins.showLoading();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound("new_postcardOpen");
            this.postcardNode.active = true;
            this.controlWorkProgressAndButton(false);
            this.workProgress.getChildByName('ProgressBar').getComponent(ProgressBar).progress = 0;
          }
        }

        closePosCard() {
          this.post_button.active = false;
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_post_card");
        }

        controlWorkProgressAndButton(show) {
          this.workProgress.active = show;
          this.btnWork.getComponent(Button).interactable = !show;
          this.btnWork.getComponent(Sprite).grayscale = show;
        }

        receiveWorkStartMessage() {
          this.controlWorkProgressAndButton(true);
        }

        receiveWorkStateMessage(data) {
          this.controlWorkProgressAndButton(true);
          var workInfo = data.data;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentWorkId = workInfo.data[0].id;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentProgress = workInfo.data[0].progress;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentStory = workInfo.data[0].story;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).currentWorkResultImg = workInfo.data[0].img;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).state = workInfo.data[0].status;
          (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).finalEarn = workInfo.data[0].earning;
          this.postcardNode.getComponent(_crd && WorkPostCardShow === void 0 ? (_reportPossibleCrUseOfWorkPostCardShow({
            error: Error()
          }), WorkPostCardShow) : WorkPostCardShow).updateWorkInfo(); //更新workModel数据
          //当progress为1时设置可点击的动画和回掉
          //WorkCatModel.currentProgress
        }

        qiandaoRepHandler() {
          this.idleParticle.active = false;
          var itemType = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.qiandaoResp.data.itemType;
          var itemValue = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.qiandaoResp.data.itemValue; // let dropconfig = modelMgr.configModel.getConfigById(StaticConfigModel.DropsCfg, 50006);//签到掉落

          if (itemType == 1) {
            ///如果itemType是猫，value=猫ID，itemType积分，则value=积分
            (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
              error: Error()
            }), uiMgr) : uiMgr).popToParent("prefabs/pre_getcat");
          } else if (itemType == 2) {
            //获得金币--重复猫咪转金币
            var dropconfig = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getConfigById((_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
              error: Error()
            }), StaticConfigModel) : StaticConfigModel).DropsCfg, 50001); //签到掉落

            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)(dropconfig.showmsg);
          } else {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getStrById(10004));
          }
        }

        showCatSineNodeByMbit(mbti) {
          this.catSpineItemArr.forEach(Node => {
            if (Node.name === mbti) {
              Node.active = true;
              this.currentCatSpineNode = Node;
            } else {
              Node.active = false;
            }
          });
        }

        uploadPostCard(info) {// let da = {
          //   // playerId: GlobalConfig.instance.LoginData.playerId,
          //   playerId: 0,
          //   img: info
          // };
          // // console.log("this.base64Head::" + JSON.stringify(da));
          // AxiosManager.post("api/v1/upload", da, "", (response) => {
          //   // code: 200
          //   // data: "https://catoss.s3.ap-southeast-1.amazonaws.com/images/share/4681125022444560387.png"
          //   // errCode: 200
          //   // exception: null
          //   // msg: "业务处理成功"
          //   // success: true
          //   if (response.success == true) {
          //     // this.sucessfunc(response);
          //     showMsg2(modelMgr.configModel.getStrById(10017));//分享成功
          //   } else {
          //     showMsg2(response.msg);
          //   }
          // }, (err) => {
          //   showMsg2(err ? err.message : "请求异常");
          // })
        }
        /**猫咪收到动作信息抚摸、逗猫、聊天 */


        showCatAction(data) {
          var deepData = data.data ? data.data : data; ///动作

          if (deepData.type === (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
            error: Error()
          }), ActionType) : ActionType).TOY_PLAY) {
            if ((_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[deepData.toyId].nodeIndex === null) {
              return;
            }

            this.currentCatSpineNode.getChildByName((_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[deepData.toyId].nodeName).active = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[deepData.toyId].audio);
            this.currentCatSpineNode.getComponent(_crd && catSpineControl === void 0 ? (_reportPossibleCrUseOfcatSpineControl({
              error: Error()
            }), catSpineControl) : catSpineControl).playToySpineAniByID((_crd && ToysInfo === void 0 ? (_reportPossibleCrUseOfToysInfo({
              error: Error()
            }), ToysInfo) : ToysInfo)[deepData.toyId].nodeIndex); // this.Button_qiandao.active = false
            // loadRemoteSpineRes(ToySpineMap[deepData.toyId].atlas, ToySpineMap[deepData.toyId].json, ToySpineMap[deepData.toyId].img, this.toySke, null, () => {
            //   this.playToySpineAni(SpineName.action, true)
            //   this.scheduleOnce(() => {
            //     !modelMgr.mainModel.chatIsediting && (modelMgr.mainModel.hasActin = false)
            //     this.playCatSpineAni(SpineName.idle, true)
            //     deepData.type === ActionType.TOY_PLAY && (this.toySke.skeletonData = null)
            //     console.log(TAG, modelMgr.mainModel.hasActin)
            //   }, deepData.duringTime)
            // })
          } else {
            this.scheduleOnce(() => {
              this.playCatSpineAni((_crd && SpineName === void 0 ? (_reportPossibleCrUseOfSpineName({
                error: Error()
              }), SpineName) : SpineName).idle, true);
              deepData.type === (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).TOY_PLAY && (this.toySke.skeletonData = null);
            }, deepData.duringTime);
          }
        }
        /**
         * 展示领取猫蛋过程
         * @param da 
         */


        showmaodanHandler(da) {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_getcat");
        }
        /**
         * 
         * @param evt 
         */


        openGedan(evt) {
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).popToParent("prefabs/pre_gedanlist");
        }

        btncloseClick() {//退出游戏  
        }

        updateCatSerData() {}
        /**
         *     //修改猫咪
          */


        changeCatSerData(data) {
          var _data, _configModel$getCatDa;

          if (data === void 0) {
            data = null;
          }

          if (((_data = data) == null || (_data = _data.data) == null ? void 0 : _data.id) === (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId() && !(_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.firstIn) {
            return;
          }

          this.catSke.skeletonData = null;
          this.Sprite_mao.active = true;
          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();

          if (!catid) {
            return;
          } //this.Label_maoname.string = "" + catid;


          var mbti = (_configModel$getCatDa = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getCatDataById(catid)) == null ? void 0 : _configModel$getCatDa.mbti;
          mbti = mbti.toLowerCase();
          this.idleParticle.active = true; //WebUtils.getResouceImg(`catspic/${mbti}_zjm`, this.Sprite_mao);
          // if(!progressPos[mbti]){
          //   return
          // }

          this.showCatSineNodeByMbit(mbti); //const anchorX = progressPos[mbti].chatBubble.isReverse ? 0 : 1
          //this.chatBubbleRootNode.getComponent(UITransform).setAnchorPoint(anchorX, 0.75)
          // this.chatBubbleRootNode.setPosition(progressPos[mbti].chatBubble.x, progressPos[mbti].chatBubble.y)
          // this.chatBubbleRootNode.getChildByName('Node_qipao2').setPosition(progressPos[mbti].bubble.x, progressPos[mbti].bubble.y)
          // this.workProgress.setPosition(progressPos[mbti].progress.x, progressPos[mbti].progress.y)
          // this.Node_qipao.getChildByName('SpriteAngleReverse').active = progressPos[mbti].chatBubble.isReverse
          // this.Node_qipao.getChildByName('SpriteAngle').active = !progressPos[mbti].chatBubble.isReverse
          // const catSpineInfo = CatSpineMap[catid]
          // if(catSpineInfo?.atlas){
          //   loadRemoteSpineRes(catSpineInfo.atlas, catSpineInfo.json, catSpineInfo.img, this.catSke, this.Sprite_mao, ()=>{
          //     this.playCatSpineAni(SpineName.idle, true)
          //   })
          // }
        }

        playCatSpineAni(name, isLoop) {
          var _this$catSke;

          ((_this$catSke = this.catSke) == null ? void 0 : _this$catSke.skeletonData) && this.catSke.setAnimation(0, name, isLoop);
        }

        playToySpineAni(name, isLoop) {
          var _this$toySke;

          ((_this$toySke = this.toySke) == null ? void 0 : _this$toySke.skeletonData) && this.toySke.setAnimation(0, name, isLoop);
        }

        shareTg() {
          //AWSManager.setConfig();
          //AWSManager.instance.uploadTextureToS3('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABDCAYAAAB6IntqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgB7dw9axRBHAfg2cNGRTT4YUQsBCEoCGJhFVKJhY2FlaVgaWFjwEJLbWItCoqFIAG/SNqowSZezrzc/rPOzdzdhjRHngdyu7c3bzvZ/ZEMd9fsbG6MEsCeQQIYEwhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAEAhAOJM4MaPRaLw9eBxvD/cnNYePzdHzw/0mjo2OGvuv3lEdOFnVQPjw+Xv68u1H+r39Z+ICbMYH2hug+3x/v7Rty3VvmkFTuVU65dIJvF4bQ582a2XyuZhWt1UrWxxDoWgzqM9x3lZ32/Zdm4955qCmNA995/24/c/6HeR9tErzkgrn0H29dH7Trrfjmve6KpU9f+5sWr5+Jd1evpb6anY2NyZ6fPHqXXrybC0Bi+v500fp8cOVXnWKawgvX68nYLGtvVlPW7+2e9UpBsJwdzcBi+3vcJiGez99FAPh/sqdBCy2B6t30+Wli73qFNcQdvf+Qnj7/mP69HUjbf3cPlhU3F+viNXvwn6+9jHr9YmBdBYua22VtGXnXXnvlu+OLe+/NJ7uOc0zvnyeuuVr85G3ldcrtVtrr3t8WrulernS+PN+Zz1PlXHUyvVZl5vnGuz2WSqXjytvY1b/Nfl1VtpOa3PeOW2PL126kG7euJpW791Kg0G/dxYUAwE4nbwxCQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQgCAQi+dTl1P8juk+CcbgJBCEDwLwMQBAIQ/gGaBiP0MoDrKQAAAABJRU5ErkJggg==','catoss', 'test.png' );
          window.open('https://telegram.me/share/url?url=' + encodeURIComponent('https://catoss.s3.ap-southeast-1.amazonaws.com/images/share/4681125022444560385.png'), '_blank');
        }

        showCmdPartClickHandle() {
          if (this.testToolsPartNode) {
            this.testToolsPartNode.active = !this.testToolsPartNode.active;
          }
        }

        useCmdBtnClickHandle() {
          //ngm 账号名 [on\u003d1]
          if (this.testToolsPartNode) {
            var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).CmdRequest();
            json.data.cmd = this.cmdEditBox.string;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(json);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spritetest", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edituserdata", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_qiandao", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "catSpineItemArr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spr_selbg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_qipao", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_maoname", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_qiandao", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_mao", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_redpointA", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_tishi", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_tasktishi", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "play_with_cat", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "catSke", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "toySke", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "workProgress", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "btnWork", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "post_button", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "postcardNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "progress_txt", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "shareBtn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "idleParticle", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "clickParticle", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "mat", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "transitionNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "chatLog", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "useCmdBtn", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "testTools", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "cmdEditBox", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "testToolsPartNode", [_dec33], {
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
//# sourceMappingURL=83d6beae0343c7dc1aec602155632ec1841e88aa.js.map