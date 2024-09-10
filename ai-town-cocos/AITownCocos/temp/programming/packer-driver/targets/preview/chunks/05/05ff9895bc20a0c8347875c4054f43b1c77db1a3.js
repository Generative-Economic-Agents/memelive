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
        apiLoader.services['ec2'] = {};
        AWS.EC2 = Service.defineService('ec2', ['2013-06-15*', '2013-10-15*', '2014-02-01*', '2014-05-01*', '2014-06-15*', '2014-09-01*', '2014-10-01*', '2015-03-01*', '2015-04-15*', '2015-10-01*', '2016-04-01*', '2016-09-15*', '2016-11-15']);

        require('../lib/services/ec2');

        Object.defineProperty(apiLoader.services['ec2'], '2016-11-15', {
          get: function get() {
            var model = require('../apis/ec2-2016-11-15.min.json');

            model.paginators = require('../apis/ec2-2016-11-15.paginators.json').pagination;
            model.waiters = require('../apis/ec2-2016-11-15.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.EC2; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/ec2': _req1,
        '../apis/ec2-2016-11-15.min.json': _req2,
        '../apis/ec2-2016-11-15.paginators.json': _req3,
        '../apis/ec2-2016-11-15.waiters2.json': _req4
      }));
    }
  };
});
//# sourceMappingURL=05ff9895bc20a0c8347875c4054f43b1c77db1a3.js.map