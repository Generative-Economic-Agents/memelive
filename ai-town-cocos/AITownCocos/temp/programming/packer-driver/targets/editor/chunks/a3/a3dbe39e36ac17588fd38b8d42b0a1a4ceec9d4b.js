System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StaticConfigModel, TownModel, ModelManager, _crd;

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../model/StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTownModel(extras) {
    _reporterNs.report("TownModel", "../town/TownModel", _context.meta, extras);
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
      TownModel = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5631d7HQHZAcb+rjFW7Ucwi", "ModelManager", undefined);

      _export("default", ModelManager = class ModelManager {
        constructor() {
          /**主界面数据类 */
          this.configModel = void 0;
          this.townModel = void 0;
          let s = this;
          s.register();
        }

        register() {
          let s = this;
          s.townModel = new (_crd && TownModel === void 0 ? (_reportPossibleCrUseOfTownModel({
            error: Error()
          }), TownModel) : TownModel)();
          s.configModel = new (_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
            error: Error()
          }), StaticConfigModel) : StaticConfigModel)();
        }

        init() {
          this.townModel.init();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3dbe39e36ac17588fd38b8d42b0a1a4ceec9d4b.js.map