System.register(["__unresolved_0", "has-tostringtag/shams"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_hasTostringtagShams) {
      _req = _hasTostringtagShams.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var toStr = Object.prototype.toString;
        var fnToStr = Function.prototype.toString;
        var isFnRegex = /^\s*(?:function)?\*/;

        var hasToStringTag = require('has-tostringtag/shams')();

        var getProto = Object.getPrototypeOf;

        var getGeneratorFunc = function getGeneratorFunc() {
          // eslint-disable-line consistent-return
          if (!hasToStringTag) {
            return false;
          }

          try {
            return Function('return function*() {}')();
          } catch (e) {}
        };

        var GeneratorFunction;

        module.exports = function isGeneratorFunction(fn) {
          if (typeof fn !== 'function') {
            return false;
          }

          if (isFnRegex.test(fnToStr.call(fn))) {
            return true;
          }

          if (!hasToStringTag) {
            var str = toStr.call(fn);
            return str === '[object GeneratorFunction]';
          }

          if (!getProto) {
            return false;
          }

          if (typeof GeneratorFunction === 'undefined') {
            var generatorFunc = getGeneratorFunc();
            GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
          }

          return getProto(fn) === GeneratorFunction;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'has-tostringtag/shams': _req
      }));
    }
  };
});
//# sourceMappingURL=2edc60d5cebaa6da5e2879f0163851bd7fc617fe.js.map