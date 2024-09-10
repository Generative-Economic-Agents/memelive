System.register(["__unresolved_0", "is-callable"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_isCallable) {
      _req = _isCallable.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var isCallable = require('is-callable');

        var toStr = Object.prototype.toString;
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        var forEachArray = function forEachArray(array, iterator, receiver) {
          for (var i = 0, len = array.length; i < len; i++) {
            if (hasOwnProperty.call(array, i)) {
              if (receiver == null) {
                iterator(array[i], i, array);
              } else {
                iterator.call(receiver, array[i], i, array);
              }
            }
          }
        };

        var forEachString = function forEachString(string, iterator, receiver) {
          for (var i = 0, len = string.length; i < len; i++) {
            // no such thing as a sparse string.
            if (receiver == null) {
              iterator(string.charAt(i), i, string);
            } else {
              iterator.call(receiver, string.charAt(i), i, string);
            }
          }
        };

        var forEachObject = function forEachObject(object, iterator, receiver) {
          for (var k in object) {
            if (hasOwnProperty.call(object, k)) {
              if (receiver == null) {
                iterator(object[k], k, object);
              } else {
                iterator.call(receiver, object[k], k, object);
              }
            }
          }
        };

        var forEach = function forEach(list, iterator, thisArg) {
          if (!isCallable(iterator)) {
            throw new TypeError('iterator must be a function');
          }

          var receiver;

          if (arguments.length >= 3) {
            receiver = thisArg;
          }

          if (toStr.call(list) === '[object Array]') {
            forEachArray(list, iterator, receiver);
          } else if (typeof list === 'string') {
            forEachString(list, iterator, receiver);
          } else {
            forEachObject(list, iterator, receiver);
          }
        };

        module.exports = forEach; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'is-callable': _req
      }));
    }
  };
});
//# sourceMappingURL=41a128056da6ca1a95f43c2b9bcc6bf94c907d7e.js.map