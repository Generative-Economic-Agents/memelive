System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, log, Sprite, modelMgr, observer, WebUtils, EventType, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RenwuListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../../../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      log = _cc.log;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
    }, function (_unresolved_3) {
      WebUtils = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eaf7ewr1z9Kr5RrJUyOyxpd", "RenwuListItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'log', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RenwuListItem", RenwuListItem = (_dec = ccclass('RenwuListItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec(_class = (_class2 = class RenwuListItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Sprite_icon", _descriptor, this);

          _initializerDefineProperty(this, "Sprite_icon0", _descriptor2, this);

          _initializerDefineProperty(this, "label_content", _descriptor3, this);

          _initializerDefineProperty(this, "label_jinbinum", _descriptor4, this);

          _initializerDefineProperty(this, "Button_state", _descriptor5, this);

          this._data = void 0;
        }

        start() {
          this.node.on("setdata", this.setData, this); // this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_TASK_GET, this.freshStateHandler, this);
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_TASK_GET, this.freshStateHandler, this);
          this.node.off("setdata", this.setData, this);
        }
        /**
         * 更新数据
         */


        setData(data) {
          this._data = data;

          if (this._data) {
            var drop = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).configModel.getDropConfigById(this._data.taskReward);
            this.label_content.string = data.describe;
            var str = drop.itemWeight[0];
            var rewardnum = str.split("|")[1];

            if (Number(rewardnum) >= 100) {
              this.Sprite_icon0.node.active = true;
            } else {
              this.Sprite_icon0.node.active = false;
            }

            this.label_jinbinum.string = rewardnum;
            this.freshStateHandler();
          }
        }

        freshStateHandler() {
          if (this._data) {
            var sertask = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getTaskserById(this._data.id);

            if (!sertask) {
              log("sertask null：" + this._data.id);
              return;
            }

            if (sertask.status == 0 || sertask.status == 1) {
              this.Button_state.grayscale = true;
              this.Button_state.node.getComponent(Button).interactable = false;
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("tujian/tujian2_12", this.Button_state.node);
            } else if (sertask.status == 2) {
              this.Button_state.grayscale = false;
              this.Button_state.node.getComponent(Button).interactable = true;
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("tujian/tujian2_12", this.Button_state.node);
            } else if (sertask.status == 3) {
              this.Button_state.grayscale = true;
              this.Button_state.node.getComponent(Button).interactable = false;
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg("tujian/tujian2_1", this.Button_state.node);
            }

            switch (this._data.id) {
              case 10003:
              case 10005:
              case 30001:
                (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                  error: Error()
                }), WebUtils) : WebUtils).getResouceImg("tujian/tujian2_13", this.Sprite_icon.node);
                this.label_jinbinum.node.active = false;
                break;

              default:
                (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                  error: Error()
                }), WebUtils) : WebUtils).getResouceImg("tujian/maobi2", this.Sprite_icon.node);
                this.label_jinbinum.node.active = true;
                break;
            }
          }
        }

        buttonClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.taskgetReq(this._data.id);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_icon0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label_content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label_jinbinum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_state", [_dec6], {
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
//# sourceMappingURL=7021f94b517e13616f239c9d65dd2ef3e235cfdb.js.map