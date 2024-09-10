System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_17) {
      _req14 = _unresolved_17.__cjsMetaURL;
    }, function (_unresolved_18) {
      _req15 = _unresolved_18.__cjsMetaURL;
    }, function (_unresolved_19) {
      _req16 = _unresolved_19.__cjsMetaURL;
    }, function (_unresolved_20) {
      _req17 = _unresolved_20.__cjsMetaURL;
    }, function (_unresolved_21) {
      _req18 = _unresolved_21.__cjsMetaURL;
    }, function (_unresolved_22) {
      _req19 = _unresolved_22.__cjsMetaURL;
    }, function (_unresolved_23) {
      _req20 = _unresolved_23.__cjsMetaURL;
    }, function (_unresolved_24) {
      _req21 = _unresolved_24.__cjsMetaURL;
    }, function (_unresolved_25) {
      _req22 = _unresolved_25.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        require('../lib/node_loader');

        var AWS = require('../lib/core');

        var Service = AWS.Service;
        var apiLoader = AWS.apiLoader;
        apiLoader.services['cloudfront'] = {};
        AWS.CloudFront = Service.defineService('cloudfront', ['2013-05-12*', '2013-11-11*', '2014-05-31*', '2014-10-21*', '2014-11-06*', '2015-04-17*', '2015-07-27*', '2015-09-17*', '2016-01-13*', '2016-01-28*', '2016-08-01*', '2016-08-20*', '2016-09-07*', '2016-09-29*', '2016-11-25', '2016-11-25*', '2017-03-25', '2017-03-25*', '2017-10-30', '2017-10-30*', '2018-06-18', '2018-06-18*', '2018-11-05', '2018-11-05*', '2019-03-26', '2019-03-26*', '2020-05-31']);

        require('../lib/services/cloudfront');

        Object.defineProperty(apiLoader.services['cloudfront'], '2016-11-25', {
          get: function get() {
            var model = require('../apis/cloudfront-2016-11-25.min.json');

            model.paginators = require('../apis/cloudfront-2016-11-25.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2016-11-25.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2017-03-25', {
          get: function get() {
            var model = require('../apis/cloudfront-2017-03-25.min.json');

            model.paginators = require('../apis/cloudfront-2017-03-25.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2017-03-25.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2017-10-30', {
          get: function get() {
            var model = require('../apis/cloudfront-2017-10-30.min.json');

            model.paginators = require('../apis/cloudfront-2017-10-30.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2017-10-30.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2018-06-18', {
          get: function get() {
            var model = require('../apis/cloudfront-2018-06-18.min.json');

            model.paginators = require('../apis/cloudfront-2018-06-18.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2018-06-18.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2018-11-05', {
          get: function get() {
            var model = require('../apis/cloudfront-2018-11-05.min.json');

            model.paginators = require('../apis/cloudfront-2018-11-05.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2018-11-05.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2019-03-26', {
          get: function get() {
            var model = require('../apis/cloudfront-2019-03-26.min.json');

            model.paginators = require('../apis/cloudfront-2019-03-26.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2019-03-26.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(apiLoader.services['cloudfront'], '2020-05-31', {
          get: function get() {
            var model = require('../apis/cloudfront-2020-05-31.min.json');

            model.paginators = require('../apis/cloudfront-2020-05-31.paginators.json').pagination;
            model.waiters = require('../apis/cloudfront-2020-05-31.waiters2.json').waiters;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.CloudFront; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../lib/services/cloudfront': _req1,
        '../apis/cloudfront-2016-11-25.min.json': _req2,
        '../apis/cloudfront-2016-11-25.paginators.json': _req3,
        '../apis/cloudfront-2016-11-25.waiters2.json': _req4,
        '../apis/cloudfront-2017-03-25.min.json': _req5,
        '../apis/cloudfront-2017-03-25.paginators.json': _req6,
        '../apis/cloudfront-2017-03-25.waiters2.json': _req7,
        '../apis/cloudfront-2017-10-30.min.json': _req8,
        '../apis/cloudfront-2017-10-30.paginators.json': _req9,
        '../apis/cloudfront-2017-10-30.waiters2.json': _req10,
        '../apis/cloudfront-2018-06-18.min.json': _req11,
        '../apis/cloudfront-2018-06-18.paginators.json': _req12,
        '../apis/cloudfront-2018-06-18.waiters2.json': _req13,
        '../apis/cloudfront-2018-11-05.min.json': _req14,
        '../apis/cloudfront-2018-11-05.paginators.json': _req15,
        '../apis/cloudfront-2018-11-05.waiters2.json': _req16,
        '../apis/cloudfront-2019-03-26.min.json': _req17,
        '../apis/cloudfront-2019-03-26.paginators.json': _req18,
        '../apis/cloudfront-2019-03-26.waiters2.json': _req19,
        '../apis/cloudfront-2020-05-31.min.json': _req20,
        '../apis/cloudfront-2020-05-31.paginators.json': _req21,
        '../apis/cloudfront-2020-05-31.waiters2.json': _req22
      }));
    }
  };
});
//# sourceMappingURL=c48167b6a59e623748fcdb72fc7bfe15c5210388.js.map