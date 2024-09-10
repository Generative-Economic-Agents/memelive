System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, _URL, _DNS, __cjsMetaURL;

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
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = _default;
        exports.URL = exports.DNS = void 0;

        var _bytesToUuid = _interopRequireDefault(require("./bytesToUuid.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function uuidToBytes(uuid) {
          // Note: We assume we're being passed a valid uuid string
          var bytes = [];
          uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
            bytes.push(parseInt(hex, 16));
          });
          return bytes;
        }

        function stringToBytes(str) {
          str = unescape(encodeURIComponent(str)); // UTF8 escape

          var bytes = new Array(str.length);

          for (var i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
          }

          return bytes;
        }

        var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        exports.DNS = DNS;
        var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
        exports.URL = URL;

        function _default(name, version, hashfunc) {
          var generateUUID = function generateUUID(value, namespace, buf, offset) {
            var off = buf && offset || 0;
            if (typeof value == 'string') value = stringToBytes(value);
            if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
            if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
            if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

            var bytes = hashfunc(namespace.concat(value));
            bytes[6] = bytes[6] & 0x0f | version;
            bytes[8] = bytes[8] & 0x3f | 0x80;

            if (buf) {
              for (var idx = 0; idx < 16; ++idx) {
                buf[off + idx] = bytes[idx];
              }
            }

            return buf || (0, _bytesToUuid.default)(bytes);
          }; // Function#name is not settable on some platforms (#270)


          try {
            generateUUID.name = name;
          } catch (err) {} // For CommonJS default export support


          generateUUID.DNS = DNS;
          generateUUID.URL = URL;
          return generateUUID;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _URL = module.exports.URL;
        _DNS = module.exports.DNS;
      }, () => ({
        './bytesToUuid.js': _req
      }));
    }
  };
});
//# sourceMappingURL=0253b7a567451cf87808e5989d53142ab62b90d4.js.map