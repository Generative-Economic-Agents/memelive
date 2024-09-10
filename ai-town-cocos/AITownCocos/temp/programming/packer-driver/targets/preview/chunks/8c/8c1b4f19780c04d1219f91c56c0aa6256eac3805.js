System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // optional / simple context binding
        var aFunction = require('./_a-function');

        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };

            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function
            /* ...args */
          () {
            return fn.apply(that, arguments);
          };
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_a-function': _req
      }));
    }
  };
});
//# sourceMappingURL=8c1b4f19780c04d1219f91c56c0aa6256eac3805.js.map