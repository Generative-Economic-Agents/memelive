System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var AWS = require('../core');

        var inherit = AWS.util.inherit;
        /**
         * @api private
         */

        AWS.Signers.RequestSigner = inherit({
          constructor: function RequestSigner(request) {
            this.request = request;
          },
          setServiceClientId: function setServiceClientId(id) {
            this.serviceClientId = id;
          },
          getServiceClientId: function getServiceClientId() {
            return this.serviceClientId;
          }
        });

        AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
          switch (version) {
            case 'v2':
              return AWS.Signers.V2;

            case 'v3':
              return AWS.Signers.V3;

            case 's3v4':
              return AWS.Signers.V4;

            case 'v4':
              return AWS.Signers.V4;

            case 's3':
              return AWS.Signers.S3;

            case 'v3https':
              return AWS.Signers.V3Https;

            case 'bearer':
              return AWS.Signers.Bearer;
          }

          throw new Error('Unknown signing version ' + version);
        };

        require('./v2');

        require('./v3');

        require('./v3https');

        require('./v4');

        require('./s3');

        require('./presign');

        require('./bearer'); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../core': _req,
        './v2': _req0,
        './v3': _req1,
        './v3https': _req2,
        './v4': _req3,
        './s3': _req4,
        './presign': _req5,
        './bearer': _req6
      }));
    }
  };
});
//# sourceMappingURL=dc7ae6e70309ad31b537ee3a6104d63268f446f3.js.map