System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _escapeAttribute, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * Escapes characters that can not be in an XML attribute.
         */
        function escapeAttribute(value) {
          return value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }
        /**
         * @api private
         */


        module.exports = {
          escapeAttribute: escapeAttribute
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _escapeAttribute = module.exports.escapeAttribute;
      }, {});
    }
  };
});
//# sourceMappingURL=0e8afb8728267326e95881a5d74b2ce90d6ce8ca.js.map