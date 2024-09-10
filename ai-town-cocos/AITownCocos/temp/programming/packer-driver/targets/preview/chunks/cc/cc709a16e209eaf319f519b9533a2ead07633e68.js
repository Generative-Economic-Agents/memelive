System.register(["__unresolved_0", "is-arguments", "is-generator-function", "which-typed-array", "is-typed-array"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _isArgumentsObject, _isGeneratorFunction, _isTypedArray, _isPromise, _isArrayBufferView, _isUint8Array, _isUint8ClampedArray, _isUint16Array, _isUint32Array, _isInt8Array, _isInt16Array, _isInt32Array, _isFloat32Array, _isFloat64Array, _isBigInt64Array, _isBigUint64Array, _isMap, _isSet, _isWeakMap, _isWeakSet, _isArrayBuffer, _isDataView, _isSharedArrayBuffer, _isAsyncFunction, _isMapIterator, _isSetIterator, _isGeneratorObject, _isWebAssemblyCompiledModule, _isNumberObject, _isStringObject, _isBooleanObject, _isBigIntObject, _isSymbolObject, _isBoxedPrimitive, _isAnyArrayBuffer, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_isArguments) {
      _req = _isArguments.__cjsMetaURL;
    }, function (_isGeneratorFunction2) {
      _req0 = _isGeneratorFunction2.__cjsMetaURL;
    }, function (_whichTypedArray) {
      _req1 = _whichTypedArray.__cjsMetaURL;
    }, function (_isTypedArray2) {
      _req2 = _isTypedArray2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Currently in sync with Node.js lib/internal/util/types.js
        // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
        'use strict';

        var isArgumentsObject = require('is-arguments');

        var isGeneratorFunction = require('is-generator-function');

        var whichTypedArray = require('which-typed-array');

        var isTypedArray = require('is-typed-array');

        function uncurryThis(f) {
          return f.call.bind(f);
        }

        var BigIntSupported = typeof BigInt !== 'undefined';
        var SymbolSupported = typeof Symbol !== 'undefined';
        var ObjectToString = uncurryThis(Object.prototype.toString);
        var numberValue = uncurryThis(Number.prototype.valueOf);
        var stringValue = uncurryThis(String.prototype.valueOf);
        var booleanValue = uncurryThis(Boolean.prototype.valueOf);

        if (BigIntSupported) {
          var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
        }

        if (SymbolSupported) {
          var symbolValue = uncurryThis(Symbol.prototype.valueOf);
        }

        function checkBoxedPrimitive(value, prototypeValueOf) {
          if (typeof value !== 'object') {
            return false;
          }

          try {
            prototypeValueOf(value);
            return true;
          } catch (e) {
            return false;
          }
        }

        exports.isArgumentsObject = isArgumentsObject;
        exports.isGeneratorFunction = isGeneratorFunction;
        exports.isTypedArray = isTypedArray; // Taken from here and modified for better browser support
        // https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js

        function isPromise(input) {
          return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
        }

        exports.isPromise = isPromise;

        function isArrayBufferView(value) {
          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            return ArrayBuffer.isView(value);
          }

          return isTypedArray(value) || isDataView(value);
        }

        exports.isArrayBufferView = isArrayBufferView;

        function isUint8Array(value) {
          return whichTypedArray(value) === 'Uint8Array';
        }

        exports.isUint8Array = isUint8Array;

        function isUint8ClampedArray(value) {
          return whichTypedArray(value) === 'Uint8ClampedArray';
        }

        exports.isUint8ClampedArray = isUint8ClampedArray;

        function isUint16Array(value) {
          return whichTypedArray(value) === 'Uint16Array';
        }

        exports.isUint16Array = isUint16Array;

        function isUint32Array(value) {
          return whichTypedArray(value) === 'Uint32Array';
        }

        exports.isUint32Array = isUint32Array;

        function isInt8Array(value) {
          return whichTypedArray(value) === 'Int8Array';
        }

        exports.isInt8Array = isInt8Array;

        function isInt16Array(value) {
          return whichTypedArray(value) === 'Int16Array';
        }

        exports.isInt16Array = isInt16Array;

        function isInt32Array(value) {
          return whichTypedArray(value) === 'Int32Array';
        }

        exports.isInt32Array = isInt32Array;

        function isFloat32Array(value) {
          return whichTypedArray(value) === 'Float32Array';
        }

        exports.isFloat32Array = isFloat32Array;

        function isFloat64Array(value) {
          return whichTypedArray(value) === 'Float64Array';
        }

        exports.isFloat64Array = isFloat64Array;

        function isBigInt64Array(value) {
          return whichTypedArray(value) === 'BigInt64Array';
        }

        exports.isBigInt64Array = isBigInt64Array;

        function isBigUint64Array(value) {
          return whichTypedArray(value) === 'BigUint64Array';
        }

        exports.isBigUint64Array = isBigUint64Array;

        function isMapToString(value) {
          return ObjectToString(value) === '[object Map]';
        }

        isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());

        function isMap(value) {
          if (typeof Map === 'undefined') {
            return false;
          }

          return isMapToString.working ? isMapToString(value) : value instanceof Map;
        }

        exports.isMap = isMap;

        function isSetToString(value) {
          return ObjectToString(value) === '[object Set]';
        }

        isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());

        function isSet(value) {
          if (typeof Set === 'undefined') {
            return false;
          }

          return isSetToString.working ? isSetToString(value) : value instanceof Set;
        }

        exports.isSet = isSet;

        function isWeakMapToString(value) {
          return ObjectToString(value) === '[object WeakMap]';
        }

        isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());

        function isWeakMap(value) {
          if (typeof WeakMap === 'undefined') {
            return false;
          }

          return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
        }

        exports.isWeakMap = isWeakMap;

        function isWeakSetToString(value) {
          return ObjectToString(value) === '[object WeakSet]';
        }

        isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());

        function isWeakSet(value) {
          return isWeakSetToString(value);
        }

        exports.isWeakSet = isWeakSet;

        function isArrayBufferToString(value) {
          return ObjectToString(value) === '[object ArrayBuffer]';
        }

        isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());

        function isArrayBuffer(value) {
          if (typeof ArrayBuffer === 'undefined') {
            return false;
          }

          return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
        }

        exports.isArrayBuffer = isArrayBuffer;

        function isDataViewToString(value) {
          return ObjectToString(value) === '[object DataView]';
        }

        isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));

        function isDataView(value) {
          if (typeof DataView === 'undefined') {
            return false;
          }

          return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
        }

        exports.isDataView = isDataView; // Store a copy of SharedArrayBuffer in case it's deleted elsewhere

        var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;

        function isSharedArrayBufferToString(value) {
          return ObjectToString(value) === '[object SharedArrayBuffer]';
        }

        function isSharedArrayBuffer(value) {
          if (typeof SharedArrayBufferCopy === 'undefined') {
            return false;
          }

          if (typeof isSharedArrayBufferToString.working === 'undefined') {
            isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
          }

          return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
        }

        exports.isSharedArrayBuffer = isSharedArrayBuffer;

        function isAsyncFunction(value) {
          return ObjectToString(value) === '[object AsyncFunction]';
        }

        exports.isAsyncFunction = isAsyncFunction;

        function isMapIterator(value) {
          return ObjectToString(value) === '[object Map Iterator]';
        }

        exports.isMapIterator = isMapIterator;

        function isSetIterator(value) {
          return ObjectToString(value) === '[object Set Iterator]';
        }

        exports.isSetIterator = isSetIterator;

        function isGeneratorObject(value) {
          return ObjectToString(value) === '[object Generator]';
        }

        exports.isGeneratorObject = isGeneratorObject;

        function isWebAssemblyCompiledModule(value) {
          return ObjectToString(value) === '[object WebAssembly.Module]';
        }

        exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

        function isNumberObject(value) {
          return checkBoxedPrimitive(value, numberValue);
        }

        exports.isNumberObject = isNumberObject;

        function isStringObject(value) {
          return checkBoxedPrimitive(value, stringValue);
        }

        exports.isStringObject = isStringObject;

        function isBooleanObject(value) {
          return checkBoxedPrimitive(value, booleanValue);
        }

        exports.isBooleanObject = isBooleanObject;

        function isBigIntObject(value) {
          return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
        }

        exports.isBigIntObject = isBigIntObject;

        function isSymbolObject(value) {
          return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
        }

        exports.isSymbolObject = isSymbolObject;

        function isBoxedPrimitive(value) {
          return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
        }

        exports.isBoxedPrimitive = isBoxedPrimitive;

        function isAnyArrayBuffer(value) {
          return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
        }

        exports.isAnyArrayBuffer = isAnyArrayBuffer;
        ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (method) {
          Object.defineProperty(exports, method, {
            enumerable: false,
            value: function value() {
              throw new Error(method + ' is not supported in userland');
            }
          });
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _isArgumentsObject = module.exports.isArgumentsObject;
        _isGeneratorFunction = module.exports.isGeneratorFunction;
        _isTypedArray = module.exports.isTypedArray;
        _isPromise = module.exports.isPromise;
        _isArrayBufferView = module.exports.isArrayBufferView;
        _isUint8Array = module.exports.isUint8Array;
        _isUint8ClampedArray = module.exports.isUint8ClampedArray;
        _isUint16Array = module.exports.isUint16Array;
        _isUint32Array = module.exports.isUint32Array;
        _isInt8Array = module.exports.isInt8Array;
        _isInt16Array = module.exports.isInt16Array;
        _isInt32Array = module.exports.isInt32Array;
        _isFloat32Array = module.exports.isFloat32Array;
        _isFloat64Array = module.exports.isFloat64Array;
        _isBigInt64Array = module.exports.isBigInt64Array;
        _isBigUint64Array = module.exports.isBigUint64Array;
        _isMap = module.exports.isMap;
        _isSet = module.exports.isSet;
        _isWeakMap = module.exports.isWeakMap;
        _isWeakSet = module.exports.isWeakSet;
        _isArrayBuffer = module.exports.isArrayBuffer;
        _isDataView = module.exports.isDataView;
        _isSharedArrayBuffer = module.exports.isSharedArrayBuffer;
        _isAsyncFunction = module.exports.isAsyncFunction;
        _isMapIterator = module.exports.isMapIterator;
        _isSetIterator = module.exports.isSetIterator;
        _isGeneratorObject = module.exports.isGeneratorObject;
        _isWebAssemblyCompiledModule = module.exports.isWebAssemblyCompiledModule;
        _isNumberObject = module.exports.isNumberObject;
        _isStringObject = module.exports.isStringObject;
        _isBooleanObject = module.exports.isBooleanObject;
        _isBigIntObject = module.exports.isBigIntObject;
        _isSymbolObject = module.exports.isSymbolObject;
        _isBoxedPrimitive = module.exports.isBoxedPrimitive;
        _isAnyArrayBuffer = module.exports.isAnyArrayBuffer;
      }, () => ({
        'is-arguments': _req,
        'is-generator-function': _req0,
        'which-typed-array': _req1,
        'is-typed-array': _req2
      }));
    }
  };
});
//# sourceMappingURL=cc709a16e209eaf319f519b9533a2ead07633e68.js.map