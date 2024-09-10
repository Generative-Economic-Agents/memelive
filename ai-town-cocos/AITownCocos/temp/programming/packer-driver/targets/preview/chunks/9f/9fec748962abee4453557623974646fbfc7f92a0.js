System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _escapeElement, __cjsMetaURL;

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
         * Escapes characters that can not be in an XML element.
         */
        function escapeElement(value) {
          return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#x0D;').replace(/\n/g, '&#x0A;').replace(/\u0085/g, '&#x85;').replace(/\u2028/, '&#x2028;');
        }
        /**
         * @api private
         */


        module.exports = {
          escapeElement: escapeElement
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _escapeElement = module.exports.escapeElement;
      }, {});
    }
  };
});
//# sourceMappingURL=9fec748962abee4453557623974646fbfc7f92a0.js.map