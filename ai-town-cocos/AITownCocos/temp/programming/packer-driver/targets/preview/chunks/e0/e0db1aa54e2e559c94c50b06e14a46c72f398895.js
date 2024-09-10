System.register(["__unresolved_0", "get-intrinsic"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_getIntrinsic) {
      _req = _getIntrinsic.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var GetIntrinsic = require('get-intrinsic');
        /** @type {import('.')} */


        var $defineProperty = GetIntrinsic('%Object.defineProperty%', true) || false;

        if ($defineProperty) {
          try {
            $defineProperty({}, 'a', {
              value: 1
            });
          } catch (e) {
            // IE 8 has a broken defineProperty
            $defineProperty = false;
          }
        }

        module.exports = $defineProperty; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'get-intrinsic': _req
      }));
    }
  };
});
//# sourceMappingURL=e0db1aa54e2e559c94c50b06e14a46c72f398895.js.map