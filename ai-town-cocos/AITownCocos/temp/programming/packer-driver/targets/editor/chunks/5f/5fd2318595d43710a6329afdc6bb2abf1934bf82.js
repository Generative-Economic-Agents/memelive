System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['greengrass'] = {};
        AWS.Greengrass = Service.defineService('greengrass', ['2017-06-07']);
        Object.defineProperty(apiLoader.services['greengrass'], '2017-06-07', {
          get: function get() {
            var model = require('../apis/greengrass-2017-06-07.min.json');

            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.Greengrass; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/greengrass-2017-06-07.min.json': _req1
      }));
    }
  };
});
//# sourceMappingURL=5fd2318595d43710a6329afdc6bb2abf1934bf82.js.map