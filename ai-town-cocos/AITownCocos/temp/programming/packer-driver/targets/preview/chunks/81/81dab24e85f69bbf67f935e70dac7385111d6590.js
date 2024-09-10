System.register(["__unresolved_0", "assert-plus", "sshpk", "util"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, _HASH_ALGOS, _PK_ALGOS, _HttpSignatureError, _InvalidAlgorithmError, _validateAlgorithm, _sshKeyToPEM, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assertPlus) {
      _req = _assertPlus.__cjsMetaURL;
    }, function (_sshpk) {
      _req0 = _sshpk.__cjsMetaURL;
    }, function (_util) {
      _req1 = _util.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2012 Joyent, Inc.  All rights reserved.
        var assert = require('assert-plus');

        var sshpk = require('sshpk');

        var util = require('util');

        var HASH_ALGOS = {
          'sha1': true,
          'sha256': true,
          'sha512': true
        };
        var PK_ALGOS = {
          'rsa': true,
          'dsa': true,
          'ecdsa': true
        };

        function HttpSignatureError(message, caller) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, caller || HttpSignatureError);
          this.message = message;
          this.name = caller.name;
        }

        util.inherits(HttpSignatureError, Error);

        function InvalidAlgorithmError(message) {
          HttpSignatureError.call(this, message, InvalidAlgorithmError);
        }

        util.inherits(InvalidAlgorithmError, HttpSignatureError);

        function validateAlgorithm(algorithm) {
          var alg = algorithm.toLowerCase().split('-');

          if (alg.length !== 2) {
            throw new InvalidAlgorithmError(alg[0].toUpperCase() + ' is not a ' + 'valid algorithm');
          }

          if (alg[0] !== 'hmac' && !PK_ALGOS[alg[0]]) {
            throw new InvalidAlgorithmError(alg[0].toUpperCase() + ' type keys ' + 'are not supported');
          }

          if (!HASH_ALGOS[alg[1]]) {
            throw new InvalidAlgorithmError(alg[1].toUpperCase() + ' is not a ' + 'supported hash algorithm');
          }

          return alg;
        } ///--- API


        module.exports = {
          HASH_ALGOS: HASH_ALGOS,
          PK_ALGOS: PK_ALGOS,
          HttpSignatureError: HttpSignatureError,
          InvalidAlgorithmError: InvalidAlgorithmError,
          validateAlgorithm: validateAlgorithm,

          /**
           * Converts an OpenSSH public key (rsa only) to a PKCS#8 PEM file.
           *
           * The intent of this module is to interoperate with OpenSSL only,
           * specifically the node crypto module's `verify` method.
           *
           * @param {String} key an OpenSSH public key.
           * @return {String} PEM encoded form of the RSA public key.
           * @throws {TypeError} on bad input.
           * @throws {Error} on invalid ssh key formatted data.
           */
          sshKeyToPEM: function sshKeyToPEM(key) {
            assert.string(key, 'ssh_key');
            var k = sshpk.parseKey(key, 'ssh');
            return k.toString('pem');
          },

          /**
           * Generates an OpenSSH fingerprint from an ssh public key.
           *
           * @param {String} key an OpenSSH public key.
           * @return {String} key fingerprint.
           * @throws {TypeError} on bad input.
           * @throws {Error} if what you passed doesn't look like an ssh public key.
           */
          fingerprint: function fingerprint(key) {
            assert.string(key, 'ssh_key');
            var k = sshpk.parseKey(key, 'ssh');
            return k.fingerprint('md5').toString('hex');
          },

          /**
           * Converts a PKGCS#8 PEM file to an OpenSSH public key (rsa)
           *
           * The reverse of the above function.
           */
          pemToRsaSSHKey: function pemToRsaSSHKey(pem, comment) {
            assert.equal('string', typeof pem, 'typeof pem');
            var k = sshpk.parseKey(pem, 'pem');
            k.comment = comment;
            return k.toString('ssh');
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _HASH_ALGOS = module.exports.HASH_ALGOS;
        _PK_ALGOS = module.exports.PK_ALGOS;
        _HttpSignatureError = module.exports.HttpSignatureError;
        _InvalidAlgorithmError = module.exports.InvalidAlgorithmError;
        _validateAlgorithm = module.exports.validateAlgorithm;
        _sshKeyToPEM = module.exports.sshKeyToPEM;
      }, () => ({
        'assert-plus': _req,
        'sshpk': _req0,
        'util': _req1
      }));
    }
  };
});
//# sourceMappingURL=81dab24e85f69bbf67f935e70dac7385111d6590.js.map