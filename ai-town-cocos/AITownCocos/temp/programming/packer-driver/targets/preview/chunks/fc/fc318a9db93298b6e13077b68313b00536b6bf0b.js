System.register(["__unresolved_0", "buffer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _Buffer, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_buffer) {
      _req = _buffer.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

        /* eslint-disable node/no-deprecated-api */
        var buffer = require('buffer');

        var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

        function copyProps(src, dst) {
          for (var key in src) {
            dst[key] = src[key];
          }
        }

        if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
          module.exports = buffer;
        } else {
          // Copy properties from require('buffer')
          copyProps(buffer, exports);
          exports.Buffer = SafeBuffer;
        }

        function SafeBuffer(arg, encodingOrOffset, length) {
          return Buffer(arg, encodingOrOffset, length);
        }

        SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

        copyProps(Buffer, SafeBuffer);

        SafeBuffer.from = function (arg, encodingOrOffset, length) {
          if (typeof arg === 'number') {
            throw new TypeError('Argument must not be a number');
          }

          return Buffer(arg, encodingOrOffset, length);
        };

        SafeBuffer.alloc = function (size, fill, encoding) {
          if (typeof size !== 'number') {
            throw new TypeError('Argument must be a number');
          }

          var buf = Buffer(size);

          if (fill !== undefined) {
            if (typeof encoding === 'string') {
              buf.fill(fill, encoding);
            } else {
              buf.fill(fill);
            }
          } else {
            buf.fill(0);
          }

          return buf;
        };

        SafeBuffer.allocUnsafe = function (size) {
          if (typeof size !== 'number') {
            throw new TypeError('Argument must be a number');
          }

          return Buffer(size);
        };

        SafeBuffer.allocUnsafeSlow = function (size) {
          if (typeof size !== 'number') {
            throw new TypeError('Argument must be a number');
          }

          return buffer.SlowBuffer(size);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _Buffer = module.exports.Buffer;
      }, () => ({
        'buffer': _req
      }));
    }
  };
});
//# sourceMappingURL=fc318a9db93298b6e13077b68313b00536b6bf0b.js.map