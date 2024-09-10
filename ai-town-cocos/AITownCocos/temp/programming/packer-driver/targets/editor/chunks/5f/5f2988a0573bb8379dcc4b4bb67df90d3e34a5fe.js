System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _Ber, _BerReader, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
        // If you have no idea what ASN.1 or BER is, see this:
        // ftp://ftp.rsa.com/pub/pkcs/ascii/layman.asc
        var Ber = require('./ber/index'); // --- Exported API


        module.exports = {
          Ber: Ber,
          BerReader: Ber.Reader,
          BerWriter: Ber.Writer
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Ber = module.exports.Ber;
        _BerReader = module.exports.BerReader;
      }, () => ({
        './ber/index': _req
      }));
    }
  };
});
//# sourceMappingURL=5f2988a0573bb8379dcc4b4bb67df90d3e34a5fe.js.map