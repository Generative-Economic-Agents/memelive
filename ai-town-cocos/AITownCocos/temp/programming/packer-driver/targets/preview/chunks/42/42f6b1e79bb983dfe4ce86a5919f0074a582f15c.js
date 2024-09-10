System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, _read, _write, __cjsMetaURL;

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
    }, function (_unresolved_7) {
      _req6 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req7 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req8 = _unresolved_9.__cjsMetaURL;
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

        var utils = require('../utils');

        var Key = require('../key');

        var PrivateKey = require('../private-key');

        var pem = require('./pem');

        var ssh = require('./ssh');

        var rfc4253 = require('./rfc4253');

        var dnssec = require('./dnssec');

        var putty = require('./putty');

        var DNSSEC_PRIVKEY_HEADER_PREFIX = 'Private-key-format: v1';

        function read(buf, options) {
          if (typeof buf === 'string') {
            if (buf.trim().match(/^[-]+[ ]*BEGIN/)) return pem.read(buf, options);
            if (buf.match(/^\s*ssh-[a-z]/)) return ssh.read(buf, options);
            if (buf.match(/^\s*ecdsa-/)) return ssh.read(buf, options);
            if (buf.match(/^putty-user-key-file-2:/i)) return putty.read(buf, options);
            if (findDNSSECHeader(buf)) return dnssec.read(buf, options);
            buf = Buffer.from(buf, 'binary');
          } else {
            assert.buffer(buf);
            if (findPEMHeader(buf)) return pem.read(buf, options);
            if (findSSHHeader(buf)) return ssh.read(buf, options);
            if (findPuTTYHeader(buf)) return putty.read(buf, options);
            if (findDNSSECHeader(buf)) return dnssec.read(buf, options);
          }

          if (buf.readUInt32BE(0) < buf.length) return rfc4253.read(buf, options);
          throw new Error('Failed to auto-detect format of key');
        }

        function findPuTTYHeader(buf) {
          var offset = 0;

          while (offset < buf.length && (buf[offset] === 32 || buf[offset] === 10 || buf[offset] === 9)) ++offset;

          if (offset + 22 <= buf.length && buf.slice(offset, offset + 22).toString('ascii').toLowerCase() === 'putty-user-key-file-2:') return true;
          return false;
        }

        function findSSHHeader(buf) {
          var offset = 0;

          while (offset < buf.length && (buf[offset] === 32 || buf[offset] === 10 || buf[offset] === 9)) ++offset;

          if (offset + 4 <= buf.length && buf.slice(offset, offset + 4).toString('ascii') === 'ssh-') return true;
          if (offset + 6 <= buf.length && buf.slice(offset, offset + 6).toString('ascii') === 'ecdsa-') return true;
          return false;
        }

        function findPEMHeader(buf) {
          var offset = 0;

          while (offset < buf.length && (buf[offset] === 32 || buf[offset] === 10)) ++offset;

          if (buf[offset] !== 45) return false;

          while (offset < buf.length && buf[offset] === 45) ++offset;

          while (offset < buf.length && buf[offset] === 32) ++offset;

          if (offset + 5 > buf.length || buf.slice(offset, offset + 5).toString('ascii') !== 'BEGIN') return false;
          return true;
        }

        function findDNSSECHeader(buf) {
          // private case first
          if (buf.length <= DNSSEC_PRIVKEY_HEADER_PREFIX.length) return false;
          var headerCheck = buf.slice(0, DNSSEC_PRIVKEY_HEADER_PREFIX.length);
          if (headerCheck.toString('ascii') === DNSSEC_PRIVKEY_HEADER_PREFIX) return true; // public-key RFC3110 ?
          // 'domain.com. IN KEY ...' or 'domain.com. IN DNSKEY ...'
          // skip any comment-lines

          if (typeof buf !== 'string') {
            buf = buf.toString('ascii');
          }

          var lines = buf.split('\n');
          var line = 0;
          /* JSSTYLED */

          while (lines[line].match(/^\;/)) line++;

          if (lines[line].toString('ascii').match(/\. IN KEY /)) return true;
          if (lines[line].toString('ascii').match(/\. IN DNSKEY /)) return true;
          return false;
        }

        function write(key, options) {
          throw new Error('"auto" format cannot be used for writing');
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _read = module.exports.read;
        _write = module.exports.write;
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        '../utils': _req1,
        '../key': _req2,
        '../private-key': _req3,
        './pem': _req4,
        './ssh': _req5,
        './rfc4253': _req6,
        './dnssec': _req7,
        './putty': _req8
      }));
    }
  };
});
//# sourceMappingURL=42f6b1e79bb983dfe4ce86a5919f0074a582f15c.js.map