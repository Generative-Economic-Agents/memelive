System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        exports.default = memoize;

        var _utils = require('./private/utils');

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        function toObject(cache, value) {
          if (value === Object(value)) {
            return value;
          }

          return cache[value] || (cache[value] = {});
        }

        function applyAndCache(context, fn, args, cache, signature) {
          var ret = fn.apply(context, args);
          cache[signature] = ret;
          return ret;
        }

        function metaForDescriptor(descriptor) {
          var fn = void 0,
              wrapKey = void 0; // This is ugly code, but way faster than other
          // ways I tried that *looked* pretty

          if (descriptor.value) {
            fn = descriptor.value;
            wrapKey = 'value';
          } else if (descriptor.get) {
            fn = descriptor.get;
            wrapKey = 'get';
          } else if (descriptor.set) {
            fn = descriptor.set;
            wrapKey = 'set';
          }

          return {
            fn: fn,
            wrapKey: wrapKey
          };
        }

        function handleDescriptor(target, key, descriptor) {
          console.warn('DEPRECATION: @memoize is deprecated and will be removed shortly. Use @decorate with lodash\'s memoize helper.\n\n  https://github.com/jayphelps/core-decorators.js#decorate');

          var _metaForDescriptor = metaForDescriptor(descriptor),
              fn = _metaForDescriptor.fn,
              wrapKey = _metaForDescriptor.wrapKey;

          var argumentCache = new WeakMap();
          var signatureCache = Object.create(null);
          var primativeRefCache = Object.create(null);
          var argumentIdCounter = 0;
          return _extends({}, descriptor, _defineProperty({}, wrapKey, function memoizeWrapper() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var signature = '0';

            for (var i = 0, l = args.length; i < l; i++) {
              var arg = args[i];
              var argRef = toObject(primativeRefCache, arg);
              var argKey = argumentCache.get(argRef);

              if (argKey === undefined) {
                argKey = ++argumentIdCounter;
                argumentCache.set(argRef, argKey);
              }

              signature += argKey;
            }

            return signatureCache[signature] || applyAndCache(this, fn, arguments, signatureCache, signature);
          }));
        }

        function memoize() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return (0, _utils.decorate)(handleDescriptor, args);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './private/utils': _req
      }));
    }
  };
});
//# sourceMappingURL=e8c61020f90eaa15450252b005cac24405d65a76.js.map