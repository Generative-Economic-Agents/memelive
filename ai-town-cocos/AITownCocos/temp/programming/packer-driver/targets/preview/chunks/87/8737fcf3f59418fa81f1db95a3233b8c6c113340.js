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
        module.exports = isTypedArray;
        isTypedArray.strict = isStrictTypedArray;
        isTypedArray.loose = isLooseTypedArray;
        var toString = Object.prototype.toString;
        var names = {
          '[object Int8Array]': true,
          '[object Int16Array]': true,
          '[object Int32Array]': true,
          '[object Uint8Array]': true,
          '[object Uint8ClampedArray]': true,
          '[object Uint16Array]': true,
          '[object Uint32Array]': true,
          '[object Float32Array]': true,
          '[object Float64Array]': true
        };

        function isTypedArray(arr) {
          return isStrictTypedArray(arr) || isLooseTypedArray(arr);
        }

        function isStrictTypedArray(arr) {
          return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
        }

        function isLooseTypedArray(arr) {
          return names[toString.call(arr)];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=8737fcf3f59418fa81f1db95a3233b8c6c113340.js.map