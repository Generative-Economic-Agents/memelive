System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, EditBox, Label, Node, randomRangeInt, sp, Vec3, modelMgr, observer, socket, uiMgr, GlobalConfig, network, EventType, WebUtils, showMsgWithMask, CatSpineMap, namePool, occupationPool, loadRemoteSpineRes, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _crd, ccclass, property, LetterViewComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowMsgWithMask(extras) {
    _reporterNs.report("showMsgWithMask", "../../../core/message/MaskToastManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatSpineMap(extras) {
    _reporterNs.report("CatSpineMap", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnamePool(extras) {
    _reporterNs.report("namePool", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoccupationPool(extras) {
    _reporterNs.report("occupationPool", "../../../model/StaticTextConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadRemoteSpineRes(extras) {
    _reporterNs.report("loadRemoteSpineRes", "../../../utils/loadSpineData", _context.meta, extras);
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
      Animation = _cc.Animation;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      socket = _unresolved_2.socket;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }, function (_unresolved_4) {
      network = _unresolved_4.network;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      WebUtils = _unresolved_6.default;
    }, function (_unresolved_7) {
      showMsgWithMask = _unresolved_7.showMsgWithMask;
    }, function (_unresolved_8) {
      CatSpineMap = _unresolved_8.CatSpineMap;
      namePool = _unresolved_8.namePool;
      occupationPool = _unresolved_8.occupationPool;
    }, function (_unresolved_9) {
      loadRemoteSpineRes = _unresolved_9.loadRemoteSpineRes;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55770MV+6BD35FmQvDpCQmd", "LetterViewComponent", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'director', 'EditBox', 'Label', 'Node', 'randomRangeInt', 'sp', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LetterViewComponent", LetterViewComponent = (_dec = ccclass('LetterViewComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(EditBox), _dec14 = property(Node), _dec15 = property(EditBox), _dec16 = property(Node), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(sp.Skeleton), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec(_class = (_class2 = class LetterViewComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "firstNode", _descriptor, this);

          _initializerDefineProperty(this, "secondNode", _descriptor2, this);

          _initializerDefineProperty(this, "Sprite_catpic", _descriptor3, this);

          _initializerDefineProperty(this, "refuseview", _descriptor4, this);

          _initializerDefineProperty(this, "acceptview", _descriptor5, this);

          _initializerDefineProperty(this, "givenametview", _descriptor6, this);

          _initializerDefineProperty(this, "Label_name", _descriptor7, this);

          _initializerDefineProperty(this, "Label_type", _descriptor8, this);

          _initializerDefineProperty(this, "submitBtn", _descriptor9, this);

          _initializerDefineProperty(this, "nameOkBtn", _descriptor10, this);

          _initializerDefineProperty(this, "occupationOkBtn", _descriptor11, this);

          _initializerDefineProperty(this, "nameEditBox", _descriptor12, this);

          _initializerDefineProperty(this, "nameBg", _descriptor13, this);

          _initializerDefineProperty(this, "occupationEditBox", _descriptor14, this);

          _initializerDefineProperty(this, "occupationBg", _descriptor15, this);

          _initializerDefineProperty(this, "txtNameLabel", _descriptor16, this);

          _initializerDefineProperty(this, "txtOccupationLabel", _descriptor17, this);

          _initializerDefineProperty(this, "catSke", _descriptor18, this);

          _initializerDefineProperty(this, "edit1Txt1", _descriptor19, this);

          _initializerDefineProperty(this, "edit1Txt2", _descriptor20, this);

          _initializerDefineProperty(this, "edit2Txt1", _descriptor21, this);

          _initializerDefineProperty(this, "edit2Txt2", _descriptor22, this);

          this.currentName = '';
          this.currentOccupation = '';
          this.catId = 0;
          this._selDa = void 0;
          this._catid = [100004, 100015, 100008];
          this._curSelect = 0;
        }

        // @property(Node)
        // public inputnametview: Node = null;
        start() {
          this.edit1Txt1.setPosition(0, 0);
          this.edit1Txt2.setPosition(0, 0);
          this.edit2Txt1.setPosition(0, 0);
          this.edit2Txt2.setPosition(0, 0);
          this.secondNode.active = this.refuseview.active = this.acceptview.active = this.givenametview.active = false;
          this.firstNode.active = true;
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONMESSAGE, this.hasSelect, this);
          this.currentOccupation = (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool)[randomRangeInt(0, (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool).length)]; // this.acceptview.active = true;
        }

        onEnable() {}

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONMESSAGE, this.hasSelect, this);
        }
        /**
         * 
         */


        gotoSecondClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.firstNode.active = false;
          this.secondNode.active = true;
        }

        refuseLetterClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.secondNode.active = false;
          this.refuseview.active = true;
        }

        btn_refuse_backClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.secondNode.active = true;
          this.refuseview.active = false;
        }

        acceptLetterClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.secondNode.active = false;
          this.acceptview.active = true;
        }
        /**
         * 确定猫咪
         */


        acceptOkClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (this._curSelect != 0) {
            var da = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).SelectCatRequst();
            da.data.catId = this._curSelect;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(da);
            (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.firstIn = true;
          }
        }

        hasSelect(da) {
          var data = da.data;
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.haSelect = true;

          if (data && data.command == 10007 && data.code == 0) {
            this._selDa = data;
            this.catId = data.data.cat.id;
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.LoginData.data.player.catId = this._curSelect; //前端填充；

            this.acceptview.active = false;
            this.givenametview.active = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound("new_getCat");
            var cat = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getCatDataById(this._curSelect);

            if (cat) {
              var _this$catId;

              var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                error: Error()
              }), network) : network).changeCatInfoRequest();
              json.data.catId = cat.id;
              json.data.name = cat.name;
              json.data.userName = 'Human';
              json.data.career = this.currentOccupation;
              (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                error: Error()
              }), socket) : socket).sendWebSocketBinary(json);
              this.Label_name.string = "" + cat.mbti; // this.Label_type.string = cat.mbti;

              this.Label_type.string = "" + String(data.data.cat.iq);
              var mbti = cat.mbti.toLowerCase();

              if (mbti == "entj") {
                this.Sprite_catpic.setPosition(new Vec3(0, 59));
              } else if (mbti == "istp") {
                this.Sprite_catpic.setPosition(new Vec3(0, 128));
              }

              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("letter/" + mbti + "_sel", this.Sprite_catpic);

              if ((_this$catId = (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                error: Error()
              }), CatSpineMap) : CatSpineMap)[this.catId]) != null && _this$catId.json) {
                (_crd && loadRemoteSpineRes === void 0 ? (_reportPossibleCrUseOfloadRemoteSpineRes({
                  error: Error()
                }), loadRemoteSpineRes) : loadRemoteSpineRes)((_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                  error: Error()
                }), CatSpineMap) : CatSpineMap)[this.catId].atlas, (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                  error: Error()
                }), CatSpineMap) : CatSpineMap)[this.catId].json, (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                  error: Error()
                }), CatSpineMap) : CatSpineMap)[this.catId].img, this.catSke, null, () => {
                  this.catSke.setAnimation(0, 'idle', true);
                  this.Sprite_catpic.active = false;
                });
              }
            }
          }
        }

        submitName() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (!this.nameEditBox.string.length) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("please enter name");
            return;
          }

          this.currentName = this.nameEditBox.string;
          this.txtNameLabel.string = this.currentName;
          this.nameEditBox.node.active = false;
          this.nameBg.active = true;
          this.occupationEditBox.node.active = true;
          this.nameOkBtn.active = false;
          this.occupationOkBtn.active = true;
          this.edit2Txt1.setPosition(0, 0);
          this.edit2Txt2.setPosition(0, 0);
        }

        submitOccupation() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (!this.occupationEditBox.string.length) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)("please enter occupation");
            return;
          }

          this.currentOccupation = this.occupationEditBox.string;
          this.txtOccupationLabel.string = this.currentOccupation;
          this.occupationEditBox.node.active = false;
          this.txtOccupationLabel.node.getParent().active = true;
          this.occupationOkBtn.active = false;
          this.submitBtn.active = true;
        }

        getRandomName() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.nameEditBox.string = (_crd && namePool === void 0 ? (_reportPossibleCrUseOfnamePool({
            error: Error()
          }), namePool) : namePool)[randomRangeInt(0, (_crd && namePool === void 0 ? (_reportPossibleCrUseOfnamePool({
            error: Error()
          }), namePool) : namePool).length)];
        }

        getRandomOccupation() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          this.occupationEditBox.string = (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool)[randomRangeInt(0, (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool).length)];
        }

        gomainviewClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn"); //修改猫的信息

          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).changeCatInfoRequest();
          json.data.catId = this._selDa.data.cat.id;
          json.data.name = this.currentName;
          json.data.userName = 'Human';
          json.data.career = this.currentOccupation;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
          this.givenametview.active = false;
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_letterview");
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post("hideselbg");
        }

        playEggSelectHandler(evt, ind) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_eggBreak");

          for (var index = 0; index <= 2; index++) {
            var egg = this.acceptview.getChildByName("egg" + (index + 1));

            if (ind == index + 1) {
              this._curSelect = this._catid[index];
              egg.getComponent(Animation).play("eggdoudong");
            } else {
              egg.getComponent(Animation).play("eggdoudong2");
            }
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "secondNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_catpic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "refuseview", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "acceptview", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "givenametview", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_type", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "submitBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nameOkBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "occupationOkBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nameEditBox", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nameBg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "occupationEditBox", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "occupationBg", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txtNameLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txtOccupationLabel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "catSke", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "edit1Txt1", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "edit1Txt2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "edit2Txt1", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "edit2Txt2", [_dec23], {
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
//# sourceMappingURL=a6f2fb408d5c253d63eda70cf02b173ea407c7af.js.map