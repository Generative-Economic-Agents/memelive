System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StaticConfigModel, JishiModel, MainModel, ModelManager, _crd;

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../model/StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJishiModel(extras) {
    _reporterNs.report("JishiModel", "../model/jishi/JishiModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainModel(extras) {
    _reporterNs.report("MainModel", "../model/main/MainModel", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StaticConfigModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      JishiModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      MainModel = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5631d7HQHZAcb+rjFW7Ucwi", "ModelManager", undefined);

      _export("default", ModelManager = class ModelManager {
        constructor() {
          /**主界面数据类 */
          this.mainModel = void 0;
          this.jishiModel = void 0;
          this.configModel = void 0;
          var s = this;
          s.register();
        }

        register() {
          var s = this;
          s.mainModel = new (_crd && MainModel === void 0 ? (_reportPossibleCrUseOfMainModel({
            error: Error()
          }), MainModel) : MainModel)();
          s.jishiModel = new (_crd && JishiModel === void 0 ? (_reportPossibleCrUseOfJishiModel({
            error: Error()
          }), JishiModel) : JishiModel)();
          s.configModel = new (_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
            error: Error()
          }), StaticConfigModel) : StaticConfigModel)();
        }

        init() {
          this.mainModel.init();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecdf5e2fee823c9216f964c2dde5d7ea7eb87a24.js.map