System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

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
        var property = require('../util').property;

        function Paginator(name, paginator) {
          property(this, 'inputToken', paginator.input_token);
          property(this, 'limitKey', paginator.limit_key);
          property(this, 'moreResults', paginator.more_results);
          property(this, 'outputToken', paginator.output_token);
          property(this, 'resultKey', paginator.result_key);
        }
        /**
         * @api private
         */


        module.exports = Paginator; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=d610a9f2e2334052628a0a5857de8770494ad7c6.js.map