System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, modelMgr, observer, uiMgr, ListViewCtrl4, GlobalConfig, EventType, LoadingController, AudioManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ChatlogListComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiMgr(extras) {
    _reporterNs.report("uiMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewCtrl(extras) {
    _reporterNs.report("ListViewCtrl4", "../../../game/components/listViewCtrl4", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../../../game/config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../../../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchatcell(extras) {
    _reporterNs.report("chatcell", "../../../game/config/DataStruct", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../../game/components/LoadingController", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
      uiMgr = _unresolved_2.uiMgr;
    }, function (_unresolved_3) {
      ListViewCtrl4 = _unresolved_3.ListViewCtrl4;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
    }, function (_unresolved_5) {
      EventType = _unresolved_5.EventType;
    }, function (_unresolved_6) {
      LoadingController = _unresolved_6.LoadingController;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81424itCO5PT4D1HY/+s6hz", "ChatlogListComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Input', 'log', 'Node', 'sys', 'SystemEvent', 'systemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChatlogListComponent", ChatlogListComponent = (_dec = ccclass('ChatlogListComponent'), _dec2 = property(Node), _dec(_class = (_class2 = class ChatlogListComponent extends Component {
        constructor() {
          super(...arguments);
          this.curpage = 1;

          _initializerDefineProperty(this, "listctrl", _descriptor, this);

          this._totalChat = [];
          this._lastChat = -1;
        }

        start() {
          this.curpage = 1;
          this._totalChat = [];
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading();
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHATLIST, this.updateChatlist, this); // this.listctrl.on('scrollended', this.onMyEvent, this);

          this.getAllData();
        }

        getAllData() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.chatlistReq((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.getCurCatId(), this.curpage);
        } // onMyEvent(data: any) {
        //     if(this._lastChat>-1){//最后一页页码
        //         return;
        //     };
        //     if(this._lastChat==10){//最大页
        //         return;
        //     }
        //     this.curpage++;
        //     modelMgr.mainModel.chatlistReq(GlobalConfig.instance.getCurCatId(), this.curpage);
        // }


        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_CHATLIST, this.updateChatlist, this);
        }

        update(deltaTime) {}

        updateChatlist(da) {
          var data = da.data;
          var arr = data.data.chats.reverse(); // let arr = data.data.chats;//bottom_to_top

          this._totalChat.unshift(...arr);

          if (this.curpage < data.data.totalPage) {
            this.curpage++;
            this.getAllData();
          } else if (this.curpage >= data.data.totalPage) {
            this.listctrl.getComponent(_crd && ListViewCtrl4 === void 0 ? (_reportPossibleCrUseOfListViewCtrl({
              error: Error()
            }), ListViewCtrl4) : ListViewCtrl4).initData(this._totalChat);
          }
        }

        shareClickHandler() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).post("shotstart"); // modelMgr.mainModel.shareReq();
        } // private copyUrl(da: any) {
        //     let d: network.shareResponse = da.data;
        //     let url = "http://www.infinity.com/invite?from=4639553896547622914";
        //     if (d.data.url) {
        //         url = d.data.url;
        //     }
        //     BoswerUtils.copystring(url);
        // }


        closeSelf() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound("new_NormanBtn");
          (_crd && uiMgr === void 0 ? (_reportPossibleCrUseOfuiMgr({
            error: Error()
          }), uiMgr) : uiMgr).removeParent("prefabs/pre_gequlist");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listctrl", [_dec2], {
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
//# sourceMappingURL=8b0e42fbc36962bd5720f3dbf457641c8a238b5e.js.map