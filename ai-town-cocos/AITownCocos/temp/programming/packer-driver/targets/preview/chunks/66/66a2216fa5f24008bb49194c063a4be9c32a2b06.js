System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, modelMgr, observer, ListViewCtrl2, DataEvents, Log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GoumaiZZController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfobserver(extras) {
    _reporterNs.report("observer", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewCtrl(extras) {
    _reporterNs.report("ListViewCtrl2", "../../../game/components/listViewCtrl2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataEvents(extras) {
    _reporterNs.report("DataEvents", "../../../model/DataEvents", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      modelMgr = _unresolved_2.modelMgr;
      observer = _unresolved_2.observer;
    }, function (_unresolved_3) {
      ListViewCtrl2 = _unresolved_3.ListViewCtrl2;
    }, function (_unresolved_4) {
      DataEvents = _unresolved_4.DataEvents;
    }, function (_unresolved_5) {
      Log = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4853sxRgFOQ4eN+amJOhQd", "GoumaiZZController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'warn', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 购买种子 container controller
       */

      _export("GoumaiZZController", GoumaiZZController = (_dec = ccclass('GoumaiZZController'), _dec2 = property(Node), _dec3 = property(String), _dec(_class = (_class2 = class GoumaiZZController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pre_listView", _descriptor, this);

          _initializerDefineProperty(this, "oprType", _descriptor2, this);

          this.showarr = void 0;
          this._lasttime = 0;
          this._temparr = void 0;
          this._currentTog = "";
          this._curevt = void 0;
        }

        start() {// this.sortselectHandler({data:{type:"Toggle_goumai"}});
        }

        onEnable() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on("toggle", this.sortselectHandler, this);

          if (this.oprType == "goumai") {
            if (!this._currentTog) {
              this._currentTog = "Toggle-goumai001";
            }

            this.sortselectHandler({
              data: {
                type: this._currentTog
              }
            });
          } else if (this.oprType == "chushou") {
            if (!this._currentTog) {
              this._currentTog = "Toggle-chushou001";
            } //每次展示时,刷新数据;


            this.sortselectHandler({
              data: {
                type: this._currentTog
              }
            });
          }

          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.currentchushouTab = "seeds";
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.on((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).FRESH_SEEDS_SELL_NULL, this.nullfresh, this);
        }

        onDisable() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).off("toggle", this.sortselectHandler, this);
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.off((_crd && DataEvents === void 0 ? (_reportPossibleCrUseOfDataEvents({
            error: Error()
          }), DataEvents) : DataEvents).FRESH_SEEDS_SELL_NULL, this.nullfresh, this);
          this.removeallItem();
        }

        nullfresh() {
          var arr;

          if (this.oprType == "chushou") {
            arr = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).jishiModel.storelist.seeds;
            this.sortselectHandler(this._curevt);
          }
        }

        update(deltaTime) {
          var s = this;
          s._lasttime += deltaTime;

          if (s._lasttime >= 1) {
            s._lasttime = 0;
          }
        }

        /**
         * 物品类型筛选
         * @param evt 
         */
        sortselectHandler(evt) {
          this._curevt = evt;
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(evt.data);

          if (this._currentTog == evt.data.type) {// return;//冲刷数据,不屏蔽
          }

          this._currentTog = evt.data.type;
          var type = 0; //v0.8 改为默认全部显示
          // switch (evt.data.type) {//  "dimension": 3,  //维度类型(1:稀有度|2:颜色|3:系列)
          //     case "Toggle_goumai"://全部
          //     case "Toggle-chushou"://全部
          //         type = 0;
          //         break;
          //     case "Toggle-goumai001"://品级
          //     case "Toggle-chushou001"://品级
          //         type = 1;
          //         break;
          //     case "Toggle-goumai002"://颜色
          //     case "Toggle-chushou002"://颜色
          //         type = 2;
          //         break;
          //     case "Toggle-goumai003"://系列
          //     case "Toggle-chushou003"://系列
          //         type = 3;
          //         break;
          // }

          if (type == undefined) {
            type = 1;
          } //筛选逻辑
          // if (type != 0) {
          //     this.showarr = ArrUtils.pickElmsFromArrayByProp(arr, "dimension", type)
          // } else {
          //     this.showarr = arr;
          // }
          //排序逻辑


          var arr = [{
            seedId: 1,
            name: "精品猫粮1",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }, {
            seedId: 2,
            name: "精品猫粮1",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }, {
            seedId: 3,
            name: "精品猫粮1",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }, {
            seedId: 4,
            name: "精品猫粮3",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }, {
            seedId: 5,
            name: "精品猫粮1",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }, {
            seedId: 6,
            name: "精品猫粮1",
            restrict: 0,
            quanta: 10,
            quota: 100,
            dimension: 1,
            subType: 1,
            icon: "",
            salePrice: 10,
            sell: 1,
            amount: 10,
            buyPrice: 20
          }];

          if (this.oprType == "goumai") {
            var data = {
              "dimension": ""
            };
            this.showarr = arr;
            this.showZhongziList(this.showarr);
          } else if (this.oprType == "chushou") {
            var _data = {
              "dimension": type + ""
            };
            this.showarr = arr;
            this.showZhongziList(this.showarr);
          }
        }
        /**
         * 
         */


        showZhongziList(arr) {
          (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.hasSelectData = []; //清除已选物品；

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
          // forEach( this._gmzhongziItemArr,(value)=>{
          //     value.destroy();
          // })
          var ctrl = this.pre_listView.getChildByName("listctrl");
          ctrl.getComponent(_crd && ListViewCtrl2 === void 0 ? (_reportPossibleCrUseOfListViewCtrl({
            error: Error()
          }), ListViewCtrl2) : ListViewCtrl2).reset();
        }
        /**
         * 
         */


        showChushouZhongziList() {
          var arr = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).jishiModel.storelist.seeds;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "oprType", [_dec3], {
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
//# sourceMappingURL=66a2216fa5f24008bb49194c063a4be9c32a2b06.js.map