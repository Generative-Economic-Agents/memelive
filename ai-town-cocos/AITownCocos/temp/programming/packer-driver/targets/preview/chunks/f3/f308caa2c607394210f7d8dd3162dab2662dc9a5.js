System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['s3'] = {};
        AWS.S3 = Service.defineService('s3', ['2006-03-01']);

        require('../lib/services/s3');

        Object.defineProperty(apiLoader.services['s3'], '2006-03-01', {
          get: function get() {
            var model = require('../apis/s3-2006-03-01.min.json');

            model.paginators = require('../apis/s3-2006-03-01.paginators.json').pagination;
            model.waiters = require('../apis/s3-2006-03-01.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.S3; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/s3': _req1,
        '../apis/s3-2006-03-01.min.json': _req2,
        '../apis/s3-2006-03-01.paginators.json': _req3,
        '../apis/s3-2006-03-01.waiters2.json': _req4
      }));
    }
  };
});
//# sourceMappingURL=f308caa2c607394210f7d8dd3162dab2662dc9a5.js.map