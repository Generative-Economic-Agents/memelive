System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, _virtual, __cjsMetaURL;

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
        var global = require('./_global');

        var core = require('./_core');

        var ctx = require('./_ctx');

        var hide = require('./_hide');

        var has = require('./_has');

        var PROTOTYPE = 'prototype';

        var $export = function (type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;

          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue; // export native or passed

            out = own ? target[key] : source[key]; // prevent global pollution for namespaces

            exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? function (C) {
              var F = function (a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();

                    case 1:
                      return new C(a);

                    case 2:
                      return new C(a, b);
                  }

                  return new C(a, b, c);
                }

                return C.apply(this, arguments);
              };

              F[PROTOTYPE] = C[PROTOTYPE];
              return F; // make static versions for prototype methods
            }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

              if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
            }
          }
        }; // type bitmap


        $export.F = 1; // forced

        $export.G = 2; // global

        $export.S = 4; // static

        $export.P = 8; // proto

        $export.B = 16; // bind

        $export.W = 32; // wrap

        $export.U = 64; // safe

        $export.R = 128; // real proto method for `library`

        module.exports = $export; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _virtual = module.exports.virtual;
      }, () => ({
        './_global': _req,
        './_core': _req0,
        './_ctx': _req1,
        './_hide': _req2,
        './_has': _req3
      }));
    }
  };
});
//# sourceMappingURL=05d695168e03efa23303619995a9468fe121cf5b.js.map