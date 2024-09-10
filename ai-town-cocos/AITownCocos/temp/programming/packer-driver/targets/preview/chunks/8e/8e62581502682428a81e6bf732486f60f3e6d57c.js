System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, _f, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var pIE = require('./_object-pie');

        var createDesc = require('./_property-desc');

        var toIObject = require('./_to-iobject');

        var toPrimitive = require('./_to-primitive');

        var has = require('./_has');

        var IE8_DOM_DEFINE = require('./_ie8-dom-define');

        var gOPD = Object.getOwnPropertyDescriptor;
        exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE) try {
            return gOPD(O, P);
          } catch (e) {
            /* empty */
          }
          if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _f = module.exports.f;
      }, () => ({
        './_object-pie': _req,
        './_property-desc': _req0,
        './_to-iobject': _req1,
        './_to-primitive': _req2,
        './_has': _req3,
        './_ie8-dom-define': _req4,
        './_descriptors': _req5
      }));
    }
  };
});
//# sourceMappingURL=8e62581502682428a81e6bf732486f60f3e6d57c.js.map