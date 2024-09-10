System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ListViewCtrl2, modelMgr, observer, EventType, LoadingController, Log, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TAG, CatEnjoyToolsComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListViewCtrl(extras) {
    _reporterNs.report("ListViewCtrl2", "../../../game/components/listViewCtrl2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../../../EventType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingController(extras) {
    _reporterNs.report("LoadingController", "../../../game/components/LoadingController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCatEnjoyToolsData(extras) {
    _reporterNs.report("CatEnjoyToolsData", "./CatEnjoyToolsDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../../../assets/src/utils/LogUtils", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ListViewCtrl2 = _unresolved_2.ListViewCtrl2;
    }, function (_unresolved_3) {
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }, function (_unresolved_5) {
      LoadingController = _unresolved_5.LoadingController;
    }, function (_unresolved_6) {
      Log = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77cb6QB1b5FeIRZ35CvSiNd", "CatEnjoyToolsComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'CatEnjoyToolsComponent';

      _export("CatEnjoyToolsComponent", CatEnjoyToolsComponent = (_dec = ccclass('CatEnjoyToolsComponent'), _dec2 = property(Node), _dec3 = property(Number), _dec4 = property(Label), _dec(_class = (_class2 = class CatEnjoyToolsComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pre_listView", _descriptor, this);

          _initializerDefineProperty(this, "current_storeId", _descriptor2, this);

          _initializerDefineProperty(this, "nullTxt", _descriptor3, this);

          this._data = void 0;
        }

        start() {
          (_crd && LoadingController === void 0 ? (_reportPossibleCrUseOfLoadingController({
            error: Error()
          }), LoadingController) : LoadingController).ins.hideLoading(); // modelMgr.mainModel.checkcatReq();

          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_SHOP_ITEM_LIST, this.updateEnjoyToolsHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SHOP_INDEX, this.setDataStoreId, this); // observer.on(EventType.SOCKET_SHOP_ITEM_LIST, (data)=>{
          //     console.log(TAG, data)
          // }, this);

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).mainModel.getShopList(); //this.updateEnjoyToolsHandler();
        }

        onDestroy() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_SHOP_ITEM_LIST, this.updateEnjoyToolsHandler, this);
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).UPDATE_SHOP_INDEX, this.setDataStoreId, this);
        }

        setDataStoreId(index) {
          this.current_storeId = index.data;
          this.updateEnjoyToolsHandler(this._data);
        }

        updateEnjoyToolsHandler(data) {
          this._data = data;
          var current_storeId_arr = [];

          this._data.data.data.forEach(element => {
            if (element.storeId === this.current_storeId) {
              current_storeId_arr.push(element);
            }
          });

          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, this._data);
          this.showZhongziList(current_storeId_arr);
        }

        onEnable() {//排序逻辑
          // let arr: any[] = modelMgr.configModel.commonConfigJson.Cat;
          // this.showZhongziList(arr);
        }
        /**
        * 
        */


        showZhongziList(arr) {
          if (!arr.length) {
            this.nullTxt.node.active = true;
          } else {
            this.nullTxt.node.active = false;
          }

          var len = Math.ceil(arr.length / 3);
          var grpArr = [];

          for (var i = 0; i < len; i++) {
            var temparr = [];

            for (var j = 0; j < 3; j++) {
              arr[i * 3 + j] && temparr.push(arr[i * 3 + j]);
            }

            grpArr.push(temparr);
          }

          if (this.pre_listView) {
            var ctrl = this.pre_listView.getChildByName("listctrl");
            var spawnCount = grpArr.length;
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "current_storeId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nullTxt", [_dec4], {
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
//# sourceMappingURL=13cf4b6acca931afb8fdaa383f9361c09a922839.js.map