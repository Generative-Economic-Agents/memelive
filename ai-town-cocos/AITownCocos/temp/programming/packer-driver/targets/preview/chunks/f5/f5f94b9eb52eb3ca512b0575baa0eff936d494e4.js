System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _suppress, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var warning = ['The AWS SDK for JavaScript (v2) will enter maintenance mode', 'on September 8, 2024 and reach end-of-support on September 8, 2025.\n', 'Please migrate your code to use AWS SDK for JavaScript (v3).', 'For more information, check blog post at https://a.co/cUPnyil'].join('\n');
        module.exports = {
          suppress: false
        };
        /**
         * To suppress this message:
         * @example
         * require('aws-sdk/lib/maintenance_mode_message').suppress = true;
         */

        function emitWarning() {
          if (typeof process === 'undefined') return; // Skip maintenance mode message in Lambda environments

          if (typeof process.env === 'object' && typeof process.env.AWS_EXECUTION_ENV !== 'undefined' && process.env.AWS_EXECUTION_ENV.indexOf('AWS_Lambda_') === 0) {
            return;
          }

          if (typeof process.env === 'object' && typeof process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE !== 'undefined') {
            return;
          }

          if (typeof process.emitWarning === 'function') {
            process.emitWarning(warning, {
              type: 'NOTE'
            });
          }
        }

        setTimeout(function () {
          if (!module.exports.suppress) {
            emitWarning();
          }
        }, 0); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _suppress = module.exports.suppress;
      }, {});
    }
  };
});
//# sourceMappingURL=f5f94b9eb52eb3ca512b0575baa0eff936d494e4.js.map