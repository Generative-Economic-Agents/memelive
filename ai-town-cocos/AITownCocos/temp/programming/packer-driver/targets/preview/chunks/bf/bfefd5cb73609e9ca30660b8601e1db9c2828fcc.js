System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, WebUtils, Log, observer, EventType, loginModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TAG, RolePartListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginModel(extras) {
    _reporterNs.report("loginModel", "../model/loginModel", _context.meta, extras);
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
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      Log = _unresolved_3.default;
    }, function (_unresolved_4) {
      observer = _unresolved_4.observer;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      loginModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fafbI3xlZIlZXtsvNFSrAS", "RolePartListItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'RolePartListItem';

      _export("RolePartListItem", RolePartListItem = (_dec = ccclass('RolePartListItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class RolePartListItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "on", _descriptor, this);

          _initializerDefineProperty(this, "off", _descriptor2, this);

          _initializerDefineProperty(this, "icon", _descriptor3, this);

          _initializerDefineProperty(this, "npc", _descriptor4, this);

          _initializerDefineProperty(this, "townNPCPlayer", _descriptor5, this);

          this._da = void 0;
        }

        start() {
          this.node.on("update_data", this.updateData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_ROLE_PART_SELECT, this.refreshRolePart, this);
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off("update_data", this.updateData, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_ONOPEN, this.refreshRolePart, this);
        }
        /**
        * 视图更新
        * @param da 
        */


        updateData(da) {
          this._da = da;
          this.node.setScale(1, 1);

          if (this._da) {
            this.icon.active = true;
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(da.icon_path, this.icon);

            if (da.icon_path === (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
              error: Error()
            }), loginModel) : loginModel).currentType.iconValue) {
              this.on.active = true;
            }

            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, da, _crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
              error: Error()
            }), loginModel) : loginModel);
          }
        }
        /**
         * 切换购买道具
         * @param evt 
         * @param da 
         * @returns 
         */


        clickHandler(evt, da) {// AudioManager.instance.playSound("new_NormanBtn");
          // if (this._da) {
          //     this.buy_page.active = true
          //     this.buy_page.getComponent(ShopPurchaseComponent).setItemData(this._da)
          // }
          // Log.log(TAG, 'click', this._da)
        }

        refreshRolePart() {
          this.on.active = false;
        }

        clickSelect() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).CHANGE_ROLE_PART_SELECT);
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentType.id = this._da.id;
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentType.iconValue = this._da.icon_path;
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentType.roleValue = this._da.frame_path;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg(this._da.frame_path, this.npc.getChildByName((_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentName));
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg(this._da.frame_path, this.townNPCPlayer.getChildByName((_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentName));
          this.on.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "on", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "off", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "npc", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "townNPCPlayer", [_dec6], {
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
//# sourceMappingURL=bfefd5cb73609e9ca30660b8601e1db9c2828fcc.js.map