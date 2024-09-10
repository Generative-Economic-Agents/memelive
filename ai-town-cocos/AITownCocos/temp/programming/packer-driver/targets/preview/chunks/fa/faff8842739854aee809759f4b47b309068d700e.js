System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _now, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = {
          //provide realtime clock for performance measurement
          now: function now() {
            var second = process.hrtime();
            return second[0] * 1000 + second[1] / 1000000;
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _now = module.exports.now;
      }, {});
    }
  };
});
//# sourceMappingURL=faff8842739854aee809759f4b47b309068d700e.js.map