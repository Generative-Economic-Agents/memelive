System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Label, Node, randomRangeInt, sp, Vec3, modelMgr, socket, uiMgr, WebUtils, showMsgWithMask, CatSpineMap, namePool, occupationPool, network, loadRemoteSpineRes, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, GetCatComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
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

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../../../game/config/DataStruct", _context.meta, extras);
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
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      socket = _unresolved_2.socket;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      WebUtils = _unresolved_3.default;
    }, function (_unresolved_4) {
      showMsgWithMask = _unresolved_4.showMsgWithMask;
    }, function (_unresolved_5) {
      CatSpineMap = _unresolved_5.CatSpineMap;
      namePool = _unresolved_5.namePool;
      occupationPool = _unresolved_5.occupationPool;
    }, function (_unresolved_6) {
      network = _unresolved_6.network;
    }, function (_unresolved_7) {
      loadRemoteSpineRes = _unresolved_7.loadRemoteSpineRes;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f385LiXmJE0pA7+qAiEDvA", "GetCatComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node', 'randomRangeInt', 'sp', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetCatComponent", GetCatComponent = (_dec = ccclass('GetCatComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(EditBox), _dec11 = property(Node), _dec12 = property(EditBox), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(sp.Skeleton), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec(_class = (_class2 = class GetCatComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "firstNode", _descriptor, this);

          _initializerDefineProperty(this, "secondNode", _descriptor2, this);

          _initializerDefineProperty(this, "Label_name", _descriptor3, this);

          _initializerDefineProperty(this, "Label_type", _descriptor4, this);

          _initializerDefineProperty(this, "Sprite_catpic", _descriptor5, this);

          _initializerDefineProperty(this, "nameSubmitBtn", _descriptor6, this);

          _initializerDefineProperty(this, "occupationSubmitBtn", _descriptor7, this);

          _initializerDefineProperty(this, "okButton", _descriptor8, this);

          _initializerDefineProperty(this, "nameEditBox", _descriptor9, this);

          _initializerDefineProperty(this, "nameBg", _descriptor10, this);

          _initializerDefineProperty(this, "occupationEditBox", _descriptor11, this);

          _initializerDefineProperty(this, "occupationBg", _descriptor12, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor13, this);

          _initializerDefineProperty(this, "occupationLabel", _descriptor14, this);

          _initializerDefineProperty(this, "catSke", _descriptor15, this);

          _initializerDefineProperty(this, "edit1Txt1", _descriptor16, this);

          _initializerDefineProperty(this, "edit1Txt2", _descriptor17, this);

          _initializerDefineProperty(this, "edit2Txt1", _descriptor18, this);

          _initializerDefineProperty(this, "edit2Txt2", _descriptor19, this);

          this.postion = {
            isfp: {
              x: 141,
              y: 423
            },
            entp: {
              x: 155,
              y: 341
            },
            intp: {
              x: 229,
              y: 35
            },
            intj: {
              x: 170,
              y: 372
            },
            esfp: {
              x: 152,
              y: 363
            },
            estj: {
              x: 181,
              y: 350
            },
            infj: {
              x: 181,
              y: 327
            },
            istp: {
              x: 109,
              y: 319
            },
            istj: {
              x: 144,
              y: 343
            },
            isfj: {
              x: 155,
              y: 319
            },
            estp: {
              x: 137,
              y: 392
            },
            esfj: {
              x: 131,
              y: 350
            },
            infp: {
              x: 147,
              y: 423
            },
            entj: {
              x: 192,
              y: 326
            },
            enfp: {
              x: 144,
              y: 350
            },
            enfj: {
              x: 99,
              y: 331
            }
          };
          this.currentName = '';
          this.currentOccupation = '';
          this.openCat = null;
        }

        //     estp 137 392
        // esfj 131 350
        // infp  147  423
        // entj  192 326
        // enfp 144 350
        // enfj  99 331
        start() {
          this.edit1Txt1.setPosition(0, 0);
          this.edit1Txt2.setPosition(0, 0);
          this.edit2Txt1.setPosition(0, 0);
          this.edit2Txt2.setPosition(0, 0);
          this.secondNode.active = false;
          this.firstNode.active = true;
          this.currentOccupation = (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool)[randomRangeInt(0, (_crd && occupationPool === void 0 ? (_reportPossibleCrUseOfoccupationPool({
            error: Error()
          }), occupationPool) : occupationPool).length)];
          this.setDefaultInfo();
        }

        update(deltaTime) {}

        setDefaultInfo() {
          var maodan = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.taskmaodan;

          if (!maodan) {
            maodan = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.qiandaoResp.data.itemValue;
          }

          var catMbitInfo = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getCatDataById(maodan); //获取新猫咪

          var cat = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(maodan); //获取新猫咪

          this.openCat = cat;

          if (cat) {
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
          }
        }
        /**
        * 
        */


        gotoSecondClickHandler() {
          this.firstNode.active = false;
          this.secondNode.active = true;
          this.getCatResponse();
        }
        /**
         * 刷新猫咪数据
         */


        getCatResponse() {
          var maodan = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.taskmaodan;

          if (!maodan) {
            maodan = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.qiandaoResp.data.itemValue;
          }

          var catMbitInfo = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getCatDataById(maodan); //获取新猫咪

          var cat = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getServerCatsData(maodan); //获取新猫咪

          this.openCat = cat;

          if (cat) {
            var _maodan;

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
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound("new_getCat");
            this.Label_name.string = "" + catMbitInfo.mbti; // this.Label_type.string = cat.mbti;

            this.Label_type.string = "" + cat.iq;
            var mbti = catMbitInfo.mbti.toLowerCase();
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg("catspic/" + mbti + "_zjm", this.Sprite_catpic);
            var pos = this.postion[mbti];

            if (pos) {
              this.Sprite_catpic.setPosition(new Vec3(pos.x, -pos.y));
            }

            if ((_maodan = (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
              error: Error()
            }), CatSpineMap) : CatSpineMap)[maodan]) != null && _maodan.json) {
              (_crd && loadRemoteSpineRes === void 0 ? (_reportPossibleCrUseOfloadRemoteSpineRes({
                error: Error()
              }), loadRemoteSpineRes) : loadRemoteSpineRes)((_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                error: Error()
              }), CatSpineMap) : CatSpineMap)[maodan].atlas, (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                error: Error()
              }), CatSpineMap) : CatSpineMap)[maodan].json, (_crd && CatSpineMap === void 0 ? (_reportPossibleCrUseOfCatSpineMap({
                error: Error()
              }), CatSpineMap) : CatSpineMap)[maodan].img, this.catSke, null, () => {
                this.catSke.setAnimation(0, 'idle', true);
                this.Sprite_catpic.active = false;
              });
            }
          }

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.qiandaoResp = null;
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.taskmaodan = 0;
        }

        submitName() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (!this.nameEditBox.string.length) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)('Please enter name');
            return;
          }

          this.currentName = this.nameEditBox.string;
          this.nameLabel.string = this.currentName;
          this.nameEditBox.node.active = false;
          this.nameBg.active = true;
          this.occupationEditBox.node.active = true;
          this.nameSubmitBtn.active = false;
          this.occupationSubmitBtn.active = true;
          this.edit2Txt1.setPosition(0, 0);
          this.edit2Txt2.setPosition(0, 0);
        }

        submitOccupation() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if (!this.nameEditBox.string.length) {
            (_crd && showMsgWithMask === void 0 ? (_reportPossibleCrUseOfshowMsgWithMask({
              error: Error()
            }), showMsgWithMask) : showMsgWithMask)('Please enter occupation');
            return;
          }

          this.currentOccupation = this.occupationEditBox.string;
          this.occupationLabel.string = this.currentOccupation;
          this.occupationEditBox.node.active = false;
          this.occupationBg.active = true;
          this.occupationSubmitBtn.active = false;
          this.okButton.active = true;
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

        closeself() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).changeCatInfoRequest();
          json.data.catId = this.openCat.id;
          json.data.name = this.currentName;
          json.data.userName = this.openCat.userName;
          json.data.career = this.currentOccupation;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_getcat");
        }

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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_catpic", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nameSubmitBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "occupationSubmitBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "okButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nameEditBox", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nameBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "occupationEditBox", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "occupationBg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "occupationLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "catSke", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "edit1Txt1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "edit1Txt2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "edit2Txt1", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "edit2Txt2", [_dec20], {
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
//# sourceMappingURL=646159350905cc84e5084dc7eeabe29370733003.js.map