System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, _formats, _parse, _stringify, __cjsMetaURL;

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
        'use strict';

        var stringify = require('./stringify');

        var parse = require('./parse');

        var formats = require('./formats');

        module.exports = {
          formats: formats,
          parse: parse,
          stringify: stringify
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _formats = module.exports.formats;
        _parse = module.exports.parse;
        _stringify = module.exports.stringify;
      }, () => ({
        './stringify': _req,
        './parse': _req0,
        './formats': _req1
      }));
    }
  };
});
//# sourceMappingURL=c130b92c4a34010b17d46161633288f320011db8.js.map