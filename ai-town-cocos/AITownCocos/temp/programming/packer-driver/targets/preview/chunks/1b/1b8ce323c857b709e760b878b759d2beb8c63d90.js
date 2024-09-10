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
        function apiLoader(svc, version) {
          if (!apiLoader.services.hasOwnProperty(svc)) {
            throw new Error('InvalidService: Failed to load api for ' + svc);
          }

          return apiLoader.services[svc][version];
        }
        /**
         * @api private
         *
         * This member of AWS.apiLoader is private, but changing it will necessitate a
         * change to ../scripts/services-table-generator.ts
         */


        apiLoader.services = {};
        /**
         * @api private
         */

        module.exports = apiLoader; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=1b8ce323c857b709e760b878b759d2beb8c63d90.js.map