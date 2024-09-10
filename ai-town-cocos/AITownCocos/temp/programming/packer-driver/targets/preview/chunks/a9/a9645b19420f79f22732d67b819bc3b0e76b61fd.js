System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_10) {
      _req7 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req8 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req9 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req10 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req11 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req12 = _unresolved_15.__cjsMetaURL;
    }, function (_unresolved_16) {
      _req13 = _unresolved_16.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['rds'] = {};
        AWS.RDS = Service.defineService('rds', ['2013-01-10', '2013-02-12', '2013-09-09', '2014-09-01', '2014-09-01*', '2014-10-31']);

        require('../lib/services/rds');

        Object.defineProperty(apiLoader.services['rds'], '2013-01-10', {
          get: function get() {
            var model = require('../apis/rds-2013-01-10.min.json');

            model.paginators = require('../apis/rds-2013-01-10.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['rds'], '2013-02-12', {
          get: function get() {
            var model = require('../apis/rds-2013-02-12.min.json');

            model.paginators = require('../apis/rds-2013-02-12.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['rds'], '2013-09-09', {
          get: function get() {
            var model = require('../apis/rds-2013-09-09.min.json');

            model.paginators = require('../apis/rds-2013-09-09.paginators.json').pagination;
            model.waiters = require('../apis/rds-2013-09-09.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['rds'], '2014-09-01', {
          get: function get() {
            var model = require('../apis/rds-2014-09-01.min.json');

            model.paginators = require('../apis/rds-2014-09-01.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['rds'], '2014-10-31', {
          get: function get() {
            var model = require('../apis/rds-2014-10-31.min.json');

            model.paginators = require('../apis/rds-2014-10-31.paginators.json').pagination;
            model.waiters = require('../apis/rds-2014-10-31.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.RDS; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/rds': _req1,
        '../apis/rds-2013-01-10.min.json': _req2,
        '../apis/rds-2013-01-10.paginators.json': _req3,
        '../apis/rds-2013-02-12.min.json': _req4,
        '../apis/rds-2013-02-12.paginators.json': _req5,
        '../apis/rds-2013-09-09.min.json': _req6,
        '../apis/rds-2013-09-09.paginators.json': _req7,
        '../apis/rds-2013-09-09.waiters2.json': _req8,
        '../apis/rds-2014-09-01.min.json': _req9,
        '../apis/rds-2014-09-01.paginators.json': _req10,
        '../apis/rds-2014-10-31.min.json': _req11,
        '../apis/rds-2014-10-31.paginators.json': _req12,
        '../apis/rds-2014-10-31.waiters2.json': _req13
      }));
    }
  };
});
//# sourceMappingURL=a9645b19420f79f22732d67b819bc3b0e76b61fd.js.map