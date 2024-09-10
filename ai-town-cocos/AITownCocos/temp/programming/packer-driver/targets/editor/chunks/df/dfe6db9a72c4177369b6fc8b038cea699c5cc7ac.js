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
        exports.default = decorate;

        var _utils = require('./private/utils');

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _toArray(arr) {
          return Array.isArray(arr) ? arr : Array.from(arr);
        }

        var defineProperty = Object.defineProperty;

        function handleDescriptor(target, key, descriptor, _ref) {
          var _ref2 = _toArray(_ref),
              decorator = _ref2[0],
              args = _ref2.slice(1);

          var configurable = descriptor.configurable,
              enumerable = descriptor.enumerable,
              writable = descriptor.writable;
          var originalGet = descriptor.get;
          var originalSet = descriptor.set;
          var originalValue = descriptor.value;
          var isGetter = !!originalGet;
          return {
            configurable: configurable,
            enumerable: enumerable,
            get: function get() {
              var fn = isGetter ? originalGet.call(this) : originalValue;
              var value = decorator.call.apply(decorator, [this, fn].concat(_toConsumableArray(args)));

              if (isGetter) {
                return value;
              } else {
                var desc = {
                  configurable: configurable,
                  enumerable: enumerable
                };
                desc.value = value;
                desc.writable = writable;
                defineProperty(this, key, desc);
                return value;
              }
            },
            set: isGetter ? originalSet : (0, _utils.createDefaultSetter)()
          };
        }

        function decorate() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
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
//# sourceMappingURL=dfe6db9a72c4177369b6fc8b038cea699c5cc7ac.js.map