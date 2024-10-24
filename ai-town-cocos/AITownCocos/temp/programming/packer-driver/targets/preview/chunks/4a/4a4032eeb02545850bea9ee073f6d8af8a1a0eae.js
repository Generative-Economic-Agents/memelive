System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _Int64, __cjsMetaURL;

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

        var toBuffer = util.buffer.toBuffer;
        /**
         * A lossless representation of a signed, 64-bit integer. Instances of this
         * class may be used in arithmetic expressions as if they were numeric
         * primitives, but the binary representation will be preserved unchanged as the
         * `bytes` property of the object. The bytes should be encoded as big-endian,
         * two's complement integers.
         * @param {Buffer} bytes
         *
         * @api private
         */

        function Int64(bytes) {
          if (bytes.length !== 8) {
            throw new Error('Int64 buffers must be exactly 8 bytes');
          }

          if (!util.Buffer.isBuffer(bytes)) bytes = toBuffer(bytes);
          this.bytes = bytes;
        }
        /**
         * @param {number} number
         * @returns {Int64}
         *
         * @api private
         */


        Int64.fromNumber = function (number) {
          if (number > 9223372036854775807 || number < -9223372036854775808) {
            throw new Error(number + ' is too large (or, if negative, too small) to represent as an Int64');
          }

          var bytes = new Uint8Array(8);

          for (var i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
          }

          if (number < 0) {
            negate(bytes);
          }

          return new Int64(bytes);
        };
        /**
         * @returns {number}
         *
         * @api private
         */


        Int64.prototype.valueOf = function () {
          var bytes = this.bytes.slice(0);
          var negative = bytes[0] & 128;

          if (negative) {
            negate(bytes);
          }

          return parseInt(bytes.toString('hex'), 16) * (negative ? -1 : 1);
        };

        Int64.prototype.toString = function () {
          return String(this.valueOf());
        };
        /**
         * @param {Buffer} bytes
         *
         * @api private
         */


        function negate(bytes) {
          for (var i = 0; i < 8; i++) {
            bytes[i] ^= 0xFF;
          }

          for (var i = 7; i > -1; i--) {
            bytes[i]++;

            if (bytes[i] !== 0) {
              break;
            }
          }
        }
        /**
         * @api private
         */


        module.exports = {
          Int64: Int64
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Int64 = module.exports.Int64;
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=4a4032eeb02545850bea9ee073f6d8af8a1a0eae.js.map