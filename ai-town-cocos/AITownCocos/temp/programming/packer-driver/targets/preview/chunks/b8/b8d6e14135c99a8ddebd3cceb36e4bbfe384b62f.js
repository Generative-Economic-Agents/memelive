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

        AWS.util.update(AWS.RDSDataService.prototype, {
          /**
           * @return [Boolean] whether the error can be retried
           * @api private
           */
          retryableError: function retryableError(error) {
            if (error.code === 'BadRequestException' && error.message && error.message.match(/^Communications link failure/) && error.statusCode === 400) {
              return true;
            } else {
              var _super = AWS.Service.prototype.retryableError;
              return _super.call(this, error);
            }
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req
      }));
    }
  };
});
//# sourceMappingURL=b8d6e14135c99a8ddebd3cceb36e4bbfe384b62f.js.map