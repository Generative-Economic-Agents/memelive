System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, modelMgr, ListViewCtrl2, DataEvents, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GoumaiDaojuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewCtrl(extras) {
    _reporterNs.report("ListViewCtrl2", "../../../game/components/listViewCtrl2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataEvents(extras) {
    _reporterNs.report("DataEvents", "../../../model/DataEvents", _context.meta, extras);
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
    }, function (_unresolved_3) {
      ListViewCtrl2 = _unresolved_3.ListViewCtrl2;
    }, function (_unresolved_4) {
      DataEvents = _unresolved_4.DataEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abb16XYDTFIK4F/wWL9ckpz", "GoumaiDaojuController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'warn', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 购买道具 container controller
       */

      _export("GoumaiDaojuController", GoumaiDaojuController = (_dec = ccclass('GoumaiDaojuController'), _dec2 = property({
        type: Node
      }), _dec3 = property(Node), _dec4 = property(String), _dec(_class = (_class2 = class GoumaiDaojuController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemcontainer", _descriptor, this);

          _initializerDefineProperty(this, "pre_listView", _descriptor2, this);

          _initializerDefineProperty(this, "oprType", _descriptor3, this);
        }

        start() {}

        onEnable() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.on((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).FRESH_SEEDS_SELL_NULL, this.nullfresh, this);

          if (this.oprType == "goumai") {
            this.showBuyDaojuList();
          } else if (this.oprType == "chushou") {
            this.showSellPlantList();
          }

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.currentchushouTab = "plants";
        }
        /**
         * 
         */


        onDisable() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.off((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).FRESH_SEEDS_SELL_NULL, this.nullfresh, this);
          this.removeallItem();
        }

        nullfresh() {
          if (this.oprType == "chushou") {
            var data = {
              "dimension": "0" //种子和植物在一个接口

            };
            this.showSellPlantList();
          }
        }

        update(deltaTime) {}
        /**
         * 
         */


        showBuyDaojuList() {
          this.removeallItem();

          if (!(_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.shoplist) {
            return; //无数据
          }

          var arr = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.shoplist.items;
          var len = Math.ceil(arr.length / 3);
          var grpArr = [];

          for (var i = 0; i < len; i++) {
            var temparr = [];

            for (var j = 0; j < 3; j++) {
              temparr.push(arr[i * 3 + j]);
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
        /**
         * 清除所有的item
         */


        removeallItem() {
          var ctrl = this.pre_listView.getChildByName("listctrl");
          ctrl.getComponent(_crd && ListViewCtrl2 === void 0 ? (_reportPossibleCrUseOfListViewCtrl({
            error: Error()
          }), ListViewCtrl2) : ListViewCtrl2).reset();
        }
        /**
         * 出售植物
         */


        showSellPlantList() {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.hasSelectData = []; //清除已选物品；

          var arr = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.storelist.plants;
          var len = Math.ceil(arr.length / 3);
          var grpArr = [];

          for (var i = 0; i < len; i++) {
            var temparr = [];

            for (var j = 0; j < 3; j++) {
              temparr.push(arr[i * 3 + j]);
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemcontainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pre_listView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "oprType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26935bbcbe6ac29af14c7f0996708f297d4e6246.js.map