System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict'; // https://mathiasbynens.be/notes/javascript-encoding
        // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode

        module.exports = function ucs2length(str) {
          var length = 0,
              len = str.length,
              pos = 0,
              value;

          while (pos < len) {
            length++;
            value = str.charCodeAt(pos++);

            if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
              // high surrogate, and there is a next character
              value = str.charCodeAt(pos);
              if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
            }
          }

          return length;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=5277d89c5dfa465315743a067cb3aba0e138ecd3.js.map