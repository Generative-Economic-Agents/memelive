System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _splitMessage, __cjsMetaURL;

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

        var toBuffer = util.buffer.toBuffer; // All prelude components are unsigned, 32-bit integers

        var PRELUDE_MEMBER_LENGTH = 4; // The prelude consists of two components

        var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2; // Checksums are always CRC32 hashes.

        var CHECKSUM_LENGTH = 4; // Messages must include a full prelude, a prelude checksum, and a message checksum

        var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
        /**
         * @api private
         *
         * @param {Buffer} message
         */

        function splitMessage(message) {
          if (!util.Buffer.isBuffer(message)) message = toBuffer(message);

          if (message.length < MINIMUM_MESSAGE_LENGTH) {
            throw new Error('Provided message too short to accommodate event stream message overhead');
          }

          if (message.length !== message.readUInt32BE(0)) {
            throw new Error('Reported message length does not match received message length');
          }

          var expectedPreludeChecksum = message.readUInt32BE(PRELUDE_LENGTH);

          if (expectedPreludeChecksum !== util.crypto.crc32(message.slice(0, PRELUDE_LENGTH))) {
            throw new Error('The prelude checksum specified in the message (' + expectedPreludeChecksum + ') does not match the calculated CRC32 checksum.');
          }

          var expectedMessageChecksum = message.readUInt32BE(message.length - CHECKSUM_LENGTH);

          if (expectedMessageChecksum !== util.crypto.crc32(message.slice(0, message.length - CHECKSUM_LENGTH))) {
            throw new Error('The message checksum did not match the expected value of ' + expectedMessageChecksum);
          }

          var headersStart = PRELUDE_LENGTH + CHECKSUM_LENGTH;
          var headersEnd = headersStart + message.readUInt32BE(PRELUDE_MEMBER_LENGTH);
          return {
            headers: message.slice(headersStart, headersEnd),
            body: message.slice(headersEnd, message.length - CHECKSUM_LENGTH)
          };
        }
        /**
         * @api private
         */


        module.exports = {
          splitMessage: splitMessage
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _splitMessage = module.exports.splitMessage;
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=2e3dda1aba93cd310a01903962077642a25f4527.js.map