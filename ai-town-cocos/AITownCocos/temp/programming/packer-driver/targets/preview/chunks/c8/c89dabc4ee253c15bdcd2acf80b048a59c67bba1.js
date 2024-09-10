System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['dms'] = {};
        AWS.DMS = Service.defineService('dms', ['2016-01-01']);
        Object.defineProperty(apiLoader.services['dms'], '2016-01-01', {
          get: function get() {
            var model = require('../apis/dms-2016-01-01.min.json');

            model.paginators = require('../apis/dms-2016-01-01.paginators.json').pagination;
            model.waiters = require('../apis/dms-2016-01-01.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.DMS; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/dms-2016-01-01.min.json': _req1,
        '../apis/dms-2016-01-01.paginators.json': _req2,
        '../apis/dms-2016-01-01.waiters2.json': _req3
      }));
    }
  };
});
//# sourceMappingURL=c89dabc4ee253c15bdcd2acf80b048a59c67bba1.js.map