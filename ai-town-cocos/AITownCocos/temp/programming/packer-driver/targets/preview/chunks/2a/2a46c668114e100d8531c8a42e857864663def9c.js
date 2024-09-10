System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

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
        // Thank's IE8 for his funny defineProperty
        module.exports = !require('./_fails')(function () {
          return Object.defineProperty({}, 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_fails': _req
      }));
    }
  };
});
//# sourceMappingURL=2a46c668114e100d8531c8a42e857864663def9c.js.map