System.register(["__unresolved_0", "babel-runtime/core-js/object/create", "babel-runtime/core-js/json/stringify"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeCoreJsObjectCreate) {
      _req = _babelRuntimeCoreJsObjectCreate.__cjsMetaURL;
    }, function (_babelRuntimeCoreJsJsonStringify) {
      _req0 = _babelRuntimeCoreJsJsonStringify.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _create = require('babel-runtime/core-js/object/create');

        var _create2 = _interopRequireDefault(_create);

        var _stringify = require('babel-runtime/core-js/json/stringify');

        var _stringify2 = _interopRequireDefault(_stringify);

        exports.default = FacebookApiException;

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function FacebookApiException(res) {
          this.name = 'FacebookApiException';
          this.message = (0, _stringify2.default)(res || {});
          this.response = res;
          Error.captureStackTrace(this, this.constructor.name);
        }

        FacebookApiException.prototype = (0, _create2.default)(Error.prototype, {
          constructor: {
            value: FacebookApiException,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        'babel-runtime/core-js/object/create': _req,
        'babel-runtime/core-js/json/stringify': _req0
      }));
    }
  };
});
//# sourceMappingURL=fdaba72d936aa7ffdddb7030bce8352b829472a3.js.map