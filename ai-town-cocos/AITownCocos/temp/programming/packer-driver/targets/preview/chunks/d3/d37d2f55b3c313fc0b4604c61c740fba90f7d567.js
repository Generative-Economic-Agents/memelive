System.register(["__unresolved_0", "babel-runtime/core-js/object/get-prototype-of", "babel-runtime/core-js/object/get-own-property-names", "babel-runtime/core-js/get-iterator", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeCoreJsObjectGetPrototypeOf) {
      _req = _babelRuntimeCoreJsObjectGetPrototypeOf.__cjsMetaURL;
    }, function (_babelRuntimeCoreJsObjectGetOwnPropertyNames) {
      _req0 = _babelRuntimeCoreJsObjectGetOwnPropertyNames.__cjsMetaURL;
    }, function (_babelRuntimeCoreJsGetIterator) {
      _req1 = _babelRuntimeCoreJsGetIterator.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';
        /**
         * Simultaneously satisfy require('fb') and Babel based ES2015 `import`
         * by exporting an object using Babel's __esModule which contains the normal
         * exports; and bound versions of the methods on FB.
         */

        var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

        var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

        var _getIterator2 = require('babel-runtime/core-js/get-iterator');

        var _getIterator3 = _interopRequireDefault(_getIterator2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        var mod = require('./fb'),
            FB = mod.FB;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _getOwnPropertyNames2.default)((0, _getPrototypeOf2.default)(FB))), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _key = _step.value;
            if (_key === 'constructor') continue;

            if (typeof FB[_key] === 'function') {
              exports[_key] = FB[_key].bind(FB);
            } else {
              exports[_key] = FB[_key];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        for (var key in mod) {
          exports[key] = mod[key];
        }

        Object.defineProperty(exports, '__esModule', {
          value: true
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
      }, () => ({
        'babel-runtime/core-js/object/get-prototype-of': _req,
        'babel-runtime/core-js/object/get-own-property-names': _req0,
        'babel-runtime/core-js/get-iterator': _req1,
        './fb': _req2
      }));
    }
  };
});
//# sourceMappingURL=d37d2f55b3c313fc0b4604c61c740fba90f7d567.js.map