System.register(["__unresolved_0", "has-tostringtag/shams", "call-bind/callBound"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_hasTostringtagShams) {
      _req = _hasTostringtagShams.__cjsMetaURL;
    }, function (_callBindCallBound) {
      _req0 = _callBindCallBound.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var hasToStringTag = require('has-tostringtag/shams')();

        var callBound = require('call-bind/callBound');

        var $toString = callBound('Object.prototype.toString');

        var isStandardArguments = function isArguments(value) {
          if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
            return false;
          }

          return $toString(value) === '[object Arguments]';
        };

        var isLegacyArguments = function isArguments(value) {
          if (isStandardArguments(value)) {
            return true;
          }

          return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
        };

        var supportsStandardArguments = function () {
          return isStandardArguments(arguments);
        }();

        isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

        module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'has-tostringtag/shams': _req,
        'call-bind/callBound': _req0
      }));
    }
  };
});
//# sourceMappingURL=c61e9610861b5201a24ce40f572b9b643e9114fb.js.map