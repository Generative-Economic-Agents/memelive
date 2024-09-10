System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

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

        /**
         * Detect Electron renderer process, which is node, but we should
         * treat as a browser.
         */
        if (typeof process !== 'undefined' && process.type === 'renderer') {
          module.exports = require('./browser.js');
        } else {
          module.exports = require('./node.js');
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './browser.js': _req,
        './node.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=0dc270b9ae1683500fdbc78e0fe2d9aa52cbb8ca.js.map