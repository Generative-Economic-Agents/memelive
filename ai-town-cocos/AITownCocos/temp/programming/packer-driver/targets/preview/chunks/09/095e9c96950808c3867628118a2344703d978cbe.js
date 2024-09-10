System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Label, Node, Animation, Button, Slider, Toggle, RichText, GlobalConfig, modelMgr, observer, WebUtils, LoadingController, EventType, showMsg2, AudioManager, termsTxt, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, CurrentVoice, MxpComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftermsTxt(extras) {
    _reporterNs.report("termsTxt", "../../model/StaticTextConfig", _context.meta, extras);
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
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Button = _cc.Button;
      Slider = _cc.Slider;
      Toggle = _cc.Toggle;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      GlobalConfig = _unresolved_2.GlobalConfig;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      WebUtils = _unresolved_4.default;
    }, function (_unresolved_5) {
      LoadingController = _unresolved_5.LoadingController;
    }, function (_unresolved_6) {
      EventType = _unresolved_6.EventType;
    }, function (_unresolved_7) {
      showMsg2 = _unresolved_7.showMsg2;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }, function (_unresolved_9) {
      termsTxt = _unresolved_9.termsTxt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a217l/kedJTbNqWSckqmev", "MxpComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node', 'Animation', 'Button', 'Touch', 'Event', 'SystemEvent', 'Slider', 'System', 'sys', 'Toggle', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CurrentVoice", CurrentVoice = 'CurrentVoice');

      _export("MxpComponent", MxpComponent = (_dec = ccclass('MxpComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(EditBox), _dec10 = property(Button), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Slider), _dec18 = property(Toggle), _dec19 = property(Label), _dec20 = property(RichText), _dec21 = property(Node), _dec(_class = (_class2 = class MxpComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Label_bir", _descriptor, this);

          _initializerDefineProperty(this, "Label_pri", _descriptor2, this);

          _initializerDefineProperty(this, "Label_name", _descriptor3, this);

          _initializerDefineProperty(this, "sprite_mxp", _descriptor4, this);

          _initializerDefineProperty(this, "Sprite_pass", _descriptor5, this);

          _initializerDefineProperty(this, "sprite_passtop", _descriptor6, this);

          _initializerDefineProperty(this, "Node_edit", _descriptor7, this);

          _initializerDefineProperty(this, "edit", _descriptor8, this);

          _initializerDefineProperty(this, "notice", _descriptor9, this);

          _initializerDefineProperty(this, "tips", _descriptor10, this);

          _initializerDefineProperty(this, "Label_earnRate", _descriptor11, this);

          _initializerDefineProperty(this, "Label_IQ", _descriptor12, this);

          _initializerDefineProperty(this, "occupation", _descriptor13, this);

          _initializerDefineProperty(this, "voiceControl", _descriptor14, this);

          _initializerDefineProperty(this, "showBar", _descriptor15, this);

          _initializerDefineProperty(this, "slider", _descriptor16, this);

          _initializerDefineProperty(this, "Toggle", _descriptor17, this);

          _initializerDefineProperty(this, "term", _descriptor18, this);

          _initializerDefineProperty(this, "termPageIndex", _descriptor19, this);

          this.index = 1;
          this.final = 4;

          _initializerDefineProperty(this, "termAll", _descriptor20, this);

          this._edittype = void 0;
        }

        start() {
          if (localStorage.getItem(CurrentVoice)) {
            this.slider.progress = Number(localStorage.getItem(CurrentVoice));

            if (this.slider.progress <= 0) {
              this.Toggle.isChecked = true;
            } else {
              this.Toggle.isChecked = false;
            }

            this.showBar.setScale(this.slider.progress, 1);
          }

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATSDATA, this.freshinfo, this); // this.notice.node.on(SystemEvent.EventType.TOUCH_START, ()=>{
          //     this.tips.active = true
          // })
          // this.notice.node.on(SystemEvent.EventType.TOUCH_END, ()=>{
          //     this.tips.active = false
          // })

          this.termPageIndex.string = "<color=#B3C3B7>" + this.index + "</color> / <color=#290202>" + this.final + "</color>";
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATSDATA, this.freshinfo, this);
        }

        onEnable() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading();
          this.freshinfo();
        }

        showTips() {
          this.tips.active = true;
          this.scheduleOnce(() => {
            this.tips.active = false;
          }, 5);
        }

        setPageAdd() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.index + 1 > 4) {
            return;
          }

          this.index = this.index + 1;
          this.term.string = (_crd && termsTxt === void 0 ? (_reportPossibleCrUseOftermsTxt({
            error: Error()
          }), termsTxt) : termsTxt)[this.index - 1];
          this.termPageIndex.string = "<color=#B3C3B7>" + this.index + "</color> / <color=#290202>" + this.final + "</color>";
        }

        setPageSlice() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.index - 1 < 1) {
            return;
          }

          this.index = this.index - 1;
          this.term.string = (_crd && termsTxt === void 0 ? (_reportPossibleCrUseOftermsTxt({
            error: Error()
          }), termsTxt) : termsTxt)[this.index - 1];
          this.termPageIndex.string = "<color=#B3C3B7>" + this.index + "</color> / <color=#290202>" + this.final + "</color>";
        }

        showTerm() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.termAll.active = true;
        }

        hideTerm() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.termAll.active = false;
        } // checkVoiceClose(toggle: Toggle){
        //     this.slider.progress = 0
        //     this.showBar.setScale(0, 1)
        //     AudioManager.instance.setSoundVolume(0)
        //     AudioManager.instance.setMusicVolume(0)
        // }


        clickStopVoice() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this.slider.progress <= 0 && this.Toggle.isChecked) {
            this.showBar.setScale(1, 1);
            this.slider.progress = 1; //

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setSoundVolume(1);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setMusicVolume(1);
            localStorage.setItem(CurrentVoice, String(this.slider.progress));
          } else {
            this.slider.progress = 0;
            this.showBar.setScale(0, 1);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setSoundVolume(0);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setMusicVolume(0);
            localStorage.setItem(CurrentVoice, String(this.slider.progress));
          }
        }

        setSliderBySliderValue(event) {
          if (event === void 0) {
            event = null;
          }

          this.showBar.setScale(event.progress, 1); //

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.setSoundVolume(event.progress);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.setMusicVolume(event.progress);
          localStorage.setItem(CurrentVoice, String(event.progress));

          if (this.slider.progress <= 0) {
            this.Toggle.isChecked = true;
          } else {
            this.Toggle.isChecked = false;
          }
        }

        showVoiceControl() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.voiceControl.active = true;
        }

        hideVoiceControl() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.voiceControl.active = false;
        }
        /**
         * 
         */


        maxAnimationPlay() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("maodemax");
          this.Sprite_pass.getComponent(Animation).play("gaizhang");
        }

        freshinfo() {
          var _configModel$getCatDa;

          this.resetEdit();
          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();
          var cat = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(catid);
          var mbti = (_configModel$getCatDa = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getCatDataById(catid)) == null ? void 0 : _configModel$getCatDa.mbti;
          this.Label_IQ.string = "" + cat.iq;
          this.Label_earnRate.string = "" + cat.rate.toFixed(2);
          this.Label_name.string = cat.name;
          this.Label_bir.string = "" + mbti;
          this.occupation.string = "" + cat.career ? cat.career : "teacher"; // this.Label_bir.string = "" + BoswerUtils.parseTime(cat.birthday, "{y}-{m}-{d}");

          this.Label_pri.string = cat.userName;

          if (cat.cv >= 100) {
            this.Sprite_pass.active = true;
            this.sprite_passtop.active = true;
            this.maxAnimationPlay();
          } else {
            this.Sprite_pass.active = false;
            this.sprite_passtop.active = false;
          }

          mbti = mbti.toLowerCase();
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg("mingxinpian/" + mbti + "_mxp", this.sprite_mxp);
        }

        update(deltaTime) {}
        /**
         * 修改猫咪信息；
         */


        changeInfoOKClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (!this.edit.string) {
            (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
              error: Error()
            }), showMsg2) : showMsg2)("invalid input");
            return;
          }

          var catid = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId();

          if (this._edittype == "name") {
            if (this.Label_name.string == this.edit.string) {
              this.resetEdit();
              return;
            }

            this.Label_name.string = this.edit.string;
          } else if (this._edittype == "user") {
            if (this.Label_pri.string == this.edit.string) {
              this.resetEdit();
              return;
            }

            this.Label_pri.string = this.edit.string;
          }

          var name = this.Label_name.string;
          var username = this.Label_pri.string;
          var career = this.occupation.string;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.changecatInfoReq(catid, name, username, career);
        }

        resetEdit() {
          this.Node_edit.active = false;
          this.edit.string = "";
        }

        openChgHandler(evt, data) {
          this.Node_edit.active = true;
          this._edittype = data;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_bir", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_pri", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprite_mxp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_pass", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprite_passtop", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_edit", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "edit", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "notice", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_earnRate", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_IQ", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "occupation", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "voiceControl", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "showBar", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Toggle", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "term", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "termPageIndex", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "termAll", [_dec21], {
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
//# sourceMappingURL=095e9c96950808c3867628118a2344703d978cbe.js.map