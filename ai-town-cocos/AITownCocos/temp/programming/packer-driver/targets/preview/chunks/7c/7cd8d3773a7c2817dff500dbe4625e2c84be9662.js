System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Generated by CoffeeScript 1.12.2
        (function () {
          var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

          if (typeof performance !== "undefined" && performance !== null && performance.now) {
            module.exports = function () {
              return performance.now();
            };
          } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
            module.exports = function () {
              return (getNanoSeconds() - nodeLoadTime) / 1e6;
            };

            hrtime = process.hrtime;

            getNanoSeconds = function getNanoSeconds() {
              var hr;
              hr = hrtime();
              return hr[0] * 1e9 + hr[1];
            };

            moduleLoadTime = getNanoSeconds();
            upTime = process.uptime() * 1e9;
            nodeLoadTime = moduleLoadTime - upTime;
          } else if (Date.now) {
            module.exports = function () {
              return Date.now() - loadTime;
            };

            loadTime = Date.now();
          } else {
            module.exports = function () {
              return new Date().getTime() - loadTime;
            };

            loadTime = new Date().getTime();
          }
        }).call(this); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=7cd8d3773a7c2817dff500dbe4625e2c84be9662.js.map