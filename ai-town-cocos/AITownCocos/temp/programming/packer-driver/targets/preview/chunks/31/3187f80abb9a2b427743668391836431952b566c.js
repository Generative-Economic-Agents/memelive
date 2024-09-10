System.register(["__unresolved_0", "get-intrinsic", "define-data-property", "has-property-descriptors", "gopd", "es-errors/type"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_getIntrinsic) {
      _req = _getIntrinsic.__cjsMetaURL;
    }, function (_defineDataProperty) {
      _req0 = _defineDataProperty.__cjsMetaURL;
    }, function (_hasPropertyDescriptors) {
      _req1 = _hasPropertyDescriptors.__cjsMetaURL;
    }, function (_gopd) {
      _req2 = _gopd.__cjsMetaURL;
    }, function (_esErrorsType) {
      _req3 = _esErrorsType.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var GetIntrinsic = require('get-intrinsic');

        var define = require('define-data-property');

        var hasDescriptors = require('has-property-descriptors')();

        var gOPD = require('gopd');

        var $TypeError = require('es-errors/type');

        var $floor = GetIntrinsic('%Math.floor%');
        /** @type {import('.')} */

        module.exports = function setFunctionLength(fn, length) {
          if (typeof fn !== 'function') {
            throw new $TypeError('`fn` is not a function');
          }

          if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
            throw new $TypeError('`length` must be a positive 32-bit integer');
          }

          var loose = arguments.length > 2 && !!arguments[2];
          var functionLengthIsConfigurable = true;
          var functionLengthIsWritable = true;

          if ('length' in fn && gOPD) {
            var desc = gOPD(fn, 'length');

            if (desc && !desc.configurable) {
              functionLengthIsConfigurable = false;
            }

            if (desc && !desc.writable) {
              functionLengthIsWritable = false;
            }
          }

          if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
            if (hasDescriptors) {
              define(
              /** @type {Parameters<define>[0]} */
              fn, 'length', length, true, true);
            } else {
              define(
              /** @type {Parameters<define>[0]} */
              fn, 'length', length);
            }
          }

          return fn;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'get-intrinsic': _req,
        'define-data-property': _req0,
        'has-property-descriptors': _req1,
        'gopd': _req2,
        'es-errors/type': _req3
      }));
    }
  };
});
//# sourceMappingURL=3187f80abb9a2b427743668391836431952b566c.js.map