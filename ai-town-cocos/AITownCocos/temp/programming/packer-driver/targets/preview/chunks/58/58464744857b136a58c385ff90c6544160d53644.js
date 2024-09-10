System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var LIBRARY = require('./_library');

        var $export = require('./_export');

        var redefine = require('./_redefine');

        var hide = require('./_hide');

        var Iterators = require('./_iterators');

        var $iterCreate = require('./_iter-create');

        var setToStringTag = require('./_set-to-string-tag');

        var getPrototypeOf = require('./_object-gpo');

        var ITERATOR = require('./_wks')('iterator');

        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function returnThis() {
          return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);

          var getMethod = function getMethod(kind) {
            if (!BUGGY && kind in proto) return proto[kind];

            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };

              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }

            return function entries() {
              return new Constructor(this, kind);
            };
          };

          var TAG = NAME + ' Iterator';
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype; // Fix native

          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
            }
          } // fix Array#{values, @@iterator}.name in V8 / FF


          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;

            $default = function values() {
              return $native.call(this);
            };
          } // Define iterator


          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          } // Plug for library


          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;

          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }

          return methods;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_library': _req,
        './_export': _req0,
        './_redefine': _req1,
        './_hide': _req2,
        './_iterators': _req3,
        './_iter-create': _req4,
        './_set-to-string-tag': _req5,
        './_object-gpo': _req6,
        './_wks': _req7
      }));
    }
  };
});
//# sourceMappingURL=58464744857b136a58c385ff90c6544160d53644.js.map