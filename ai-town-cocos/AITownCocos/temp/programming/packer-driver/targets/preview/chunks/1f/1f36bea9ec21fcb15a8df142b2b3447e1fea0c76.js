System.register(["__unresolved_0", "function-bind"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_functionBind) {
      _req = _functionBind.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var call = Function.prototype.call;
        var $hasOwn = Object.prototype.hasOwnProperty;

        var bind = require('function-bind');
        /** @type {import('.')} */


        module.exports = bind.call(call, $hasOwn); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'function-bind': _req
      }));
    }
  };
});
//# sourceMappingURL=1f36bea9ec21fcb15a8df142b2b3447e1fea0c76.js.map