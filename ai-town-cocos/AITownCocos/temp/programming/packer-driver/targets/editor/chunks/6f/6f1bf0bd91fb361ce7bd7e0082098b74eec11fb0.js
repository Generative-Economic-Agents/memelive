System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _XmlText, __cjsMetaURL;

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
        var escapeElement = require('./escape-element').escapeElement;
        /**
         * Represents an XML text value.
         * @api private
         */


        function XmlText(value) {
          this.value = value;
        }

        XmlText.prototype.toString = function () {
          return escapeElement('' + this.value);
        };
        /**
         * @api private
         */


        module.exports = {
          XmlText: XmlText
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _XmlText = module.exports.XmlText;
      }, () => ({
        './escape-element': _req
      }));
    }
  };
});
//# sourceMappingURL=6f1bf0bd91fb361ce7bd7e0082098b74eec11fb0.js.map