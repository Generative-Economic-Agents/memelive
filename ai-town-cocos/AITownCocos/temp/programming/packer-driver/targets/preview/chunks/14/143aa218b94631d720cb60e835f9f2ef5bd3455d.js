System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GlobalConfig, Log, _crd;

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../game/config/GlobalConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GlobalConfig = _unresolved_2.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c4faWn/itLj605gBOR6uL1", "LogUtils", undefined);

      Log = class Log {
        debug() {}

        log(TAG) {
          for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            messages[_key - 1] = arguments[_key];
          }

          if ((_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.isProduction) {
            console.debug("" + TAG, ...messages);
          } else {
            console.log("" + TAG, ...messages);
          }
        }

      };

      _export("default", new Log());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=143aa218b94631d720cb60e835f9f2ef5bd3455d.js.map