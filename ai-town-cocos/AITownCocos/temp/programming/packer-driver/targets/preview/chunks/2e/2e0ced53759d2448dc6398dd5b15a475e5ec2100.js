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
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = require('./_to-iobject');

        var $getOwnPropertyDescriptor = require('./_object-gopd').f;

        require('./_object-sap')('getOwnPropertyDescriptor', function () {
          return function getOwnPropertyDescriptor(it, key) {
            return $getOwnPropertyDescriptor(toIObject(it), key);
          };
        }); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_to-iobject': _req,
        './_object-gopd': _req0,
        './_object-sap': _req1
      }));
    }
  };
});
//# sourceMappingURL=2e0ced53759d2448dc6398dd5b15a475e5ec2100.js.map