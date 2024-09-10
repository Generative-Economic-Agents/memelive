System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, WebUtils, modelMgr, observer, socket, uiMgr, GlobalConfig, showMsg2, network, EventType, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PetsItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfshowMsg(extras) {
    _reporterNs.report("showMsg2", "../../../core/message/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcatServerD(extras) {
    _reporterNs.report("catServerD", "../../../game/config/DataStruct", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
      socket = _unresolved_3.socket;
      uiMgr = _unresolved_3.uiMgr;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
    }, function (_unresolved_5) {
      showMsg2 = _unresolved_5.showMsg2;
    }, function (_unresolved_6) {
      network = _unresolved_6.network;
    }, function (_unresolved_7) {
      EventType = _unresolved_7.EventType;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e3cfsYOq9CTKWtpXgc9akC", "PetsItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PetsItem", PetsItem = (_dec = ccclass('PetsItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec(_class = (_class2 = class PetsItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itempic", _descriptor, this);

          _initializerDefineProperty(this, "Label_name", _descriptor2, this);

          _initializerDefineProperty(this, "sprite_name", _descriptor3, this);

          _initializerDefineProperty(this, "Sprite_select", _descriptor4, this);

          this._da = void 0;
          this._servda = void 0;
          this._clickNum = 0;
        }

        start() {
          this.node.on("update_data", this.updateData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.updateSerData, this);
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off("update_data", this.updateData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHANGE_CATS, this.updateSerData, this);
        }

        updateSerData() {
          (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
            error: Error()
          }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.getStrById(10007)); //this.updateData(this._da);

          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_tujian");
        }
        /**
        * 视图更新
        * @param da 
        */


        updateData(da) {
          this._da = da;

          if (this._da) {
            var CurCatId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.getCurCatId();

            if (CurCatId == Number(this._da.id)) {
              this.Sprite_select.node.active = true;
            } else {
              this.Sprite_select.node.active = false;
            }

            this._servda = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getServerCatsData(this._da.id);
            this.Label_name.string = this._da.name;
            this.node.active = true;

            if (!this._servda) {// console.warn("没有图片:", this._da);
              //显示未获得图片
            } else {
              var mbti = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getCatDataById(this._da.id).mbti;
              mbti = mbti.toLowerCase();
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("tujian/" + mbti + "_tj", this.itempic);
            }
          }
        }
        /**
         * 切换猫咪
         * @param evt 
         * @param da 
         * @returns 
         */


        clickHandler(evt, da) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.catRootNode.scale.x > 0) {
            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x < -450 || (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x > 40) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)('Wait for your cat to return!');
              return;
            }
          } else {
            if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x < -40 || (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.catRootNode.position.x > 450) {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)('Wait for your cat to return!');
              return;
            }
          }

          if (this._da) {
            var CurCatId = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.getCurCatId();

            if (CurCatId == Number(this._da.id)) {
              // showMsg2("当前猫咪已选择");
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getStrById(10006));
              return;
            } else if (this._servda) {
              var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
                error: Error()
              }), network) : network).ChangeCatsRequest();
              json.data.catId = this._da.id;
              (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
                error: Error()
              }), socket) : socket).sendWebSocketBinary(json);
              (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig).instance.setCurCatId(this._da.id); // this.updateData(this._da);
            } else {
              (_crd && showMsg2 === void 0 ? (_reportPossibleCrUseOfshowMsg({
                error: Error()
              }), showMsg2) : showMsg2)((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
                error: Error()
              }), modelMgr) : modelMgr).configModel.getStrById(10008)); //还未获得此猫咪
            }
          }
        }

        /**
         * 获取猫咪-debug
         */
        getCatTestHandler() {
          this._clickNum++;

          if (this._da && this._clickNum % 9 == 0) {
            var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
              error: Error()
            }), network) : network).SelectCatRequst();
            json.data.catId = this._da.id;
            (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
              error: Error()
            }), socket) : socket).sendWebSocketBinary(json);
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.setCurCatId(this._da.id); // this.updateData(this._da);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itempic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprite_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_select", [_dec5], {
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
//# sourceMappingURL=8d08db6d20365dda9424f0ff7a5679e3e07e4dd0.js.map