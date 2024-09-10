System.register(["__unresolved_0", "tweetnacl", "stream", "util", "assert-plus", "safer-buffer", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, _Verifier, _Signer, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_tweetnacl) {
      _req = _tweetnacl.__cjsMetaURL;
    }, function (_stream) {
      _req0 = _stream.__cjsMetaURL;
    }, function (_util) {
      _req1 = _util.__cjsMetaURL;
    }, function (_assertPlus) {
      _req2 = _assertPlus.__cjsMetaURL;
    }, function (_saferBuffer) {
      _req3 = _saferBuffer.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        module.exports = {
          Verifier: Verifier,
          Signer: Signer
        };

        var nacl = require('tweetnacl');

        var stream = require('stream');

        var util = require('util');

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var Signature = require('./signature');

        function Verifier(key, hashAlgo) {
          if (hashAlgo.toLowerCase() !== 'sha512') throw new Error('ED25519 only supports the use of ' + 'SHA-512 hashes');
          this.key = key;
          this.chunks = [];
          stream.Writable.call(this, {});
        }

        util.inherits(Verifier, stream.Writable);

        Verifier.prototype._write = function (chunk, enc, cb) {
          this.chunks.push(chunk);
          cb();
        };

        Verifier.prototype.update = function (chunk) {
          if (typeof chunk === 'string') chunk = Buffer.from(chunk, 'binary');
          this.chunks.push(chunk);
        };

        Verifier.prototype.verify = function (signature, fmt) {
          var sig;

          if (Signature.isSignature(signature, [2, 0])) {
            if (signature.type !== 'ed25519') return false;
            sig = signature.toBuffer('raw');
          } else if (typeof signature === 'string') {
            sig = Buffer.from(signature, 'base64');
          } else if (Signature.isSignature(signature, [1, 0])) {
            throw new Error('signature was created by too old ' + 'a version of sshpk and cannot be verified');
          }

          assert.buffer(sig);
          return nacl.sign.detached.verify(new Uint8Array(Buffer.concat(this.chunks)), new Uint8Array(sig), new Uint8Array(this.key.part.A.data));
        };

        function Signer(key, hashAlgo) {
          if (hashAlgo.toLowerCase() !== 'sha512') throw new Error('ED25519 only supports the use of ' + 'SHA-512 hashes');
          this.key = key;
          this.chunks = [];
          stream.Writable.call(this, {});
        }

        util.inherits(Signer, stream.Writable);

        Signer.prototype._write = function (chunk, enc, cb) {
          this.chunks.push(chunk);
          cb();
        };

        Signer.prototype.update = function (chunk) {
          if (typeof chunk === 'string') chunk = Buffer.from(chunk, 'binary');
          this.chunks.push(chunk);
        };

        Signer.prototype.sign = function () {
          var sig = nacl.sign.detached(new Uint8Array(Buffer.concat(this.chunks)), new Uint8Array(Buffer.concat([this.key.part.k.data, this.key.part.A.data])));
          var sigBuf = Buffer.from(sig);
          var sigObj = Signature.parse(sigBuf, 'ed25519', 'raw');
          sigObj.hashAlgorithm = 'sha512';
          return sigObj;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _Verifier = module.exports.Verifier;
        _Signer = module.exports.Signer;
      }, () => ({
        'tweetnacl': _req,
        'stream': _req0,
        'util': _req1,
        'assert-plus': _req2,
        'safer-buffer': _req3,
        './signature': _req4
      }));
    }
  };
});
//# sourceMappingURL=f44452454b2f49cac993905e38ec7c4ccb53ecea.js.map