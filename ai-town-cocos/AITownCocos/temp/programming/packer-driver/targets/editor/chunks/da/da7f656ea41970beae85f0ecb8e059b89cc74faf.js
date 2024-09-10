System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['dynamodb'] = {};
        AWS.DynamoDB = Service.defineService('dynamodb', ['2011-12-05', '2012-08-10']);

        require('../lib/services/dynamodb');

        Object.defineProperty(apiLoader.services['dynamodb'], '2011-12-05', {
          get: function get() {
            var model = require('../apis/dynamodb-2011-12-05.min.json');

            model.paginators = require('../apis/dynamodb-2011-12-05.paginators.json').pagination;
            model.waiters = require('../apis/dynamodb-2011-12-05.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['dynamodb'], '2012-08-10', {
          get: function get() {
            var model = require('../apis/dynamodb-2012-08-10.min.json');

            model.paginators = require('../apis/dynamodb-2012-08-10.paginators.json').pagination;
            model.waiters = require('../apis/dynamodb-2012-08-10.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.DynamoDB; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/dynamodb': _req1,
        '../apis/dynamodb-2011-12-05.min.json': _req2,
        '../apis/dynamodb-2011-12-05.paginators.json': _req3,
        '../apis/dynamodb-2011-12-05.waiters2.json': _req4,
        '../apis/dynamodb-2012-08-10.min.json': _req5,
        '../apis/dynamodb-2012-08-10.paginators.json': _req6,
        '../apis/dynamodb-2012-08-10.waiters2.json': _req7
      }));
    }
  };
});
//# sourceMappingURL=da7f656ea41970beae85f0ecb8e059b89cc74faf.js.map