System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ListViewCtrl2, modelMgr, observer, EventType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RenwuComponent;

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
      modelMgr = _unresolved_3.modelMgr;
      observer = _unresolved_3.observer;
    }, function (_unresolved_4) {
      EventType = _unresolved_4.EventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93c64yX/ttNhadBIwxgEZ+8", "RenwuComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RenwuComponent", RenwuComponent = (_dec = ccclass('RenwuComponent'), _dec2 = property(Node), _dec(_class = (_class2 = class RenwuComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pre_listView", _descriptor, this);
        }

        start() {
          (_crd && observer === void 0 ? (_reportPossibleCrUseOfobserver({
            error: Error()
          }), observer) : observer).on((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).SOCKET_TASKLIST, this.updateRenwuList, this);
        }

        onEnable() {
          //排序逻辑
          let arr = (_crd && modelMgr === void 0 ? (_reportPossibleCrUseOfmodelMgr({
            error: Error()
          }), modelMgr) : modelMgr).configModel.commonConfigJson.TaskCfg;
          this.showRenwuList(arr);
        }

        updateRenwuList() {// let da: taskcell[] = modelMgr.mainModel.tasklist.data;
          // let arr = modelMgr.configModel.commonConfigJson.TaskCfg;
          // this.showRenwuList(arr);
        }
        /**
        * 
        */


        showRenwuList(arr) {
          if (this.pre_listView) {
            let ctrl = this.pre_listView.getChildByName("listctrl");
            let spawnCount = arr.length;
            ctrl.getComponent(_crd && ListViewCtrl2 === void 0 ? (_reportPossibleCrUseOfListViewCtrl({
              error: Error()
            }), ListViewCtrl2) : ListViewCtrl2).initData(spawnCount, arr);
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
//# sourceMappingURL=6f53ce0fcb5374b0c811d7e3d50da09334674b69.js.map