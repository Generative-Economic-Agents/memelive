System.register(["__unresolved_0", "stream"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _isReadable, _isWritable, _isDuplex, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_stream) {
      _req = _stream.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var stream = require('stream');

        function isStream(obj) {
          return obj instanceof stream.Stream;
        }

        function isReadable(obj) {
          return isStream(obj) && typeof obj._read == 'function' && typeof obj._readableState == 'object';
        }

        function isWritable(obj) {
          return isStream(obj) && typeof obj._write == 'function' && typeof obj._writableState == 'object';
        }

        function isDuplex(obj) {
          return isReadable(obj) && isWritable(obj);
        }

        module.exports = isStream;
        module.exports.isReadable = isReadable;
        module.exports.isWritable = isWritable;
        module.exports.isDuplex = isDuplex; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _isReadable = module.exports.isReadable;
        _isWritable = module.exports.isWritable;
        _isDuplex = module.exports.isDuplex;
      }, () => ({
        'stream': _req
      }));
    }
  };
});
//# sourceMappingURL=bcda7167efda415bd7e6e5ac484052c8484cfb03.js.map