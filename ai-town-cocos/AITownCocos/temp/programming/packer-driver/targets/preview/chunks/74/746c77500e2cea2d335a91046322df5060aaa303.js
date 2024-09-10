System.register(["__unresolved_0", "json-stringify-safe", "crypto", "safe-buffer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, _paramsHaveRequestBody, _safeStringify, _md5, _isReadStream, _toBase64, _copy, _version, _defer, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_jsonStringifySafe) {
      _req = _jsonStringifySafe.__cjsMetaURL;
    }, function (_crypto) {
      _req0 = _crypto.__cjsMetaURL;
    }, function (_safeBuffer) {
      _req1 = _safeBuffer.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var jsonSafeStringify = require('json-stringify-safe');

        var crypto = require('crypto');

        var Buffer = require('safe-buffer').Buffer;

        var defer = typeof setImmediate === 'undefined' ? process.nextTick : setImmediate;

        function paramsHaveRequestBody(params) {
          return params.body || params.requestBodyStream || params.json && typeof params.json !== 'boolean' || params.multipart;
        }

        function safeStringify(obj, replacer) {
          var ret;

          try {
            ret = JSON.stringify(obj, replacer);
          } catch (e) {
            ret = jsonSafeStringify(obj, replacer);
          }

          return ret;
        }

        function md5(str) {
          return crypto.createHash('md5').update(str).digest('hex');
        }

        function isReadStream(rs) {
          return rs.readable && rs.path && rs.mode;
        }

        function toBase64(str) {
          return Buffer.from(str || '', 'utf8').toString('base64');
        }

        function copy(obj) {
          var o = {};
          Object.keys(obj).forEach(function (i) {
            o[i] = obj[i];
          });
          return o;
        }

        function version() {
          var numbers = process.version.replace('v', '').split('.');
          return {
            major: parseInt(numbers[0], 10),
            minor: parseInt(numbers[1], 10),
            patch: parseInt(numbers[2], 10)
          };
        }

        exports.paramsHaveRequestBody = paramsHaveRequestBody;
        exports.safeStringify = safeStringify;
        exports.md5 = md5;
        exports.isReadStream = isReadStream;
        exports.toBase64 = toBase64;
        exports.copy = copy;
        exports.version = version;
        exports.defer = defer; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _paramsHaveRequestBody = module.exports.paramsHaveRequestBody;
        _safeStringify = module.exports.safeStringify;
        _md5 = module.exports.md5;
        _isReadStream = module.exports.isReadStream;
        _toBase64 = module.exports.toBase64;
        _copy = module.exports.copy;
        _version = module.exports.version;
        _defer = module.exports.defer;
      }, () => ({
        'json-stringify-safe': _req,
        'crypto': _req0,
        'safe-buffer': _req1
      }));
    }
  };
});
//# sourceMappingURL=746c77500e2cea2d335a91046322df5060aaa303.js.map