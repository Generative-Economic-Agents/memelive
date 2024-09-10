System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "crypto", "__unresolved_2", "__unresolved_3", "__unresolved_4", "util", "__unresolved_5", "__unresolved_6", "__unresolved_7", "tweetnacl", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assertPlus) {
      _req = _assertPlus.__cjsMetaURL;
    }, function (_saferBuffer) {
      _req0 = _saferBuffer.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_crypto) {
      _req2 = _crypto.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req4 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req5 = _unresolved_5.__cjsMetaURL;
    }, function (_util) {
      _req6 = _util.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req7 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req8 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req9 = _unresolved_8.__cjsMetaURL;
    }, function (_tweetnacl) {
      _req10 = _tweetnacl.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req11 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req12 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req13 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req14 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req15 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req16 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req17 = _unresolved_15.__cjsMetaURL;
    }, function (_unresolved_16) {
      _req18 = _unresolved_16.__cjsMetaURL;
    }, function (_unresolved_17) {
      _req19 = _unresolved_17.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2017 Joyent, Inc.
        module.exports = PrivateKey;

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var algs = require('./algs');

        var crypto = require('crypto');

        var Fingerprint = require('./fingerprint');

        var Signature = require('./signature');

        var errs = require('./errors');

        var util = require('util');

        var utils = require('./utils');

        var dhe = require('./dhe');

        var generateECDSA = dhe.generateECDSA;
        var generateED25519 = dhe.generateED25519;

        var edCompat = require('./ed-compat');

        var nacl = require('tweetnacl');

        var Key = require('./key');

        var InvalidAlgorithmError = errs.InvalidAlgorithmError;
        var KeyParseError = errs.KeyParseError;
        var KeyEncryptedError = errs.KeyEncryptedError;
        var formats = {};
        formats['auto'] = require('./formats/auto');
        formats['pem'] = require('./formats/pem');
        formats['pkcs1'] = require('./formats/pkcs1');
        formats['pkcs8'] = require('./formats/pkcs8');
        formats['rfc4253'] = require('./formats/rfc4253');
        formats['ssh-private'] = require('./formats/ssh-private');
        formats['openssh'] = formats['ssh-private'];
        formats['ssh'] = formats['ssh-private'];
        formats['dnssec'] = require('./formats/dnssec');
        formats['putty'] = require('./formats/putty');

        function PrivateKey(opts) {
          assert.object(opts, 'options');
          Key.call(this, opts);
          this._pubCache = undefined;
        }

        util.inherits(PrivateKey, Key);
        PrivateKey.formats = formats;

        PrivateKey.prototype.toBuffer = function (format, options) {
          if (format === undefined) format = 'pkcs1';
          assert.string(format, 'format');
          assert.object(formats[format], 'formats[format]');
          assert.optionalObject(options, 'options');
          return formats[format].write(this, options);
        };

        PrivateKey.prototype.hash = function (algo, type) {
          return this.toPublic().hash(algo, type);
        };

        PrivateKey.prototype.fingerprint = function (algo, type) {
          return this.toPublic().fingerprint(algo, type);
        };

        PrivateKey.prototype.toPublic = function () {
          if (this._pubCache) return this._pubCache;
          var algInfo = algs.info[this.type];
          var pubParts = [];

          for (var i = 0; i < algInfo.parts.length; ++i) {
            var p = algInfo.parts[i];
            pubParts.push(this.part[p]);
          }

          this._pubCache = new Key({
            type: this.type,
            source: this,
            parts: pubParts
          });
          if (this.comment) this._pubCache.comment = this.comment;
          return this._pubCache;
        };

        PrivateKey.prototype.derive = function (newType) {
          assert.string(newType, 'type');
          var priv, pub, pair;

          if (this.type === 'ed25519' && newType === 'curve25519') {
            priv = this.part.k.data;
            if (priv[0] === 0x00) priv = priv.slice(1);
            pair = nacl.box.keyPair.fromSecretKey(new Uint8Array(priv));
            pub = Buffer.from(pair.publicKey);
            return new PrivateKey({
              type: 'curve25519',
              parts: [{
                name: 'A',
                data: utils.mpNormalize(pub)
              }, {
                name: 'k',
                data: utils.mpNormalize(priv)
              }]
            });
          } else if (this.type === 'curve25519' && newType === 'ed25519') {
            priv = this.part.k.data;
            if (priv[0] === 0x00) priv = priv.slice(1);
            pair = nacl.sign.keyPair.fromSeed(new Uint8Array(priv));
            pub = Buffer.from(pair.publicKey);
            return new PrivateKey({
              type: 'ed25519',
              parts: [{
                name: 'A',
                data: utils.mpNormalize(pub)
              }, {
                name: 'k',
                data: utils.mpNormalize(priv)
              }]
            });
          }

          throw new Error('Key derivation not supported from ' + this.type + ' to ' + newType);
        };

        PrivateKey.prototype.createVerify = function (hashAlgo) {
          return this.toPublic().createVerify(hashAlgo);
        };

        PrivateKey.prototype.createSign = function (hashAlgo) {
          if (hashAlgo === undefined) hashAlgo = this.defaultHashAlgorithm();
          assert.string(hashAlgo, 'hash algorithm');
          /* ED25519 is not supported by OpenSSL, use a javascript impl. */

          if (this.type === 'ed25519' && edCompat !== undefined) return new edCompat.Signer(this, hashAlgo);
          if (this.type === 'curve25519') throw new Error('Curve25519 keys are not suitable for ' + 'signing or verification');
          var v, nm, err;

          try {
            nm = hashAlgo.toUpperCase();
            v = crypto.createSign(nm);
          } catch (e) {
            err = e;
          }

          if (v === undefined || err instanceof Error && err.message.match(/Unknown message digest/)) {
            nm = 'RSA-';
            nm += hashAlgo.toUpperCase();
            v = crypto.createSign(nm);
          }

          assert.ok(v, 'failed to create verifier');
          var oldSign = v.sign.bind(v);
          var key = this.toBuffer('pkcs1');
          var type = this.type;
          var curve = this.curve;

          v.sign = function () {
            var sig = oldSign(key);
            if (typeof sig === 'string') sig = Buffer.from(sig, 'binary');
            sig = Signature.parse(sig, type, 'asn1');
            sig.hashAlgorithm = hashAlgo;
            sig.curve = curve;
            return sig;
          };

          return v;
        };

        PrivateKey.parse = function (data, format, options) {
          if (typeof data !== 'string') assert.buffer(data, 'data');
          if (format === undefined) format = 'auto';
          assert.string(format, 'format');
          if (typeof options === 'string') options = {
            filename: options
          };
          assert.optionalObject(options, 'options');
          if (options === undefined) options = {};
          assert.optionalString(options.filename, 'options.filename');
          if (options.filename === undefined) options.filename = '(unnamed)';
          assert.object(formats[format], 'formats[format]');

          try {
            var k = formats[format].read(data, options);
            assert.ok(k instanceof PrivateKey, 'key is not a private key');
            if (!k.comment) k.comment = options.filename;
            return k;
          } catch (e) {
            if (e.name === 'KeyEncryptedError') throw e;
            throw new KeyParseError(options.filename, format, e);
          }
        };

        PrivateKey.isPrivateKey = function (obj, ver) {
          return utils.isCompatible(obj, PrivateKey, ver);
        };

        PrivateKey.generate = function (type, options) {
          if (options === undefined) options = {};
          assert.object(options, 'options');

          switch (type) {
            case 'ecdsa':
              if (options.curve === undefined) options.curve = 'nistp256';
              assert.string(options.curve, 'options.curve');
              return generateECDSA(options.curve);

            case 'ed25519':
              return generateED25519();

            default:
              throw new Error('Key generation not supported with key ' + 'type "' + type + '"');
          }
        };
        /*
         * API versions for PrivateKey:
         * [1,0] -- initial ver
         * [1,1] -- added auto, pkcs[18], openssh/ssh-private formats
         * [1,2] -- added defaultHashAlgorithm
         * [1,3] -- added derive, ed, createDH
         * [1,4] -- first tagged version
         * [1,5] -- changed ed25519 part names and format
         * [1,6] -- type arguments for hash() and fingerprint()
         */


        PrivateKey.prototype._sshpkApiVersion = [1, 6];

        PrivateKey._oldVersionDetect = function (obj) {
          assert.func(obj.toPublic);
          assert.func(obj.createSign);
          if (obj.derive) return [1, 3];
          if (obj.defaultHashAlgorithm) return [1, 2];
          if (obj.formats['auto']) return [1, 1];
          return [1, 0];
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        './algs': _req1,
        'crypto': _req2,
        './fingerprint': _req3,
        './signature': _req4,
        './errors': _req5,
        'util': _req6,
        './utils': _req7,
        './dhe': _req8,
        './ed-compat': _req9,
        'tweetnacl': _req10,
        './key': _req11,
        './formats/auto': _req12,
        './formats/pem': _req13,
        './formats/pkcs1': _req14,
        './formats/pkcs8': _req15,
        './formats/rfc4253': _req16,
        './formats/ssh-private': _req17,
        './formats/dnssec': _req18,
        './formats/putty': _req19
      }));
    }
  };
});
//# sourceMappingURL=8291c4eae33622becb8c7361f07d2c9ed3ca5b6b.js.map