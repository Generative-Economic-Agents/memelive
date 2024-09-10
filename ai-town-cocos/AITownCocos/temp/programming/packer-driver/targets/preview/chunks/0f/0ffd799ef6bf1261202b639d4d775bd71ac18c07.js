System.register(["__unresolved_0", "__unresolved_1", "assert-plus", "asn1", "safer-buffer", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, _read, _verify, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_assertPlus) {
      _req0 = _assertPlus.__cjsMetaURL;
    }, function (_asn) {
      _req1 = _asn.__cjsMetaURL;
    }, function (_saferBuffer) {
      _req2 = _saferBuffer.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req4 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req5 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req6 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req7 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req8 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req9 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req10 = _unresolved_10.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2016 Joyent, Inc.
        var x509 = require('./x509');

        module.exports = {
          read: read,
          verify: x509.verify,
          sign: x509.sign,
          write: write
        };

        var assert = require('assert-plus');

        var asn1 = require('asn1');

        var Buffer = require('safer-buffer').Buffer;

        var algs = require('../algs');

        var utils = require('../utils');

        var Key = require('../key');

        var PrivateKey = require('../private-key');

        var pem = require('./pem');

        var Identity = require('../identity');

        var Signature = require('../signature');

        var Certificate = require('../certificate');

        function read(buf, options) {
          if (typeof buf !== 'string') {
            assert.buffer(buf, 'buf');
            buf = buf.toString('ascii');
          }

          var lines = buf.trim().split(/[\r\n]+/g);
          var m;
          var si = -1;

          while (!m && si < lines.length) {
            m = lines[++si].match(
            /*JSSTYLED*/
            /[-]+[ ]*BEGIN CERTIFICATE[ ]*[-]+/);
          }

          assert.ok(m, 'invalid PEM header');
          var m2;
          var ei = lines.length;

          while (!m2 && ei > 0) {
            m2 = lines[--ei].match(
            /*JSSTYLED*/
            /[-]+[ ]*END CERTIFICATE[ ]*[-]+/);
          }

          assert.ok(m2, 'invalid PEM footer');
          lines = lines.slice(si, ei + 1);
          var headers = {};

          while (true) {
            lines = lines.slice(1);
            m = lines[0].match(
            /*JSSTYLED*/
            /^([A-Za-z0-9-]+): (.+)$/);
            if (!m) break;
            headers[m[1].toLowerCase()] = m[2];
          }
          /* Chop off the first and last lines */


          lines = lines.slice(0, -1).join('');
          buf = Buffer.from(lines, 'base64');
          return x509.read(buf, options);
        }

        function write(cert, options) {
          var dbuf = x509.write(cert, options);
          var header = 'CERTIFICATE';
          var tmp = dbuf.toString('base64');
          var len = tmp.length + tmp.length / 64 + 18 + 16 + header.length * 2 + 10;
          var buf = Buffer.alloc(len);
          var o = 0;
          o += buf.write('-----BEGIN ' + header + '-----\n', o);

          for (var i = 0; i < tmp.length;) {
            var limit = i + 64;
            if (limit > tmp.length) limit = tmp.length;
            o += buf.write(tmp.slice(i, limit), o);
            buf[o++] = 10;
            i = limit;
          }

          o += buf.write('-----END ' + header + '-----\n', o);
          return buf.slice(0, o);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _read = module.exports.read;
        _verify = module.exports.verify;
      }, () => ({
        './x509': _req,
        'assert-plus': _req0,
        'asn1': _req1,
        'safer-buffer': _req2,
        '../algs': _req3,
        '../utils': _req4,
        '../key': _req5,
        '../private-key': _req6,
        './pem': _req7,
        '../identity': _req8,
        '../signature': _req9,
        '../certificate': _req10
      }));
    }
  };
});
//# sourceMappingURL=0ffd799ef6bf1261202b639d4d775bd71ac18c07.js.map