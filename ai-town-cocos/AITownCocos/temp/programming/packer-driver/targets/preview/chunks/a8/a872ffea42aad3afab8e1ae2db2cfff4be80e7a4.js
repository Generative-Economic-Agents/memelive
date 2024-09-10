System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _parseMessage, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Int64 = require('./int64').Int64;

        var splitMessage = require('./split-message').splitMessage;

        var BOOLEAN_TAG = 'boolean';
        var BYTE_TAG = 'byte';
        var SHORT_TAG = 'short';
        var INT_TAG = 'integer';
        var LONG_TAG = 'long';
        var BINARY_TAG = 'binary';
        var STRING_TAG = 'string';
        var TIMESTAMP_TAG = 'timestamp';
        var UUID_TAG = 'uuid';
        /**
         * @api private
         *
         * @param {Buffer} headers
         */

        function parseHeaders(headers) {
          var out = {};
          var position = 0;

          while (position < headers.length) {
            var nameLength = headers.readUInt8(position++);
            var name = headers.slice(position, position + nameLength).toString();
            position += nameLength;

            switch (headers.readUInt8(position++)) {
              case 0
              /* boolTrue */
              :
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: true
                };
                break;

              case 1
              /* boolFalse */
              :
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: false
                };
                break;

              case 2
              /* byte */
              :
                out[name] = {
                  type: BYTE_TAG,
                  value: headers.readInt8(position++)
                };
                break;

              case 3
              /* short */
              :
                out[name] = {
                  type: SHORT_TAG,
                  value: headers.readInt16BE(position)
                };
                position += 2;
                break;

              case 4
              /* integer */
              :
                out[name] = {
                  type: INT_TAG,
                  value: headers.readInt32BE(position)
                };
                position += 4;
                break;

              case 5
              /* long */
              :
                out[name] = {
                  type: LONG_TAG,
                  value: new Int64(headers.slice(position, position + 8))
                };
                position += 8;
                break;

              case 6
              /* byteArray */
              :
                var binaryLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                  type: BINARY_TAG,
                  value: headers.slice(position, position + binaryLength)
                };
                position += binaryLength;
                break;

              case 7
              /* string */
              :
                var stringLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                  type: STRING_TAG,
                  value: headers.slice(position, position + stringLength).toString()
                };
                position += stringLength;
                break;

              case 8
              /* timestamp */
              :
                out[name] = {
                  type: TIMESTAMP_TAG,
                  value: new Date(new Int64(headers.slice(position, position + 8)).valueOf())
                };
                position += 8;
                break;

              case 9
              /* uuid */
              :
                var uuidChars = headers.slice(position, position + 16).toString('hex');
                position += 16;
                out[name] = {
                  type: UUID_TAG,
                  value: uuidChars.substr(0, 8) + '-' + uuidChars.substr(8, 4) + '-' + uuidChars.substr(12, 4) + '-' + uuidChars.substr(16, 4) + '-' + uuidChars.substr(20)
                };
                break;

              default:
                throw new Error('Unrecognized header type tag');
            }
          }

          return out;
        }

        function parseMessage(message) {
          var parsed = splitMessage(message);
          return {
            headers: parseHeaders(parsed.headers),
            body: parsed.body
          };
        }
        /**
         * @api private
         */


        module.exports = {
          parseMessage: parseMessage
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _parseMessage = module.exports.parseMessage;
      }, () => ({
        './int64': _req,
        './split-message': _req0
      }));
    }
  };
});
//# sourceMappingURL=a872ffea42aad3afab8e1ae2db2cfff4be80e7a4.js.map