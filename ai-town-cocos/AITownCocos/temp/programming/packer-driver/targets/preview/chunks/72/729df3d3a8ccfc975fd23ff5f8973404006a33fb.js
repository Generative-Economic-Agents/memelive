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
        function HARError(errors) {
          var message = 'validation failed';
          this.name = 'HARError';
          this.message = message;
          this.errors = errors;

          if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
          } else {
            this.stack = new Error(message).stack;
          }
        }

        HARError.prototype = Error.prototype;
        module.exports = HARError; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=729df3d3a8ccfc975fd23ff5f8973404006a33fb.js.map