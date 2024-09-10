System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _Reader, _Writer, __cjsMetaURL;

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
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
        var errors = require('./errors');

        var types = require('./types');

        var Reader = require('./reader');

        var Writer = require('./writer'); // --- Exports


        module.exports = {
          Reader: Reader,
          Writer: Writer
        };

        for (var t in types) {
          if (types.hasOwnProperty(t)) module.exports[t] = types[t];
        }

        for (var e in errors) {
          if (errors.hasOwnProperty(e)) module.exports[e] = errors[e];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _Reader = module.exports.Reader;
        _Writer = module.exports.Writer;
      }, () => ({
        './errors': _req,
        './types': _req0,
        './reader': _req1,
        './writer': _req2
      }));
    }
  };
});
//# sourceMappingURL=1e2932ffff87519fbbb919fb8002ae940c9fb712.js.map