System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _parse, __cjsMetaURL;

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
        // Copyright 2015 Joyent, Inc.
        var parser = require('./parser');

        var signer = require('./signer');

        var verify = require('./verify');

        var utils = require('./utils'); ///--- API


        module.exports = {
          parse: parser.parseRequest,
          parseRequest: parser.parseRequest,
          sign: signer.signRequest,
          signRequest: signer.signRequest,
          createSigner: signer.createSigner,
          isSigner: signer.isSigner,
          sshKeyToPEM: utils.sshKeyToPEM,
          sshKeyFingerprint: utils.fingerprint,
          pemToRsaSSHKey: utils.pemToRsaSSHKey,
          verify: verify.verifySignature,
          verifySignature: verify.verifySignature,
          verifyHMAC: verify.verifyHMAC
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _parse = module.exports.parse;
      }, () => ({
        './parser': _req,
        './signer': _req0,
        './verify': _req1,
        './utils': _req2
      }));
    }
  };
});
//# sourceMappingURL=9e04fe921d964797567dce058c69d1f67fafb543.js.map