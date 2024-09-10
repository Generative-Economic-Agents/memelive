System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetworkCtrl, ModelManager, ModuleManager, UIManager, Observer, SceneManager, App, _crd, app, mduManger, uiMgr, observer, modelMgr, sceneManager, socket;

  function appInit(_app) {
    _export("app", app = _app);

    _export("mduManger", mduManger = _app.modMgr);

    _export("uiMgr", uiMgr = _app.uiMgr);

    _export("observer", observer = _app.observer);

    window["observer"] = _app.observer;

    _export("modelMgr", modelMgr = _app.modelMgr);

    window["modelMgr"] = _app.modelMgr;

    _export("sceneManager", sceneManager = _app.sceneManager);

    _export("socket", socket = _app.socket);

    modelMgr.init();
  }

  function _reportPossibleCrUseOfNetworkCtrl(extras) {
    _reporterNs.report("NetworkCtrl", "../../cases/network/NetworkCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelManager(extras) {
    _reporterNs.report("ModelManager", "../manager/ModelManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleManager(extras) {
    _reporterNs.report("ModuleManager", "../manager/ModuleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../utils/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./scene/SceneManager", _context.meta, extras);
  }

  _export({
    default: void 0,
    appInit: appInit,
    app: void 0,
    mduManger: void 0,
    uiMgr: void 0,
    observer: void 0,
    modelMgr: void 0,
    sceneManager: void 0,
    socket: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetworkCtrl = _unresolved_2.NetworkCtrl;
    }, function (_unresolved_3) {
      ModelManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      ModuleManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      Observer = _unresolved_6.Observer;
    }, function (_unresolved_7) {
      SceneManager = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8466d9XUOpPKZO6BMtmRCRy", "App", undefined);

      _export("default", App = class App {
        constructor() {
          this.showSend = void 0;
          this.modMgr = void 0;
          this.observer = void 0;
          this.uiMgr = void 0;
          this.modelMgr = void 0;
          this.sceneManager = void 0;
          this.socket = void 0;
        }

        init() {
          var self = this;
          this.observer = new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
            error: Error()
          }), Observer) : Observer)();
          this.modMgr = new (_crd && ModuleManager === void 0 ? (_reportPossibleCrUseOfModuleManager({
            error: Error()
          }), ModuleManager) : ModuleManager)();
          this.modelMgr = new (_crd && ModelManager === void 0 ? (_reportPossibleCrUseOfModelManager({
            error: Error()
          }), ModelManager) : ModelManager)();
          this.uiMgr = new (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager)();
          this.sceneManager = (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
            error: Error()
          }), SceneManager) : SceneManager).instance;
          this.socket = new (_crd && NetworkCtrl === void 0 ? (_reportPossibleCrUseOfNetworkCtrl({
            error: Error()
          }), NetworkCtrl) : NetworkCtrl)();
        }

      });

      App.isDebug = true;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2a7ba3f9ea811907a8d3615e3c397bc4c166b0e.js.map