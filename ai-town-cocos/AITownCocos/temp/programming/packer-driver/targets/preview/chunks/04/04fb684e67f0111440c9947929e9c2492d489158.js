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
        apiLoader.services['lookoutmetrics'] = {};
        AWS.LookoutMetrics = Service.defineService('lookoutmetrics', ['2017-07-25']);
        Object.defineProperty(apiLoader.services['lookoutmetrics'], '2017-07-25', {
          get: function get() {
            var model = require('../apis/lookoutmetrics-2017-07-25.min.json');

            model.paginators = require('../apis/lookoutmetrics-2017-07-25.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.LookoutMetrics; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/lookoutmetrics-2017-07-25.min.json': _req1,
        '../apis/lookoutmetrics-2017-07-25.paginators.json': _req2
      }));
    }
  };
});
//# sourceMappingURL=04fb684e67f0111440c9947929e9c2492d489158.js.map