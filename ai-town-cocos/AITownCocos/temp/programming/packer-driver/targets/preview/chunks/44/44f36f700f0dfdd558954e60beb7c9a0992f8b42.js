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
        'use strict';

        var replace = String.prototype.replace;
        var percentTwenties = /%20/g;
        module.exports = {
          'default': 'RFC3986',
          formatters: {
            RFC1738: function RFC1738(value) {
              return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function RFC3986(value) {
              return String(value);
            }
          },
          RFC1738: 'RFC1738',
          RFC3986: 'RFC3986'
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=44f36f700f0dfdd558954e60beb7c9a0992f8b42.js.map