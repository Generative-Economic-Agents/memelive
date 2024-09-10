System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../../modules/es6.object.get-own-property-names');

        var $Object = require('../../modules/_core').Object;

        module.exports = function getOwnPropertyNames(it) {
          return $Object.getOwnPropertyNames(it);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../../modules/es6.object.get-own-property-names': _req,
        '../../modules/_core': _req0
      }));
    }
  };
});
//# sourceMappingURL=9136a930272f20ae5ebe579cc05267f15fc3c891.js.map