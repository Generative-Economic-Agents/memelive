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
        var core = require('../../modules/_core');

        var $JSON = core.JSON || (core.JSON = {
          stringify: JSON.stringify
        });

        module.exports = function stringify(it) {
          // eslint-disable-line no-unused-vars
          return $JSON.stringify.apply($JSON, arguments);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../../modules/_core': _req
      }));
    }
  };
});
//# sourceMappingURL=8ae31eeef5131cfd1761da93272e93bdd09c920c.js.map