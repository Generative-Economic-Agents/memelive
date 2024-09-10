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
        var util = require('../util');

        var property = util.property;

        function ResourceWaiter(name, waiter, options) {
          options = options || {};
          property(this, 'name', name);
          property(this, 'api', options.api, false);

          if (waiter.operation) {
            property(this, 'operation', util.string.lowerFirst(waiter.operation));
          }

          var self = this;
          var keys = ['type', 'description', 'delay', 'maxAttempts', 'acceptors'];
          keys.forEach(function (key) {
            var value = waiter[key];

            if (value) {
              property(self, key, value);
            }
          });
        }
        /**
         * @api private
         */


        module.exports = ResourceWaiter; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=f3f57880fbad8c0eb3069120239f9534db04a032.js.map