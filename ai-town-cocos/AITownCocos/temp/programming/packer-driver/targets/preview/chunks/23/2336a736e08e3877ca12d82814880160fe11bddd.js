System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _iniLoader, __cjsMetaURL;

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
        var IniLoader = require('./ini-loader').IniLoader;
        /**
         * Singleton object to load specified config/credentials files.
         * It will cache all the files ever loaded;
         */


        module.exports.iniLoader = new IniLoader(); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _iniLoader = module.exports.iniLoader;
      }, () => ({
        './ini-loader': _req
      }));
    }
  };
});
//# sourceMappingURL=2336a736e08e3877ca12d82814880160fe11bddd.js.map