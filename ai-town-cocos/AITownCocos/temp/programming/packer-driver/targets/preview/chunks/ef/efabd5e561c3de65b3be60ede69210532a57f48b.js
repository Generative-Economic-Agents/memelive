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
        apiLoader.services['kinesisvideosignalingchannels'] = {};
        AWS.KinesisVideoSignalingChannels = Service.defineService('kinesisvideosignalingchannels', ['2019-12-04']);
        Object.defineProperty(apiLoader.services['kinesisvideosignalingchannels'], '2019-12-04', {
          get: function get() {
            var model = require('../apis/kinesis-video-signaling-2019-12-04.min.json');

            model.paginators = require('../apis/kinesis-video-signaling-2019-12-04.paginators.json').pagination;
            return model;
          },
          enumerable: true,
          configurable: true
        });
        module.exports = AWS.KinesisVideoSignalingChannels; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../lib/node_loader': _req,
        '../lib/core': _req0,
        '../apis/kinesis-video-signaling-2019-12-04.min.json': _req1,
        '../apis/kinesis-video-signaling-2019-12-04.paginators.json': _req2
      }));
    }
  };
});
//# sourceMappingURL=efabd5e561c3de65b3be60ede69210532a57f48b.js.map