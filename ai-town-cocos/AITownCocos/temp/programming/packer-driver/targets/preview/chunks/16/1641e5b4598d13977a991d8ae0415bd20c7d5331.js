System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = require('./_to-object');

        var $getPrototypeOf = require('./_object-gpo');

        require('./_object-sap')('getPrototypeOf', function () {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        }); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_to-object': _req,
        './_object-gpo': _req0,
        './_object-sap': _req1
      }));
    }
  };
});
//# sourceMappingURL=1641e5b4598d13977a991d8ae0415bd20c7d5331.js.map