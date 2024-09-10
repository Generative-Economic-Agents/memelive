System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req6 = _unresolved_9.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['lambda'] = {};
        AWS.Lambda = Service.defineService('lambda', ['2014-11-11', '2015-03-31']);

        require('../lib/services/lambda');

        Object.defineProperty(apiLoader.services['lambda'], '2014-11-11', {
          get: function get() {
            var model = require('../apis/lambda-2014-11-11.min.json');

            model.paginators = require('../apis/lambda-2014-11-11.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['lambda'], '2015-03-31', {
          get: function get() {
            var model = require('../apis/lambda-2015-03-31.min.json');

            model.paginators = require('../apis/lambda-2015-03-31.paginators.json').pagination;
            model.waiters = require('../apis/lambda-2015-03-31.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.Lambda; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/lambda': _req1,
        '../apis/lambda-2014-11-11.min.json': _req2,
        '../apis/lambda-2014-11-11.paginators.json': _req3,
        '../apis/lambda-2015-03-31.min.json': _req4,
        '../apis/lambda-2015-03-31.paginators.json': _req5,
        '../apis/lambda-2015-03-31.waiters2.json': _req6
      }));
    }
  };
});
//# sourceMappingURL=34a4f8402234aefaad689a84e556fdb0ab2bcd1c.js.map