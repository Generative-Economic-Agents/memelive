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
        var AWS = require('../core');
        /**
         * Represents credentials received from relative URI specified in the ECS container.
         *
         * This class will request refreshable credentials from the relative URI
         * specified by the AWS_CONTAINER_CREDENTIALS_RELATIVE_URI or the
         * AWS_CONTAINER_CREDENTIALS_FULL_URI environment variable. If valid credentials
         * are returned in the response, these will be used with zero configuration.
         *
         * This credentials class will by default timeout after 1 second of inactivity
         * and retry 3 times.
         * If your requests to the relative URI are timing out, you can increase
         * the value by configuring them directly:
         *
         * ```javascript
         * AWS.config.credentials = new AWS.ECSCredentials({
         *   httpOptions: { timeout: 5000 }, // 5 second timeout
         *   maxRetries: 10, // retry 10 times
         *   retryDelayOptions: { base: 200 } // see AWS.Config for information
         * });
         * ```
         *
         * @see AWS.Config.retryDelayOptions
         *
         * @!macro nobrowser
         */


        AWS.ECSCredentials = AWS.RemoteCredentials; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=2daa69097662da8cf7283d62e29e5b38976e519b.js.map