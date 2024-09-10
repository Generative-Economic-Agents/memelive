System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "lodash-es", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, modelMgr, ListViewCtrl2H, toNumber, WorkCatModel, Log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TAG, workSelectCatComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmodelMgr(extras) {
    _reporterNs.report("modelMgr", "../../../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewCtrl2H(extras) {
    _reporterNs.report("ListViewCtrl2H", "../../../game/components/listViewCtrl2H", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNumber(extras) {
    _reporterNs.report("toNumber", "lodash-es", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorkCatModel(extras) {
    _reporterNs.report("WorkCatModel", "../../../model/WorkCatModel", _context.meta, extras);
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
    }, function (_unresolved_3) {
      ListViewCtrl2H = _unresolved_3.ListViewCtrl2H;
    }, function (_lodashEs) {
      toNumber = _lodashEs.toNumber;
    }, function (_unresolved_4) {
      WorkCatModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      Log = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa7d7zBMYRLZYXuL+zqN0VI", "WorkSelectCatComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      TAG = 'workSelectCatComponent';

      _export("workSelectCatComponent", workSelectCatComponent = (_dec = ccclass('workSelectCatComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Number), _dec(_class = (_class2 = class workSelectCatComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pre_listView", _descriptor, this);

          _initializerDefineProperty(this, "ToyPage", _descriptor2, this);

          _initializerDefineProperty(this, "useButton", _descriptor3, this);

          _initializerDefineProperty(this, "catNode", _descriptor4, this);

          _initializerDefineProperty(this, "countOneLine", _descriptor5, this);

          this.currentGoodId = 0;
        }

        start() {
          var arr = (_crd && WorkCatModel === void 0 ? (_reportPossibleCrUseOfWorkCatModel({
            error: Error()
          }), WorkCatModel) : WorkCatModel).catsInfo;
          var fliteArr = [];
          arr.forEach(cat => {
            if ((_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
              error: Error()
            }), modelMgr) : modelMgr).mainModel.getServerCatsData(cat.id)) {
              fliteArr.push(cat);
            }
          });
          this.showZhongziList(fliteArr);
        }

        onDestroy() {}

        updateSerCatsHandler() {//this.showZhongziList(arr);
        }

        onEnable() {//排序逻辑
          // let arr: any[] = modelMgr.configModel.commonConfigJson.Cat;
          // this.showZhongziList(arr);
        }
        /**
        * 
        */


        showZhongziList(arr) {
          var len = Math.ceil(arr.length / (_crd && toNumber === void 0 ? (_reportPossibleCrUseOftoNumber({
            error: Error()
          }), toNumber) : toNumber)(this.countOneLine));
          var grpArr = [];

          for (var i = 0; i < len; i++) {
            var temparr = [];

            for (var j = 0; j < (_crd && toNumber === void 0 ? (_reportPossibleCrUseOftoNumber({
              error: Error()
            }), toNumber) : toNumber)(this.countOneLine); j++) {
              temparr.push(arr[i * (_crd && toNumber === void 0 ? (_reportPossibleCrUseOftoNumber({
                error: Error()
              }), toNumber) : toNumber)(this.countOneLine) + j]);
            }

            grpArr.push(temparr);
          }

          if (this.pre_listView) {
            var ctrl = this.pre_listView.getChildByName("listctrl");
            var spawnCount = grpArr.length;
            ctrl.getComponent(_crd && ListViewCtrl2H === void 0 ? (_reportPossibleCrUseOfListViewCtrl2H({
              error: Error()
            }), ListViewCtrl2H) : ListViewCtrl2H).initData(spawnCount, grpArr);
          }
        }

        hideUseBtn() {
          (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
            error: Error()
          }), Log) : Log).log(TAG, 'click hideUseBtn');
          this.useButton.active = false;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ToyPage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "catNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "countOneLine", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87980a67eff77b96fff7eef94a58f64a265b28df.js.map