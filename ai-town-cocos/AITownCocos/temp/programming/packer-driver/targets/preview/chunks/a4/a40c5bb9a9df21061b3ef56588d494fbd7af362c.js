System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, _Key, _parseKey, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        var Key = require('./key');

        var Fingerprint = require('./fingerprint');

        var Signature = require('./signature');

        var PrivateKey = require('./private-key');

        var Certificate = require('./certificate');

        var Identity = require('./identity');

        var errs = require('./errors');

        module.exports = {
          /* top-level classes */
          Key: Key,
          parseKey: Key.parse,
          Fingerprint: Fingerprint,
          parseFingerprint: Fingerprint.parse,
          Signature: Signature,
          parseSignature: Signature.parse,
          PrivateKey: PrivateKey,
          parsePrivateKey: PrivateKey.parse,
          generatePrivateKey: PrivateKey.generate,
          Certificate: Certificate,
          parseCertificate: Certificate.parse,
          createSelfSignedCertificate: Certificate.createSelfSigned,
          createCertificate: Certificate.create,
          Identity: Identity,
          identityFromDN: Identity.parseDN,
          identityForHost: Identity.forHost,
          identityForUser: Identity.forUser,
          identityForEmail: Identity.forEmail,
          identityFromArray: Identity.fromArray,

          /* errors */
          FingerprintFormatError: errs.FingerprintFormatError,
          InvalidAlgorithmError: errs.InvalidAlgorithmError,
          KeyParseError: errs.KeyParseError,
          SignatureParseError: errs.SignatureParseError,
          KeyEncryptedError: errs.KeyEncryptedError,
          CertificateParseError: errs.CertificateParseError
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Key = module.exports.Key;
        _parseKey = module.exports.parseKey;
      }, () => ({
        './key': _req,
        './fingerprint': _req0,
        './signature': _req1,
        './private-key': _req2,
        './certificate': _req3,
        './identity': _req4,
        './errors': _req5
      }));
    }
  };
});
//# sourceMappingURL=a40c5bb9a9df21061b3ef56588d494fbd7af362c.js.map