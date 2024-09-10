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
        apiLoader.services['clouddirectory'] = {};
        AWS.CloudDirectory = Service.defineService('clouddirectory', ['2016-05-10', '2016-05-10*', '2017-01-11']);
        Object.defineProperty(apiLoader.services['clouddirectory'], '2016-05-10', {
          get: function get() {
            var model = require('../apis/clouddirectory-2016-05-10.min.json');

            model.paginators = require('../apis/clouddirectory-2016-05-10.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['clouddirectory'], '2017-01-11', {
          get: function get() {
            var model = require('../apis/clouddirectory-2017-01-11.min.json');

            model.paginators = require('../apis/clouddirectory-2017-01-11.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.CloudDirectory; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/clouddirectory-2016-05-10.min.json': _req1,
        '../apis/clouddirectory-2016-05-10.paginators.json': _req2,
        '../apis/clouddirectory-2017-01-11.min.json': _req3,
        '../apis/clouddirectory-2017-01-11.paginators.json': _req4
      }));
    }
  };
});
//# sourceMappingURL=66ff269be344f113857edc29359440159a88508d.js.map