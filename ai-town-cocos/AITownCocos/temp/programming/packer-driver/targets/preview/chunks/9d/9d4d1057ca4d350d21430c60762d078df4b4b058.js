System.register(["__unresolved_0", "es-define-property"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_esDefineProperty) {
      _req = _esDefineProperty.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var $defineProperty = require('es-define-property');

        var hasPropertyDescriptors = function hasPropertyDescriptors() {
          return !!$defineProperty;
        };

        hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
          // node v0.6 has a bug where array lengths can be Set but not Defined
          if (!$defineProperty) {
            return null;
          }

          try {
            return $defineProperty([], 'length', {
              value: 1
            }).length !== 1;
          } catch (e) {
            // In Firefox 4-22, defining length on an array throws an exception.
            return true;
          }
        };

        module.exports = hasPropertyDescriptors; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'es-define-property': _req
      }));
    }
  };
});
//# sourceMappingURL=9d4d1057ca4d350d21430c60762d078df4b4b058.js.map