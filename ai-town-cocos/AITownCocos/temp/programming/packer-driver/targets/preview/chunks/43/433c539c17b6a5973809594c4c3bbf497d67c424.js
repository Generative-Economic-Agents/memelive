System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _f, __cjsMetaURL;

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
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = require('./_to-iobject');

        var gOPN = require('./_object-gopn').f;

        var toString = {}.toString;
        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function getWindowNames(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };

        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _f = module.exports.f;
      }, () => ({
        './_to-iobject': _req,
        './_object-gopn': _req0
      }));
    }
  };
});
//# sourceMappingURL=433c539c17b6a5973809594c4c3bbf497d67c424.js.map