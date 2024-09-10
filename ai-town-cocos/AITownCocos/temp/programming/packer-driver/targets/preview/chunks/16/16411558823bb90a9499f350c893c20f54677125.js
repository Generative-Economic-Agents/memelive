System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var Cache = module.exports = function Cache() {
          this._cache = {};
        };

        Cache.prototype.put = function Cache_put(key, value) {
          this._cache[key] = value;
        };

        Cache.prototype.get = function Cache_get(key) {
          return this._cache[key];
        };

        Cache.prototype.del = function Cache_del(key) {
          delete this._cache[key];
        };

        Cache.prototype.clear = function Cache_clear() {
          this._cache = {};
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=16411558823bb90a9499f350c893c20f54677125.js.map