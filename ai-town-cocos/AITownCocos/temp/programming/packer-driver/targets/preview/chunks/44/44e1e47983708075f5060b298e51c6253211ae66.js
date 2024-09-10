System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "__unresolved_2", "crypto", "__unresolved_3", "asn1", "ecc-jsbn/lib/ec", "jsbn", "tweetnacl"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, _bufferSplit, _addRSAMissing, _calculateDSAPublic, _calculateED25519Public, _calculateX25519Public, _mpNormalize, _mpDenormalize, _ecNormalize, _countZeros, _assertCompatible, _isCompatible, _opensslKeyDeriv, _opensshCipherInfo, _publicFromPrivateECDSA, _zeroPadToLength, _writeBitString, _readBitString, _pbkdf2, __cjsMetaURL;

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
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_crypto) {
      _req3 = _crypto.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req4 = _unresolved_4.__cjsMetaURL;
    }, function (_asn) {
      _req5 = _asn.__cjsMetaURL;
    }, function (_eccJsbnLibEc) {
      _req6 = _eccJsbnLibEc.__cjsMetaURL;
    }, function (_jsbn) {
      _req7 = _jsbn.__cjsMetaURL;
    }, function (_tweetnacl) {
      _req8 = _tweetnacl.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        module.exports = {
          bufferSplit: bufferSplit,
          addRSAMissing: addRSAMissing,
          calculateDSAPublic: calculateDSAPublic,
          calculateED25519Public: calculateED25519Public,
          calculateX25519Public: calculateX25519Public,
          mpNormalize: mpNormalize,
          mpDenormalize: mpDenormalize,
          ecNormalize: ecNormalize,
          countZeros: countZeros,
          assertCompatible: assertCompatible,
          isCompatible: isCompatible,
          opensslKeyDeriv: opensslKeyDeriv,
          opensshCipherInfo: opensshCipherInfo,
          publicFromPrivateECDSA: publicFromPrivateECDSA,
          zeroPadToLength: zeroPadToLength,
          writeBitString: writeBitString,
          readBitString: readBitString,
          pbkdf2: pbkdf2
        };

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var PrivateKey = require('./private-key');

        var Key = require('./key');

        var crypto = require('crypto');

        var algs = require('./algs');

        var asn1 = require('asn1');

        var ec = require('ecc-jsbn/lib/ec');

        var jsbn = require('jsbn').BigInteger;

        var nacl = require('tweetnacl');

        var MAX_CLASS_DEPTH = 3;

        function isCompatible(obj, klass, needVer) {
          if (obj === null || typeof obj !== 'object') return false;
          if (needVer === undefined) needVer = klass.prototype._sshpkApiVersion;
          if (obj instanceof klass && klass.prototype._sshpkApiVersion[0] == needVer[0]) return true;
          var proto = Object.getPrototypeOf(obj);
          var depth = 0;

          while (proto.constructor.name !== klass.name) {
            proto = Object.getPrototypeOf(proto);
            if (!proto || ++depth > MAX_CLASS_DEPTH) return false;
          }

          if (proto.constructor.name !== klass.name) return false;
          var ver = proto._sshpkApiVersion;
          if (ver === undefined) ver = klass._oldVersionDetect(obj);
          if (ver[0] != needVer[0] || ver[1] < needVer[1]) return false;
          return true;
        }

        function assertCompatible(obj, klass, needVer, name) {
          if (name === undefined) name = 'object';
          assert.ok(obj, name + ' must not be null');
          assert.object(obj, name + ' must be an object');
          if (needVer === undefined) needVer = klass.prototype._sshpkApiVersion;
          if (obj instanceof klass && klass.prototype._sshpkApiVersion[0] == needVer[0]) return;
          var proto = Object.getPrototypeOf(obj);
          var depth = 0;

          while (proto.constructor.name !== klass.name) {
            proto = Object.getPrototypeOf(proto);
            assert.ok(proto && ++depth <= MAX_CLASS_DEPTH, name + ' must be a ' + klass.name + ' instance');
          }

          assert.strictEqual(proto.constructor.name, klass.name, name + ' must be a ' + klass.name + ' instance');
          var ver = proto._sshpkApiVersion;
          if (ver === undefined) ver = klass._oldVersionDetect(obj);
          assert.ok(ver[0] == needVer[0] && ver[1] >= needVer[1], name + ' must be compatible with ' + klass.name + ' klass ' + 'version ' + needVer[0] + '.' + needVer[1]);
        }

        var CIPHER_LEN = {
          'des-ede3-cbc': {
            key: 24,
            iv: 8
          },
          'aes-128-cbc': {
            key: 16,
            iv: 16
          },
          'aes-256-cbc': {
            key: 32,
            iv: 16
          }
        };
        var PKCS5_SALT_LEN = 8;

        function opensslKeyDeriv(cipher, salt, passphrase, count) {
          assert.buffer(salt, 'salt');
          assert.buffer(passphrase, 'passphrase');
          assert.number(count, 'iteration count');
          var clen = CIPHER_LEN[cipher];
          assert.object(clen, 'supported cipher');
          salt = salt.slice(0, PKCS5_SALT_LEN);
          var D, D_prev, bufs;
          var material = Buffer.alloc(0);

          while (material.length < clen.key + clen.iv) {
            bufs = [];
            if (D_prev) bufs.push(D_prev);
            bufs.push(passphrase);
            bufs.push(salt);
            D = Buffer.concat(bufs);

            for (var j = 0; j < count; ++j) D = crypto.createHash('md5').update(D).digest();

            material = Buffer.concat([material, D]);
            D_prev = D;
          }

          return {
            key: material.slice(0, clen.key),
            iv: material.slice(clen.key, clen.key + clen.iv)
          };
        }
        /* See: RFC2898 */


        function pbkdf2(hashAlg, salt, iterations, size, passphrase) {
          var hkey = Buffer.alloc(salt.length + 4);
          salt.copy(hkey);
          var gen = 0,
              ts = [];
          var i = 1;

          while (gen < size) {
            var t = T(i++);
            gen += t.length;
            ts.push(t);
          }

          return Buffer.concat(ts).slice(0, size);

          function T(I) {
            hkey.writeUInt32BE(I, hkey.length - 4);
            var hmac = crypto.createHmac(hashAlg, passphrase);
            hmac.update(hkey);
            var Ti = hmac.digest();
            var Uc = Ti;
            var c = 1;

            while (c++ < iterations) {
              hmac = crypto.createHmac(hashAlg, passphrase);
              hmac.update(Uc);
              Uc = hmac.digest();

              for (var x = 0; x < Ti.length; ++x) Ti[x] ^= Uc[x];
            }

            return Ti;
          }
        }
        /* Count leading zero bits on a buffer */


        function countZeros(buf) {
          var o = 0,
              obit = 8;

          while (o < buf.length) {
            var mask = 1 << obit;
            if ((buf[o] & mask) === mask) break;
            obit--;

            if (obit < 0) {
              o++;
              obit = 8;
            }
          }

          return o * 8 + (8 - obit) - 1;
        }

        function bufferSplit(buf, chr) {
          assert.buffer(buf);
          assert.string(chr);
          var parts = [];
          var lastPart = 0;
          var matches = 0;

          for (var i = 0; i < buf.length; ++i) {
            if (buf[i] === chr.charCodeAt(matches)) ++matches;else if (buf[i] === chr.charCodeAt(0)) matches = 1;else matches = 0;

            if (matches >= chr.length) {
              var newPart = i + 1;
              parts.push(buf.slice(lastPart, newPart - matches));
              lastPart = newPart;
              matches = 0;
            }
          }

          if (lastPart <= buf.length) parts.push(buf.slice(lastPart, buf.length));
          return parts;
        }

        function ecNormalize(buf, addZero) {
          assert.buffer(buf);

          if (buf[0] === 0x00 && buf[1] === 0x04) {
            if (addZero) return buf;
            return buf.slice(1);
          } else if (buf[0] === 0x04) {
            if (!addZero) return buf;
          } else {
            while (buf[0] === 0x00) buf = buf.slice(1);

            if (buf[0] === 0x02 || buf[0] === 0x03) throw new Error('Compressed elliptic curve points ' + 'are not supported');
            if (buf[0] !== 0x04) throw new Error('Not a valid elliptic curve point');
            if (!addZero) return buf;
          }

          var b = Buffer.alloc(buf.length + 1);
          b[0] = 0x0;
          buf.copy(b, 1);
          return b;
        }

        function readBitString(der, tag) {
          if (tag === undefined) tag = asn1.Ber.BitString;
          var buf = der.readString(tag, true);
          assert.strictEqual(buf[0], 0x00, 'bit strings with unused bits are ' + 'not supported (0x' + buf[0].toString(16) + ')');
          return buf.slice(1);
        }

        function writeBitString(der, buf, tag) {
          if (tag === undefined) tag = asn1.Ber.BitString;
          var b = Buffer.alloc(buf.length + 1);
          b[0] = 0x00;
          buf.copy(b, 1);
          der.writeBuffer(b, tag);
        }

        function mpNormalize(buf) {
          assert.buffer(buf);

          while (buf.length > 1 && buf[0] === 0x00 && (buf[1] & 0x80) === 0x00) buf = buf.slice(1);

          if ((buf[0] & 0x80) === 0x80) {
            var b = Buffer.alloc(buf.length + 1);
            b[0] = 0x00;
            buf.copy(b, 1);
            buf = b;
          }

          return buf;
        }

        function mpDenormalize(buf) {
          assert.buffer(buf);

          while (buf.length > 1 && buf[0] === 0x00) buf = buf.slice(1);

          return buf;
        }

        function zeroPadToLength(buf, len) {
          assert.buffer(buf);
          assert.number(len);

          while (buf.length > len) {
            assert.equal(buf[0], 0x00);
            buf = buf.slice(1);
          }

          while (buf.length < len) {
            var b = Buffer.alloc(buf.length + 1);
            b[0] = 0x00;
            buf.copy(b, 1);
            buf = b;
          }

          return buf;
        }

        function bigintToMpBuf(bigint) {
          var buf = Buffer.from(bigint.toByteArray());
          buf = mpNormalize(buf);
          return buf;
        }

        function calculateDSAPublic(g, p, x) {
          assert.buffer(g);
          assert.buffer(p);
          assert.buffer(x);
          g = new jsbn(g);
          p = new jsbn(p);
          x = new jsbn(x);
          var y = g.modPow(x, p);
          var ybuf = bigintToMpBuf(y);
          return ybuf;
        }

        function calculateED25519Public(k) {
          assert.buffer(k);
          var kp = nacl.sign.keyPair.fromSeed(new Uint8Array(k));
          return Buffer.from(kp.publicKey);
        }

        function calculateX25519Public(k) {
          assert.buffer(k);
          var kp = nacl.box.keyPair.fromSeed(new Uint8Array(k));
          return Buffer.from(kp.publicKey);
        }

        function addRSAMissing(key) {
          assert.object(key);
          assertCompatible(key, PrivateKey, [1, 1]);
          var d = new jsbn(key.part.d.data);
          var buf;

          if (!key.part.dmodp) {
            var p = new jsbn(key.part.p.data);
            var dmodp = d.mod(p.subtract(1));
            buf = bigintToMpBuf(dmodp);
            key.part.dmodp = {
              name: 'dmodp',
              data: buf
            };
            key.parts.push(key.part.dmodp);
          }

          if (!key.part.dmodq) {
            var q = new jsbn(key.part.q.data);
            var dmodq = d.mod(q.subtract(1));
            buf = bigintToMpBuf(dmodq);
            key.part.dmodq = {
              name: 'dmodq',
              data: buf
            };
            key.parts.push(key.part.dmodq);
          }
        }

        function publicFromPrivateECDSA(curveName, priv) {
          assert.string(curveName, 'curveName');
          assert.buffer(priv);
          var params = algs.curves[curveName];
          var p = new jsbn(params.p);
          var a = new jsbn(params.a);
          var b = new jsbn(params.b);
          var curve = new ec.ECCurveFp(p, a, b);
          var G = curve.decodePointHex(params.G.toString('hex'));
          var d = new jsbn(mpNormalize(priv));
          var pub = G.multiply(d);
          pub = Buffer.from(curve.encodePointHex(pub), 'hex');
          var parts = [];
          parts.push({
            name: 'curve',
            data: Buffer.from(curveName)
          });
          parts.push({
            name: 'Q',
            data: pub
          });
          var key = new Key({
            type: 'ecdsa',
            curve: curve,
            parts: parts
          });
          return key;
        }

        function opensshCipherInfo(cipher) {
          var inf = {};

          switch (cipher) {
            case '3des-cbc':
              inf.keySize = 24;
              inf.blockSize = 8;
              inf.opensslName = 'des-ede3-cbc';
              break;

            case 'blowfish-cbc':
              inf.keySize = 16;
              inf.blockSize = 8;
              inf.opensslName = 'bf-cbc';
              break;

            case 'aes128-cbc':
            case 'aes128-ctr':
            case 'aes128-gcm@openssh.com':
              inf.keySize = 16;
              inf.blockSize = 16;
              inf.opensslName = 'aes-128-' + cipher.slice(7, 10);
              break;

            case 'aes192-cbc':
            case 'aes192-ctr':
            case 'aes192-gcm@openssh.com':
              inf.keySize = 24;
              inf.blockSize = 16;
              inf.opensslName = 'aes-192-' + cipher.slice(7, 10);
              break;

            case 'aes256-cbc':
            case 'aes256-ctr':
            case 'aes256-gcm@openssh.com':
              inf.keySize = 32;
              inf.blockSize = 16;
              inf.opensslName = 'aes-256-' + cipher.slice(7, 10);
              break;

            default:
              throw new Error('Unsupported openssl cipher "' + cipher + '"');
          }

          return inf;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _bufferSplit = module.exports.bufferSplit;
        _addRSAMissing = module.exports.addRSAMissing;
        _calculateDSAPublic = module.exports.calculateDSAPublic;
        _calculateED25519Public = module.exports.calculateED25519Public;
        _calculateX25519Public = module.exports.calculateX25519Public;
        _mpNormalize = module.exports.mpNormalize;
        _mpDenormalize = module.exports.mpDenormalize;
        _ecNormalize = module.exports.ecNormalize;
        _countZeros = module.exports.countZeros;
        _assertCompatible = module.exports.assertCompatible;
        _isCompatible = module.exports.isCompatible;
        _opensslKeyDeriv = module.exports.opensslKeyDeriv;
        _opensshCipherInfo = module.exports.opensshCipherInfo;
        _publicFromPrivateECDSA = module.exports.publicFromPrivateECDSA;
        _zeroPadToLength = module.exports.zeroPadToLength;
        _writeBitString = module.exports.writeBitString;
        _readBitString = module.exports.readBitString;
        _pbkdf2 = module.exports.pbkdf2;
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        './private-key': _req1,
        './key': _req2,
        'crypto': _req3,
        './algs': _req4,
        'asn1': _req5,
        'ecc-jsbn/lib/ec': _req6,
        'jsbn': _req7,
        'tweetnacl': _req8
      }));
    }
  };
});
//# sourceMappingURL=44e1e47983708075f5060b298e51c6253211ae66.js.map