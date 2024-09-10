System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ListViewCtrl2, observer, EventType, LoadingController, Log, NPCPartDisplayInfo, loginModel, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TAG, rolePartIndex, rolePartSelectTool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewCtrl(extras) {
    _reporterNs.report("ListViewCtrl2", "../game/components/listViewCtrl2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../src/utils/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNPCPartDisplayInfo(extras) {
    _reporterNs.report("NPCPartDisplayInfo", "../StaticUtils/NPCConfig", _context.meta, extras);
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
      ListViewCtrl2 = _unresolved_2.ListViewCtrl2;
    }, function (_unresolved_3) {
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      LoadingController = _unresolved_5.LoadingController;
    }, function (_unresolved_6) {
      Log = _unresolved_6.default;
    }, function (_unresolved_7) {
      NPCPartDisplayInfo = _unresolved_7.NPCPartDisplayInfo;
    }, function (_unresolved_8) {
      loginModel = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9983Q0/q1ETrrRjeIYx8lm", "rolePartSelectTool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'rolePartSelectTool';

      _export("rolePartIndex", rolePartIndex = ['body', 'hair', 'shirt', 'pants']);

      _export("rolePartSelectTool", rolePartSelectTool = (_dec = ccclass('rolePartSelectTool'), _dec2 = property(Node), _dec(_class = (_class2 = class rolePartSelectTool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pre_listView", _descriptor, this);

          this._data = void 0;
        }

        start() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading(); // modelMgr.mainModel.checkcatReq();
          //observer.on(EventType.SOCKET_SHOP_ITEM_LIST, this.updateEnjoyToolsHandler, this);

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_ROLE_PLAY_INDEX, this.setDataStoreId, this); // observer.on(EventType.SOCKET_SHOP_ITEM_LIST, (data)=>{
          //     console.log(TAG, data)
          // }, this);
          //modelMgr.mainModel.getShopList()
          //this.updateEnjoyToolsHandler();

          this.splitHair();
          this.updateEnjoyToolsHandler(this._data);
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentType = (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).hair;
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentName = 'hair';
        }

        onDestroy() {
          //observer.off(EventType.SOCKET_SHOP_ITEM_LIST, this.updateEnjoyToolsHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_ROLE_PLAY_INDEX, this.setDataStoreId, this);
        }

        splitHair() {
          //     let roleInfoArray = []
          //     const iconHair = [...NPCPartDisplayInfo['hair']['icon']['man'], ...NPCPartDisplayInfo['hair']['icon']['woman']]
          //     const frameHair = [...NPCPartDisplayInfo['hair']['frame']['man'], ...NPCPartDisplayInfo['hair']['frame']['woman']]
          //     iconHair.forEach((element, index)=>{
          //         roleInfoArray.push(
          //             {
          //                 icon:iconHair[index],
          //                 frame: frameHair[index],
          //             }
          //         )
          //    })
          this._data = (_crd && NPCPartDisplayInfo === void 0 ? (_reportPossibleCrUseOfNPCPartDisplayInfo({
            error: Error()
          }), NPCPartDisplayInfo) : NPCPartDisplayInfo).hair;
        }

        setDataStoreId(partIndex) {
          let roleInfoArray = [];
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentType = (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel)[rolePartIndex[partIndex.data]];
          (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).currentName = rolePartIndex[partIndex.data];

          if (partIndex.data === 1) {
            this.splitHair();
          } else {
            //    NPCPartDisplayInfo[rolePartIndex[partIndex.data]].icon.forEach((element, index)=>{
            //         roleInfoArray.push(
            //             {
            //                 icon:NPCPartDisplayInfo[rolePartIndex[partIndex.data]].icon[index],
            //                 frame: NPCPartDisplayInfo[rolePartIndex[partIndex.data]].frame[index],
            //             }
            //         )
            //    })
            this._data = (_crd && NPCPartDisplayInfo === void 0 ? (_reportPossibleCrUseOfNPCPartDisplayInfo({
              error: Error()
            }), NPCPartDisplayInfo) : NPCPartDisplayInfo)[rolePartIndex[partIndex.data]];
          }

          this.updateEnjoyToolsHandler(this._data);
        }

        updateEnjoyToolsHandler(data) {
          this._data = data;
          let current_storeId_arr = []; // (this._data.data.data as CatEnjoyToolsData[]).forEach(element => {
          //     if(element.storeId === this.current_storeId){
          //         current_storeId_arr.push(element)
          //     }
          // });

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, this._data);
          this.showZhongziList(this._data);
        }

        onEnable() {//排序逻辑
          // let arr: any[] = modelMgr.configModel.commonConfigJson.Cat;
          // this.showZhongziList(arr);
        }
        /**
        * 
        */


        showZhongziList(arr) {
          // if(!arr.length){
          //     this.nullTxt.node.active = true
          // }else{
          //     this.nullTxt.node.active = false
          // }
          let len = Math.ceil(arr.length / 3);
          let grpArr = [];

          for (let i = 0; i < len; i++) {
            let temparr = [];

            for (let j = 0; j < 3; j++) {
              arr[i * 3 + j] && temparr.push(arr[i * 3 + j]);
            }

            grpArr.push(temparr);
          }

          if (this.pre_listView) {
            let ctrl = this.pre_listView.getChildByName("listctrl");
            let spawnCount = grpArr.length;
            ctrl.getComponent(_crd && ListViewCtrl2 === void 0 ? (_reportPossibleCrUseOfListViewCtrl({
              error: Error()
            }), ListViewCtrl2) : ListViewCtrl2).initData(spawnCount, grpArr);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=355bdd2ebd9d7008e9311c59a065b44825a2cd9a.js.map