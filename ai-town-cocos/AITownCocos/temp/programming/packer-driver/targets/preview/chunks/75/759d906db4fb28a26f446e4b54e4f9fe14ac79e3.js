System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, __cjsMetaURL;

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
        'use strict'; // 19.1.2.1 Object.assign(target, source, ...)

        var DESCRIPTORS = require('./_descriptors');

        var getKeys = require('./_object-keys');

        var gOPS = require('./_object-gops');

        var pIE = require('./_object-pie');

        var toObject = require('./_to-object');

        var IObject = require('./_iobject');

        var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

        module.exports = !$assign || require('./_fails')(function () {
          var A = {};
          var B = {}; // eslint-disable-next-line no-undef

          var S = Symbol();
          var K = 'abcdefghijklmnopqrst';
          A[S] = 7;
          K.split('').forEach(function (k) {
            B[k] = k;
          });
          return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target);
          var aLen = arguments.length;
          var index = 1;
          var getSymbols = gOPS.f;
          var isEnum = pIE.f;

          while (aLen > index) {
            var S = IObject(arguments[index++]);
            var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
            var length = keys.length;
            var j = 0;
            var key;

            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
            }
          }

          return T;
        } : $assign; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_descriptors': _req,
        './_object-keys': _req0,
        './_object-gops': _req1,
        './_object-pie': _req2,
        './_to-object': _req3,
        './_iobject': _req4,
        './_fails': _req5
      }));
    }
  };
});
//# sourceMappingURL=759d906db4fb28a26f446e4b54e4f9fe14ac79e3.js.map