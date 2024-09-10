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
        exports.default = lazyInitialize;

        var _utils = require('./private/utils');

        var defineProperty = Object.defineProperty;

        function handleDescriptor(target, key, descriptor) {
          var configurable = descriptor.configurable,
              enumerable = descriptor.enumerable,
              initializer = descriptor.initializer,
              value = descriptor.value;
          return {
            configurable: configurable,
            enumerable: enumerable,
            get: function get() {
              // This happens if someone accesses the
              // property directly on the prototype
              if (this === target) {
                return;
              }

              var ret = initializer ? initializer.call(this) : value;
              defineProperty(this, key, {
                configurable: configurable,
                enumerable: enumerable,
                writable: true,
                value: ret
              });
              return ret;
            },
            set: (0, _utils.createDefaultSetter)(key)
          };
        }

        function lazyInitialize() {
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
//# sourceMappingURL=feb6017970a78ae5868bb37325a53c01773e5caa.js.map