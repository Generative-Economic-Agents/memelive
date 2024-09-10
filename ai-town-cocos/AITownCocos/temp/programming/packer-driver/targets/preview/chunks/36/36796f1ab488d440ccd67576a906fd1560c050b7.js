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
        var anObject = require('./_an-object');

        var get = require('./core.get-iterator-method');

        module.exports = require('./_core').getIterator = function (it) {
          var iterFn = get(it);
          if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
          return anObject(iterFn.call(it));
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_an-object': _req,
        './core.get-iterator-method': _req0,
        './_core': _req1
      }));
    }
  };
});
//# sourceMappingURL=36796f1ab488d440ccd67576a906fd1560c050b7.js.map