System.register(["__unresolved_0", "util", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_util) {
      _req = _util.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        try {
          var util = require('util');
          /* istanbul ignore next */


          if (typeof util.inherits !== 'function') throw '';
          module.exports = util.inherits;
        } catch (e) {
          /* istanbul ignore next */
          module.exports = require('./inherits_browser.js');
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'util': _req,
        './inherits_browser.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=b8b8eb53634ba2b934a9a5734549c0d5ba7d5dbd.js.map