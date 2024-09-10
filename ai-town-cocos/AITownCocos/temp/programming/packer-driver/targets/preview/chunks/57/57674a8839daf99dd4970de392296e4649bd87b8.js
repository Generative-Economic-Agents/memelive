System.register(["__unresolved_0", "function-bind", "get-intrinsic", "set-function-length", "es-errors/type", "es-define-property"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, _apply, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_functionBind) {
      _req = _functionBind.__cjsMetaURL;
    }, function (_getIntrinsic) {
      _req0 = _getIntrinsic.__cjsMetaURL;
    }, function (_setFunctionLength) {
      _req1 = _setFunctionLength.__cjsMetaURL;
    }, function (_esErrorsType) {
      _req2 = _esErrorsType.__cjsMetaURL;
    }, function (_esDefineProperty) {
      _req3 = _esDefineProperty.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var bind = require('function-bind');

        var GetIntrinsic = require('get-intrinsic');

        var setFunctionLength = require('set-function-length');

        var $TypeError = require('es-errors/type');

        var $apply = GetIntrinsic('%Function.prototype.apply%');
        var $call = GetIntrinsic('%Function.prototype.call%');
        var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

        var $defineProperty = require('es-define-property');

        var $max = GetIntrinsic('%Math.max%');

        module.exports = function callBind(originalFunction) {
          if (typeof originalFunction !== 'function') {
            throw new $TypeError('a function is required');
          }

          var func = $reflectApply(bind, $call, arguments);
          return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
        };

        var applyBind = function applyBind() {
          return $reflectApply(bind, $apply, arguments);
        };

        if ($defineProperty) {
          $defineProperty(module.exports, 'apply', {
            value: applyBind
          });
        } else {
          module.exports.apply = applyBind;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _apply = module.exports.apply;
      }, () => ({
        'function-bind': _req,
        'get-intrinsic': _req0,
        'set-function-length': _req1,
        'es-errors/type': _req2,
        'es-define-property': _req3
      }));
    }
  };
});
//# sourceMappingURL=57674a8839daf99dd4970de392296e4649bd87b8.js.map