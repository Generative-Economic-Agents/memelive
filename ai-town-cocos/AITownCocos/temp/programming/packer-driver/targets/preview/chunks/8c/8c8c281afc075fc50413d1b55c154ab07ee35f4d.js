System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // all enumerable object keys, includes symbols
        var getKeys = require('./_object-keys');

        var gOPS = require('./_object-gops');

        var pIE = require('./_object-pie');

        module.exports = function (it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;

          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i = 0;
            var key;

            while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
          }

          return result;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_object-keys': _req,
        './_object-gops': _req0,
        './_object-pie': _req1
      }));
    }
  };
});
//# sourceMappingURL=8c8c281afc075fc50413d1b55c154ab07ee35f4d.js.map