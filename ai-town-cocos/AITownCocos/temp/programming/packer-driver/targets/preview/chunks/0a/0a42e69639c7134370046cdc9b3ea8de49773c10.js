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

        var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

        if ($gOPD) {
          try {
            $gOPD([], 'length');
          } catch (e) {
            // IE 8 has a broken gOPD
            $gOPD = null;
          }
        }

        module.exports = $gOPD; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'get-intrinsic': _req
      }));
    }
  };
});
//# sourceMappingURL=0a42e69639c7134370046cdc9b3ea8de49773c10.js.map