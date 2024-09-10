System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StaticConfigModel, ModelManager, _crd;

  function _reportPossibleCrUseOfStaticConfigModel(extras) {
    _reporterNs.report("StaticConfigModel", "../model/StaticConfig/StaticConfigModel", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StaticConfigModel = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5631d7HQHZAcb+rjFW7Ucwi", "ModelManager", undefined);

      _export("default", ModelManager = class ModelManager {
        constructor() {
          /**主界面数据类 */
          this.configModel = void 0;
          var s = this;
          s.register();
        }

        register() {
          var s = this;
          s.configModel = new (_crd && StaticConfigModel === void 0 ? (_reportPossibleCrUseOfStaticConfigModel({
            error: Error()
          }), StaticConfigModel) : StaticConfigModel)();
        }

        init() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ef3405c452d1d58bc06ebe73efdccb2559f45e4.js.map