System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, _read, __cjsMetaURL;

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
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req4 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req5 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2015 Joyent, Inc.
        module.exports = {
          read: read.bind(undefined, false, undefined),
          readType: read.bind(undefined, false),
          write: write,

          /* semi-private api, used by sshpk-agent */
          readPartial: read.bind(undefined, true),

          /* shared with ssh format */
          readInternal: read,
          keyTypeToAlg: keyTypeToAlg,
          algToKeyType: algToKeyType
        };

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var algs = require('../algs');

        var utils = require('../utils');

        var Key = require('../key');

        var PrivateKey = require('../private-key');

        var SSHBuffer = require('../ssh-buffer');

        function algToKeyType(alg) {
          assert.string(alg);
          if (alg === 'ssh-dss') return 'dsa';else if (alg === 'ssh-rsa') return 'rsa';else if (alg === 'ssh-ed25519') return 'ed25519';else if (alg === 'ssh-curve25519') return 'curve25519';else if (alg.match(/^ecdsa-sha2-/)) return 'ecdsa';else throw new Error('Unknown algorithm ' + alg);
        }

        function keyTypeToAlg(key) {
          assert.object(key);
          if (key.type === 'dsa') return 'ssh-dss';else if (key.type === 'rsa') return 'ssh-rsa';else if (key.type === 'ed25519') return 'ssh-ed25519';else if (key.type === 'curve25519') return 'ssh-curve25519';else if (key.type === 'ecdsa') return 'ecdsa-sha2-' + key.part.curve.data.toString();else throw new Error('Unknown key type ' + key.type);
        }

        function read(partial, type, buf, options) {
          if (typeof buf === 'string') buf = Buffer.from(buf);
          assert.buffer(buf, 'buf');
          var key = {};
          var parts = key.parts = [];
          var sshbuf = new SSHBuffer({
            buffer: buf
          });
          var alg = sshbuf.readString();
          assert.ok(!sshbuf.atEnd(), 'key must have at least one part');
          key.type = algToKeyType(alg);
          var partCount = algs.info[key.type].parts.length;
          if (type && type === 'private') partCount = algs.privInfo[key.type].parts.length;

          while (!sshbuf.atEnd() && parts.length < partCount) parts.push(sshbuf.readPart());

          while (!partial && !sshbuf.atEnd()) parts.push(sshbuf.readPart());

          assert.ok(parts.length >= 1, 'key must have at least one part');
          assert.ok(partial || sshbuf.atEnd(), 'leftover bytes at end of key');
          var Constructor = Key;
          var algInfo = algs.info[key.type];

          if (type === 'private' || algInfo.parts.length !== parts.length) {
            algInfo = algs.privInfo[key.type];
            Constructor = PrivateKey;
          }

          assert.strictEqual(algInfo.parts.length, parts.length);

          if (key.type === 'ecdsa') {
            var res = /^ecdsa-sha2-(.+)$/.exec(alg);
            assert.ok(res !== null);
            assert.strictEqual(res[1], parts[0].data.toString());
          }

          var normalized = true;

          for (var i = 0; i < algInfo.parts.length; ++i) {
            var p = parts[i];
            p.name = algInfo.parts[i];
            /*
             * OpenSSH stores ed25519 "private" keys as seed + public key
             * concat'd together (k followed by A). We want to keep them
             * separate for other formats that don't do this.
             */

            if (key.type === 'ed25519' && p.name === 'k') p.data = p.data.slice(0, 32);

            if (p.name !== 'curve' && algInfo.normalize !== false) {
              var nd;

              if (key.type === 'ed25519') {
                nd = utils.zeroPadToLength(p.data, 32);
              } else {
                nd = utils.mpNormalize(p.data);
              }

              if (nd.toString('binary') !== p.data.toString('binary')) {
                p.data = nd;
                normalized = false;
              }
            }
          }

          if (normalized) key._rfc4253Cache = sshbuf.toBuffer();

          if (partial && typeof partial === 'object') {
            partial.remainder = sshbuf.remainder();
            partial.consumed = sshbuf._offset;
          }

          return new Constructor(key);
        }

        function write(key, options) {
          assert.object(key);
          var alg = keyTypeToAlg(key);
          var i;
          var algInfo = algs.info[key.type];
          if (PrivateKey.isPrivateKey(key)) algInfo = algs.privInfo[key.type];
          var parts = algInfo.parts;
          var buf = new SSHBuffer({});
          buf.writeString(alg);

          for (i = 0; i < parts.length; ++i) {
            var data = key.part[parts[i]].data;

            if (algInfo.normalize !== false) {
              if (key.type === 'ed25519') data = utils.zeroPadToLength(data, 32);else data = utils.mpNormalize(data);
            }

            if (key.type === 'ed25519' && parts[i] === 'k') data = Buffer.concat([data, key.part.A.data]);
            buf.writeBuffer(data);
          }

          return buf.toBuffer();
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _read = module.exports.read;
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        '../algs': _req1,
        '../utils': _req2,
        '../key': _req3,
        '../private-key': _req4,
        '../ssh-buffer': _req5
      }));
    }
  };
});
//# sourceMappingURL=0feb734a1acb6ee7355335e73d8b66d7e755aa76.js.map