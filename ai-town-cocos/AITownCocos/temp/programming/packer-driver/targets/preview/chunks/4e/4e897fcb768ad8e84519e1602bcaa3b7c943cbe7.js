System.register(["__unresolved_0", "which-typed-array"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_whichTypedArray) {
      _req = _whichTypedArray.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var whichTypedArray = require('which-typed-array');
        /** @type {import('.')} */


        module.exports = function isTypedArray(value) {
          return !!whichTypedArray(value);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'which-typed-array': _req
      }));
    }
  };
});
//# sourceMappingURL=4e897fcb768ad8e84519e1602bcaa3b7c943cbe7.js.map