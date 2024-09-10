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
        apiLoader.services['groundstation'] = {};
        AWS.GroundStation = Service.defineService('groundstation', ['2019-05-23']);
        Object.defineProperty(apiLoader.services['groundstation'], '2019-05-23', {
          get: function get() {
            var model = require('../apis/groundstation-2019-05-23.min.json');

            model.paginators = require('../apis/groundstation-2019-05-23.paginators.json').pagination;
            model.waiters = require('../apis/groundstation-2019-05-23.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.GroundStation; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/groundstation-2019-05-23.min.json': _req1,
        '../apis/groundstation-2019-05-23.paginators.json': _req2,
        '../apis/groundstation-2019-05-23.waiters2.json': _req3
      }));
    }
  };
});
//# sourceMappingURL=1f0b68fe924c90de9408549fb254926616a7f2e5.js.map