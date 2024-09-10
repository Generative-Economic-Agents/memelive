System.register(["__unresolved_0", "assert-plus", "crypto", "sshpk", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _verifySignature, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assertPlus) {
      _req = _assertPlus.__cjsMetaURL;
    }, function (_crypto) {
      _req0 = _crypto.__cjsMetaURL;
    }, function (_sshpk) {
      _req1 = _sshpk.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        var assert = require('assert-plus');

        var crypto = require('crypto');

        var sshpk = require('sshpk');

        var utils = require('./utils');

        var HASH_ALGOS = utils.HASH_ALGOS;
        var PK_ALGOS = utils.PK_ALGOS;
        var InvalidAlgorithmError = utils.InvalidAlgorithmError;
        var HttpSignatureError = utils.HttpSignatureError;
        var validateAlgorithm = utils.validateAlgorithm; ///--- Exported API

        module.exports = {
          /**
           * Verify RSA/DSA signature against public key.  You are expected to pass in
           * an object that was returned from `parse()`.
           *
           * @param {Object} parsedSignature the object you got from `parse`.
           * @param {String} pubkey RSA/DSA private key PEM.
           * @return {Boolean} true if valid, false otherwise.
           * @throws {TypeError} if you pass in bad arguments.
           * @throws {InvalidAlgorithmError}
           */
          verifySignature: function verifySignature(parsedSignature, pubkey) {
            assert.object(parsedSignature, 'parsedSignature');
            if (typeof pubkey === 'string' || Buffer.isBuffer(pubkey)) pubkey = sshpk.parseKey(pubkey);
            assert.ok(sshpk.Key.isKey(pubkey, [1, 1]), 'pubkey must be a sshpk.Key');
            var alg = validateAlgorithm(parsedSignature.algorithm);
            if (alg[0] === 'hmac' || alg[0] !== pubkey.type) return false;
            var v = pubkey.createVerify(alg[1]);
            v.update(parsedSignature.signingString);
            return v.verify(parsedSignature.params.signature, 'base64');
          },

          /**
           * Verify HMAC against shared secret.  You are expected to pass in an object
           * that was returned from `parse()`.
           *
           * @param {Object} parsedSignature the object you got from `parse`.
           * @param {String} secret HMAC shared secret.
           * @return {Boolean} true if valid, false otherwise.
           * @throws {TypeError} if you pass in bad arguments.
           * @throws {InvalidAlgorithmError}
           */
          verifyHMAC: function verifyHMAC(parsedSignature, secret) {
            assert.object(parsedSignature, 'parsedHMAC');
            assert.string(secret, 'secret');
            var alg = validateAlgorithm(parsedSignature.algorithm);
            if (alg[0] !== 'hmac') return false;
            var hashAlg = alg[1].toUpperCase();
            var hmac = crypto.createHmac(hashAlg, secret);
            hmac.update(parsedSignature.signingString);
            /*
             * Now double-hash to avoid leaking timing information - there's
             * no easy constant-time compare in JS, so we use this approach
             * instead. See for more info:
             * https://www.isecpartners.com/blog/2011/february/double-hmac-
             * verification.aspx
             */

            var h1 = crypto.createHmac(hashAlg, secret);
            h1.update(hmac.digest());
            h1 = h1.digest();
            var h2 = crypto.createHmac(hashAlg, secret);
            h2.update(new Buffer(parsedSignature.params.signature, 'base64'));
            h2 = h2.digest();
            /* Node 0.8 returns strings from .digest(). */

            if (typeof h1 === 'string') return h1 === h2;
            /* And node 0.10 lacks the .equals() method on Buffers. */

            if (Buffer.isBuffer(h1) && !h1.equals) return h1.toString('binary') === h2.toString('binary');
            return h1.equals(h2);
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _verifySignature = module.exports.verifySignature;
      }, () => ({
        'assert-plus': _req,
        'crypto': _req0,
        'sshpk': _req1,
        './utils': _req2
      }));
    }
  };
});
//# sourceMappingURL=f6eb59d4abcefd7e2e316a633102554ff039c6bf.js.map