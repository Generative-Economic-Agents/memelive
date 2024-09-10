System.register(["__unresolved_0", "assert-plus", "util"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _FingerprintFormatError, _InvalidAlgorithmError, _KeyParseError, _SignatureParseError, _KeyEncryptedError, _CertificateParseError, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assertPlus) {
      _req = _assertPlus.__cjsMetaURL;
    }, function (_util) {
      _req0 = _util.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        var assert = require('assert-plus');

        var util = require('util');

        function FingerprintFormatError(fp, format) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, FingerprintFormatError);
          this.name = 'FingerprintFormatError';
          this.fingerprint = fp;
          this.format = format;
          this.message = 'Fingerprint format is not supported, or is invalid: ';
          if (fp !== undefined) this.message += ' fingerprint = ' + fp;
          if (format !== undefined) this.message += ' format = ' + format;
        }

        util.inherits(FingerprintFormatError, Error);

        function InvalidAlgorithmError(alg) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, InvalidAlgorithmError);
          this.name = 'InvalidAlgorithmError';
          this.algorithm = alg;
          this.message = 'Algorithm "' + alg + '" is not supported';
        }

        util.inherits(InvalidAlgorithmError, Error);

        function KeyParseError(name, format, innerErr) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, KeyParseError);
          this.name = 'KeyParseError';
          this.format = format;
          this.keyName = name;
          this.innerErr = innerErr;
          this.message = 'Failed to parse ' + name + ' as a valid ' + format + ' format key: ' + innerErr.message;
        }

        util.inherits(KeyParseError, Error);

        function SignatureParseError(type, format, innerErr) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, SignatureParseError);
          this.name = 'SignatureParseError';
          this.type = type;
          this.format = format;
          this.innerErr = innerErr;
          this.message = 'Failed to parse the given data as a ' + type + ' signature in ' + format + ' format: ' + innerErr.message;
        }

        util.inherits(SignatureParseError, Error);

        function CertificateParseError(name, format, innerErr) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, CertificateParseError);
          this.name = 'CertificateParseError';
          this.format = format;
          this.certName = name;
          this.innerErr = innerErr;
          this.message = 'Failed to parse ' + name + ' as a valid ' + format + ' format certificate: ' + innerErr.message;
        }

        util.inherits(CertificateParseError, Error);

        function KeyEncryptedError(name, format) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, KeyEncryptedError);
          this.name = 'KeyEncryptedError';
          this.format = format;
          this.keyName = name;
          this.message = 'The ' + format + ' format key ' + name + ' is ' + 'encrypted (password-protected), and no passphrase was ' + 'provided in `options`';
        }

        util.inherits(KeyEncryptedError, Error);
        module.exports = {
          FingerprintFormatError: FingerprintFormatError,
          InvalidAlgorithmError: InvalidAlgorithmError,
          KeyParseError: KeyParseError,
          SignatureParseError: SignatureParseError,
          KeyEncryptedError: KeyEncryptedError,
          CertificateParseError: CertificateParseError
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _FingerprintFormatError = module.exports.FingerprintFormatError;
        _InvalidAlgorithmError = module.exports.InvalidAlgorithmError;
        _KeyParseError = module.exports.KeyParseError;
        _SignatureParseError = module.exports.SignatureParseError;
        _KeyEncryptedError = module.exports.KeyEncryptedError;
        _CertificateParseError = module.exports.CertificateParseError;
      }, () => ({
        'assert-plus': _req,
        'util': _req0
      }));
    }
  };
});
//# sourceMappingURL=aef70653a23dab95e522913120f19c28ca4b4292.js.map