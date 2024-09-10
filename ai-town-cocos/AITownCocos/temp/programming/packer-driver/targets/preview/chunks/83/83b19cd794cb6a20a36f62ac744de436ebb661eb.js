System.register(["__unresolved_0", "assert-plus", "safer-buffer", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, _read, _write, __cjsMetaURL;

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
          read: read,
          write: write
        };

        var assert = require('assert-plus');

        var Buffer = require('safer-buffer').Buffer;

        var rfc4253 = require('./rfc4253');

        var utils = require('../utils');

        var Key = require('../key');

        var PrivateKey = require('../private-key');

        var sshpriv = require('./ssh-private');
        /*JSSTYLED*/


        var SSHKEY_RE = /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/;
        /*JSSTYLED*/

        var SSHKEY_RE2 = /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/;

        function read(buf, options) {
          if (typeof buf !== 'string') {
            assert.buffer(buf, 'buf');
            buf = buf.toString('ascii');
          }

          var trimmed = buf.trim().replace(/[\\\r]/g, '');
          var m = trimmed.match(SSHKEY_RE);
          if (!m) m = trimmed.match(SSHKEY_RE2);
          assert.ok(m, 'key must match regex');
          var type = rfc4253.algToKeyType(m[1]);
          var kbuf = Buffer.from(m[2], 'base64');
          /*
           * This is a bit tricky. If we managed to parse the key and locate the
           * key comment with the regex, then do a non-partial read and assert
           * that we have consumed all bytes. If we couldn't locate the key
           * comment, though, there may be whitespace shenanigans going on that
           * have conjoined the comment to the rest of the key. We do a partial
           * read in this case to try to make the best out of a sorry situation.
           */

          var key;
          var ret = {};

          if (m[4]) {
            try {
              key = rfc4253.read(kbuf);
            } catch (e) {
              m = trimmed.match(SSHKEY_RE2);
              assert.ok(m, 'key must match regex');
              kbuf = Buffer.from(m[2], 'base64');
              key = rfc4253.readInternal(ret, 'public', kbuf);
            }
          } else {
            key = rfc4253.readInternal(ret, 'public', kbuf);
          }

          assert.strictEqual(type, key.type);

          if (m[4] && m[4].length > 0) {
            key.comment = m[4];
          } else if (ret.consumed) {
            /*
             * Now the magic: trying to recover the key comment when it's
             * gotten conjoined to the key or otherwise shenanigan'd.
             *
             * Work out how much base64 we used, then drop all non-base64
             * chars from the beginning up to this point in the the string.
             * Then offset in this and try to make up for missing = chars.
             */
            var data = m[2] + (m[3] ? m[3] : '');
            var realOffset = Math.ceil(ret.consumed / 3) * 4;
            data = data.slice(0, realOffset - 2).
            /*JSSTYLED*/
            replace(/[^a-zA-Z0-9+\/=]/g, '') + data.slice(realOffset - 2);
            var padding = ret.consumed % 3;
            if (padding > 0 && data.slice(realOffset - 1, realOffset) !== '=') realOffset--;

            while (data.slice(realOffset, realOffset + 1) === '=') realOffset++;
            /* Finally, grab what we think is the comment & clean it up. */


            var trailer = data.slice(realOffset);
            trailer = trailer.replace(/[\r\n]/g, ' ').replace(/^\s+/, '');
            if (trailer.match(/^[a-zA-Z0-9]/)) key.comment = trailer;
          }

          return key;
        }

        function write(key, options) {
          assert.object(key);
          if (!Key.isKey(key)) throw new Error('Must be a public key');
          var parts = [];
          var alg = rfc4253.keyTypeToAlg(key);
          parts.push(alg);
          var buf = rfc4253.write(key);
          parts.push(buf.toString('base64'));
          if (key.comment) parts.push(key.comment);
          return Buffer.from(parts.join(' '));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _read = module.exports.read;
        _write = module.exports.write;
      }, () => ({
        'assert-plus': _req,
        'safer-buffer': _req0,
        './rfc4253': _req1,
        '../utils': _req2,
        '../key': _req3,
        '../private-key': _req4,
        './ssh-private': _req5
      }));
    }
  };
});
//# sourceMappingURL=83b19cd794cb6a20a36f62ac744de436ebb661eb.js.map