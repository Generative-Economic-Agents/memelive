System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['timestreaminfluxdb'] = {};
        AWS.TimestreamInfluxDB = Service.defineService('timestreaminfluxdb', ['2023-01-27']);
        Object.defineProperty(apiLoader.services['timestreaminfluxdb'], '2023-01-27', {
          get: function get() {
            var model = require('../apis/timestream-influxdb-2023-01-27.min.json');

            model.paginators = require('../apis/timestream-influxdb-2023-01-27.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.TimestreamInfluxDB; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/timestream-influxdb-2023-01-27.min.json': _req1,
        '../apis/timestream-influxdb-2023-01-27.paginators.json': _req2
      }));
    }
  };
});
//# sourceMappingURL=500826c5acb8fdf09da93f3c7e6c0d2e3cd1d456.js.map