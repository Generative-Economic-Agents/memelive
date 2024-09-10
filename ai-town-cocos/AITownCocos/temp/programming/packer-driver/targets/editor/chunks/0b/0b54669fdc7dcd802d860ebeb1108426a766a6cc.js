System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _newInvalidAsn1Error, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
        module.exports = {
          newInvalidAsn1Error: function (msg) {
            var e = new Error();
            e.name = 'InvalidAsn1Error';
            e.message = msg || '';
            return e;
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _newInvalidAsn1Error = module.exports.newInvalidAsn1Error;
      }, {});
    }
  };
});
//# sourceMappingURL=0b54669fdc7dcd802d860ebeb1108426a766a6cc.js.map