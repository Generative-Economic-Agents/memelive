System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, _KEY, _NEED, _fastKey, _getWeak, _onFreeze, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var META = require('./_uid')('meta');

        var isObject = require('./_is-object');

        var has = require('./_has');

        var setDesc = require('./_object-dp').f;

        var id = 0;

        var isExtensible = Object.isExtensible || function () {
          return true;
        };

        var FREEZE = !require('./_fails')(function () {
          return isExtensible(Object.preventExtensions({}));
        });

        var setMeta = function (it) {
          setDesc(it, META, {
            value: {
              i: 'O' + ++id,
              // object ID
              w: {} // weak collections IDs

            }
          });
        };

        var fastKey = function (it, create) {
          // return primitive with prefix
          if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F'; // not necessary to add metadata

            if (!create) return 'E'; // add missing metadata

            setMeta(it); // return object ID
          }

          return it[META].i;
        };

        var getWeak = function (it, create) {
          if (!has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true; // not necessary to add metadata

            if (!create) return false; // add missing metadata

            setMeta(it); // return hash weak collections IDs
          }

          return it[META].w;
        }; // add metadata on freeze-family methods calling


        var onFreeze = function (it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
          return it;
        };

        var meta = module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _KEY = module.exports.KEY;
        _NEED = module.exports.NEED;
        _fastKey = module.exports.fastKey;
        _getWeak = module.exports.getWeak;
        _onFreeze = module.exports.onFreeze;
      }, () => ({
        './_uid': _req,
        './_is-object': _req0,
        './_has': _req1,
        './_object-dp': _req2,
        './_fails': _req3
      }));
    }
  };
});
//# sourceMappingURL=0cd84c383494fecbc444d6c468b4ef47506890a0.js.map