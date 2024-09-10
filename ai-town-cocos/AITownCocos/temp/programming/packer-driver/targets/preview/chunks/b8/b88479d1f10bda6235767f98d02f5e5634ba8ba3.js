System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _decode, _parse, _encode, _stringify, __cjsMetaURL;

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
        'use strict';

        exports.decode = exports.parse = require('./decode');
        exports.encode = exports.stringify = require('./encode'); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _decode = module.exports.decode;
        _parse = module.exports.parse;
        _encode = module.exports.encode;
        _stringify = module.exports.stringify;
      }, () => ({
        './decode': _req,
        './encode': _req0
      }));
    }
  };
});
//# sourceMappingURL=b88479d1f10bda6235767f98d02f5e5634ba8ba3.js.map