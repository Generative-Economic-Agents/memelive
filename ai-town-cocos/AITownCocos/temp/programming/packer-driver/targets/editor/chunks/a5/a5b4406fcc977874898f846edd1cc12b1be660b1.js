System.register(["__unresolved_0", "crypto", "jsbn", "__unresolved_1", "safer-buffer", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, _ECCurves, _ECKey, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_crypto) {
      _req = _crypto.__cjsMetaURL;
    }, function (_jsbn) {
      _req0 = _jsbn.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_saferBuffer) {
      _req2 = _saferBuffer.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var crypto = require("crypto");

        var BigInteger = require("jsbn").BigInteger;

        var ECPointFp = require("./lib/ec.js").ECPointFp;

        var Buffer = require("safer-buffer").Buffer;

        exports.ECCurves = require("./lib/sec.js"); // zero prepad

        function unstupid(hex, len) {
          return hex.length >= len ? hex : unstupid("0" + hex, len);
        }

        exports.ECKey = function (curve, key, isPublic) {
          var priv;
          var c = curve();
          var n = c.getN();
          var bytes = Math.floor(n.bitLength() / 8);

          if (key) {
            if (isPublic) {
              var curve = c.getCurve(); //      var x = key.slice(1,bytes+1); // skip the 04 for uncompressed format
              //      var y = key.slice(bytes+1);
              //      this.P = new ECPointFp(curve,
              //        curve.fromBigInteger(new BigInteger(x.toString("hex"), 16)),
              //        curve.fromBigInteger(new BigInteger(y.toString("hex"), 16)));      

              this.P = curve.decodePointHex(key.toString("hex"));
            } else {
              if (key.length != bytes) return false;
              priv = new BigInteger(key.toString("hex"), 16);
            }
          } else {
            var n1 = n.subtract(BigInteger.ONE);
            var r = new BigInteger(crypto.randomBytes(n.bitLength()));
            priv = r.mod(n1).add(BigInteger.ONE);
            this.P = c.getG().multiply(priv);
          }

          if (this.P) {
            //  var pubhex = unstupid(this.P.getX().toBigInteger().toString(16),bytes*2)+unstupid(this.P.getY().toBigInteger().toString(16),bytes*2);
            //  this.PublicKey = Buffer.from("04"+pubhex,"hex");
            this.PublicKey = Buffer.from(c.getCurve().encodeCompressedPointHex(this.P), "hex");
          }

          if (priv) {
            this.PrivateKey = Buffer.from(unstupid(priv.toString(16), bytes * 2), "hex");

            this.deriveSharedSecret = function (key) {
              if (!key || !key.P) return false;
              var S = key.P.multiply(priv);
              return Buffer.from(unstupid(S.getX().toBigInteger().toString(16), bytes * 2), "hex");
            };
          }
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _ECCurves = module.exports.ECCurves;
        _ECKey = module.exports.ECKey;
      }, () => ({
        'crypto': _req,
        'jsbn': _req0,
        './lib/ec.js': _req1,
        'safer-buffer': _req2,
        './lib/sec.js': _req3
      }));
    }
  };
});
//# sourceMappingURL=a5b4406fcc977874898f846edd1cc12b1be660b1.js.map