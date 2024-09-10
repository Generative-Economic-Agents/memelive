System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "__unresolved_2", "__unresolved_3", "crypto", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, _read, _write, __cjsMetaURL;

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
    }, function (_crypto) {
      _req4 = _crypto.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req5 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req6 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2018 Joyent, Inc.
        module.exports = {
          read: read,
          write: write
        };

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var rfc4253 = require('./rfc4253');

        var Key = require('../key');

        var SSHBuffer = require('../ssh-buffer');

        var crypto = require('crypto');

        var PrivateKey = require('../private-key');

        var errors = require('../errors'); // https://tartarus.org/~simon/putty-prerel-snapshots/htmldoc/AppendixC.html


        function read(buf, options) {
          var lines = buf.toString('ascii').split(/[\r\n]+/);
          var found = false;
          var parts;
          var si = 0;
          var formatVersion;

          while (si < lines.length) {
            parts = splitHeader(lines[si++]);

            if (parts) {
              formatVersion = {
                'putty-user-key-file-2': 2,
                'putty-user-key-file-3': 3
              }[parts[0].toLowerCase()];

              if (formatVersion) {
                found = true;
                break;
              }
            }
          }

          if (!found) {
            throw new Error('No PuTTY format first line found');
          }

          var alg = parts[1];
          parts = splitHeader(lines[si++]);
          assert.equal(parts[0].toLowerCase(), 'encryption');
          var encryption = parts[1];
          parts = splitHeader(lines[si++]);
          assert.equal(parts[0].toLowerCase(), 'comment');
          var comment = parts[1];
          parts = splitHeader(lines[si++]);
          assert.equal(parts[0].toLowerCase(), 'public-lines');
          var publicLines = parseInt(parts[1], 10);

          if (!isFinite(publicLines) || publicLines < 0 || publicLines > lines.length) {
            throw new Error('Invalid public-lines count');
          }

          var publicBuf = Buffer.from(lines.slice(si, si + publicLines).join(''), 'base64');
          var keyType = rfc4253.algToKeyType(alg);
          var key = rfc4253.read(publicBuf);

          if (key.type !== keyType) {
            throw new Error('Outer key algorithm mismatch');
          }

          si += publicLines;

          if (lines[si]) {
            parts = splitHeader(lines[si++]);
            assert.equal(parts[0].toLowerCase(), 'private-lines');
            var privateLines = parseInt(parts[1], 10);

            if (!isFinite(privateLines) || privateLines < 0 || privateLines > lines.length) {
              throw new Error('Invalid private-lines count');
            }

            var privateBuf = Buffer.from(lines.slice(si, si + privateLines).join(''), 'base64');

            if (encryption !== 'none' && formatVersion === 3) {
              throw new Error('Encrypted keys arenot supported for' + ' PuTTY format version 3');
            }

            if (encryption === 'aes256-cbc') {
              if (!options.passphrase) {
                throw new errors.KeyEncryptedError(options.filename, 'PEM');
              }

              var iv = Buffer.alloc(16, 0);
              var decipher = crypto.createDecipheriv('aes-256-cbc', derivePPK2EncryptionKey(options.passphrase), iv);
              decipher.setAutoPadding(false);
              privateBuf = Buffer.concat([decipher.update(privateBuf), decipher.final()]);
            }

            key = new PrivateKey(key);

            if (key.type !== keyType) {
              throw new Error('Outer key algorithm mismatch');
            }

            var sshbuf = new SSHBuffer({
              buffer: privateBuf
            });
            var privateKeyParts;

            if (alg === 'ssh-dss') {
              privateKeyParts = [{
                name: 'x',
                data: sshbuf.readBuffer()
              }];
            } else if (alg === 'ssh-rsa') {
              privateKeyParts = [{
                name: 'd',
                data: sshbuf.readBuffer()
              }, {
                name: 'p',
                data: sshbuf.readBuffer()
              }, {
                name: 'q',
                data: sshbuf.readBuffer()
              }, {
                name: 'iqmp',
                data: sshbuf.readBuffer()
              }];
            } else if (alg.match(/^ecdsa-sha2-nistp/)) {
              privateKeyParts = [{
                name: 'd',
                data: sshbuf.readBuffer()
              }];
            } else if (alg === 'ssh-ed25519') {
              privateKeyParts = [{
                name: 'k',
                data: sshbuf.readBuffer()
              }];
            } else {
              throw new Error('Unsupported PPK key type: ' + alg);
            }

            key = new PrivateKey({
              type: key.type,
              parts: key.parts.concat(privateKeyParts)
            });
          }

          key.comment = comment;
          return key;
        }

        function derivePPK2EncryptionKey(passphrase) {
          var hash1 = crypto.createHash('sha1').update(Buffer.concat([Buffer.from([0, 0, 0, 0]), Buffer.from(passphrase)])).digest();
          var hash2 = crypto.createHash('sha1').update(Buffer.concat([Buffer.from([0, 0, 0, 1]), Buffer.from(passphrase)])).digest();
          return Buffer.concat([hash1, hash2]).slice(0, 32);
        }

        function splitHeader(line) {
          var idx = line.indexOf(':');
          if (idx === -1) return null;
          var header = line.slice(0, idx);
          ++idx;

          while (line[idx] === ' ') ++idx;

          var rest = line.slice(idx);
          return [header, rest];
        }

        function write(key, options) {
          assert.object(key);
          if (!Key.isKey(key)) throw new Error('Must be a public key');
          var alg = rfc4253.keyTypeToAlg(key);
          var buf = rfc4253.write(key);
          var comment = key.comment || '';
          var b64 = buf.toString('base64');
          var lines = wrap(b64, 64);
          lines.unshift('Public-Lines: ' + lines.length);
          lines.unshift('Comment: ' + comment);
          lines.unshift('Encryption: none');
          lines.unshift('PuTTY-User-Key-File-2: ' + alg);
          return Buffer.from(lines.join('\n') + '\n');
        }

        function wrap(txt, len) {
          var lines = [];
          var pos = 0;

          while (pos < txt.length) {
            lines.push(txt.slice(pos, pos + 64));
            pos += 64;
          }

          return lines;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _read = module.exports.read;
        _write = module.exports.write;
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        './rfc4253': _req1,
        '../key': _req2,
        '../ssh-buffer': _req3,
        'crypto': _req4,
        '../private-key': _req5,
        '../errors': _req6
      }));
    }
  };
});
//# sourceMappingURL=0b0972f7cc9ca6548eb95ae97ae1bfc7c08c8d0d.js.map