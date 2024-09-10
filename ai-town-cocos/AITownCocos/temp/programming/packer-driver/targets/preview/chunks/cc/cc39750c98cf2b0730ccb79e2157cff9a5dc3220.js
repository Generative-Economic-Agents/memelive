System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _req26, _req27, _req28, _req29, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_9) {
      _req6 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req7 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req8 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req9 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req10 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req11 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req12 = _unresolved_15.__cjsMetaURL;
    }, function (_unresolved_16) {
      _req13 = _unresolved_16.__cjsMetaURL;
    }, function (_unresolved_17) {
      _req14 = _unresolved_17.__cjsMetaURL;
    }, function (_unresolved_18) {
      _req15 = _unresolved_18.__cjsMetaURL;
    }, function (_unresolved_19) {
      _req16 = _unresolved_19.__cjsMetaURL;
    }, function (_unresolved_20) {
      _req17 = _unresolved_20.__cjsMetaURL;
    }, function (_unresolved_21) {
      _req18 = _unresolved_21.__cjsMetaURL;
    }, function (_unresolved_22) {
      _req19 = _unresolved_22.__cjsMetaURL;
    }, function (_unresolved_23) {
      _req20 = _unresolved_23.__cjsMetaURL;
    }, function (_unresolved_24) {
      _req21 = _unresolved_24.__cjsMetaURL;
    }, function (_unresolved_25) {
      _req22 = _unresolved_25.__cjsMetaURL;
    }, function (_unresolved_26) {
      _req23 = _unresolved_26.__cjsMetaURL;
    }, function (_unresolved_27) {
      _req24 = _unresolved_27.__cjsMetaURL;
    }, function (_unresolved_28) {
      _req25 = _unresolved_28.__cjsMetaURL;
    }, function (_unresolved_29) {
      _req26 = _unresolved_29.__cjsMetaURL;
    }, function (_unresolved_30) {
      _req27 = _unresolved_30.__cjsMetaURL;
    }, function (_unresolved_31) {
      _req28 = _unresolved_31.__cjsMetaURL;
    }, function (_unresolved_32) {
      _req29 = _unresolved_32.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict'; // ECMAScript 6 symbols shim

        var global = require('./_global');

        var has = require('./_has');

        var DESCRIPTORS = require('./_descriptors');

        var $export = require('./_export');

        var redefine = require('./_redefine');

        var META = require('./_meta').KEY;

        var $fails = require('./_fails');

        var shared = require('./_shared');

        var setToStringTag = require('./_set-to-string-tag');

        var uid = require('./_uid');

        var wks = require('./_wks');

        var wksExt = require('./_wks-ext');

        var wksDefine = require('./_wks-define');

        var enumKeys = require('./_enum-keys');

        var isArray = require('./_is-array');

        var anObject = require('./_an-object');

        var isObject = require('./_is-object');

        var toObject = require('./_to-object');

        var toIObject = require('./_to-iobject');

        var toPrimitive = require('./_to-primitive');

        var createDesc = require('./_property-desc');

        var _create = require('./_object-create');

        var gOPNExt = require('./_object-gopn-ext');

        var $GOPD = require('./_object-gopd');

        var $GOPS = require('./_object-gops');

        var $DP = require('./_object-dp');

        var $keys = require('./_object-keys');

        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;

        var _stringify = $JSON && $JSON.stringify;

        var PROTOTYPE = 'prototype';
        var HIDDEN = wks('_hidden');
        var TO_PRIMITIVE = wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared('symbol-registry');
        var AllSymbols = shared('symbols');
        var OPSymbols = shared('op-symbols');
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
        var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

        var setSymbolDesc = DESCRIPTORS && $fails(function () {
          return _create(dP({}, 'a', {
            get: function get() {
              return dP(this, 'a', {
                value: 7
              }).a;
            }
          })).a != 7;
        }) ? function (it, key, D) {
          var protoDesc = gOPD(ObjectProto, key);
          if (protoDesc) delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function wrap(tag) {
          var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

          sym._k = tag;
          return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
          return typeof it == 'symbol';
        } : function (it) {
          return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);

          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
              D = _create(D, {
                enumerable: createDesc(0, false)
              });
            }

            return setSymbolDesc(it, key, D);
          }

          return dP(it, key, D);
        };

        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys(P = toIObject(P));
          var i = 0;
          var l = keys.length;
          var key;

          while (l > i) $defineProperty(it, key = keys[i++], P[key]);

          return it;
        };

        var $create = function create(it, P) {
          return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };

        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, key = toPrimitive(key, true));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
          return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };

        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
          var D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
          return D;
        };

        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i = 0;
          var key;

          while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
          }

          return result;
        };

        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i = 0;
          var key;

          while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
          }

          return result;
        }; // 19.4.1.1 Symbol([description])


        if (!USE_NATIVE) {
          $Symbol = function Symbol() {
            if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
            var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

            var $set = function $set(value) {
              if (this === ObjectProto) $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };

            if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
              configurable: true,
              set: $set
            });
            return wrap(tag);
          };

          redefine($Symbol[PROTOTYPE], 'toString', function toString() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
          require('./_object-pie').f = $propertyIsEnumerable;
          $GOPS.f = $getOwnPropertySymbols;

          if (DESCRIPTORS && !require('./_library')) {
            redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
          }

          wksExt.f = function (name) {
            return wrap(wks(name));
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Symbol: $Symbol
        });

        for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
        'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
          // 19.4.2.1 Symbol.for(key)
          'for': function _for(key) {
            return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
          },
          // 19.4.2.5 Symbol.keyFor(sym)
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

            for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
          },
          useSetter: function useSetter() {
            setter = true;
          },
          useSimple: function useSimple() {
            setter = false;
          }
        });
        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
          // 19.1.2.2 Object.create(O [, Properties])
          create: $create,
          // 19.1.2.4 Object.defineProperty(O, P, Attributes)
          defineProperty: $defineProperty,
          // 19.1.2.3 Object.defineProperties(O, Properties)
          defineProperties: $defineProperties,
          // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          // 19.1.2.7 Object.getOwnPropertyNames(O)
          getOwnPropertyNames: $getOwnPropertyNames,
          // 19.1.2.8 Object.getOwnPropertySymbols(O)
          getOwnPropertySymbols: $getOwnPropertySymbols
        }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443

        var FAILS_ON_PRIMITIVES = $fails(function () {
          $GOPS.f(1);
        });
        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return $GOPS.f(toObject(it));
          }
        }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
          var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
          // WebKit converts symbol values to JSON as null
          // V8 throws on boxed symbols

          return _stringify([S]) != '[null]' || _stringify({
            a: S
          }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
          stringify: function stringify(it) {
            var args = [it];
            var i = 1;
            var replacer, $replacer;

            while (arguments.length > i) args.push(arguments[i++]);

            $replacer = replacer = args[1];
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

            if (!isArray(replacer)) replacer = function replacer(key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
          }
        }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

        $Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

        setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

        setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

        setToStringTag(global.JSON, 'JSON', true); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_global': _req,
        './_has': _req0,
        './_descriptors': _req1,
        './_export': _req2,
        './_redefine': _req3,
        './_meta': _req4,
        './_fails': _req5,
        './_shared': _req6,
        './_set-to-string-tag': _req7,
        './_uid': _req8,
        './_wks': _req9,
        './_wks-ext': _req10,
        './_wks-define': _req11,
        './_enum-keys': _req12,
        './_is-array': _req13,
        './_an-object': _req14,
        './_is-object': _req15,
        './_to-object': _req16,
        './_to-iobject': _req17,
        './_to-primitive': _req18,
        './_property-desc': _req19,
        './_object-create': _req20,
        './_object-gopn-ext': _req21,
        './_object-gopd': _req22,
        './_object-gops': _req23,
        './_object-dp': _req24,
        './_object-keys': _req25,
        './_object-gopn': _req26,
        './_object-pie': _req27,
        './_library': _req28,
        './_hide': _req29
      }));
    }
  };
});
//# sourceMappingURL=cc39750c98cf2b0730ccb79e2157cff9a5dc3220.js.map