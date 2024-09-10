System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _typeOf, _isBinary, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var util = require('../core').util;

        function typeOf(data) {
          if (data === null && typeof data === 'object') {
            return 'null';
          } else if (data !== undefined && isBinary(data)) {
            return 'Binary';
          } else if (data !== undefined && data.constructor) {
            return data.wrapperName || util.typeName(data.constructor);
          } else if (data !== undefined && typeof data === 'object') {
            // this object is the result of Object.create(null), hence the absence of a
            // defined constructor
            return 'Object';
          } else {
            return 'undefined';
          }
        }

        function isBinary(data) {
          var types = ['Buffer', 'File', 'Blob', 'ArrayBuffer', 'DataView', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];

          if (util.isNode()) {
            var Stream = util.stream.Stream;

            if (util.Buffer.isBuffer(data) || data instanceof Stream) {
              return true;
            }
          }

          for (var i = 0; i < types.length; i++) {
            if (data !== undefined && data.constructor) {
              if (util.isType(data, types[i])) return true;
              if (util.typeName(data.constructor) === types[i]) return true;
            }
          }

          return false;
        }
        /**
         * @api private
         */


        module.exports = {
          typeOf: typeOf,
          isBinary: isBinary
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _typeOf = module.exports.typeOf;
        _isBinary = module.exports.isBinary;
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=eb8863810d696cd3a76f6ae5148c02a26c2b9be8.js.map