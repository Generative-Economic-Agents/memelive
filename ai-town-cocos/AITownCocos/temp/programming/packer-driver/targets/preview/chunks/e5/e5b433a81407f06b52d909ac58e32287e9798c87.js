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

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        exports.default = suppressWarnings;

        var _utils = require('./private/utils');

        function suppressedWarningNoop() {// Warnings are currently suppressed via @suppressWarnings
        }

        function applyWithoutWarnings(context, fn, args) {
          if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object') {
            var nativeWarn = console.warn;
            console.warn = suppressedWarningNoop;
            var ret = fn.apply(context, args);
            console.warn = nativeWarn;
            return ret;
          } else {
            return fn.apply(context, args);
          }
        }

        function handleDescriptor(target, key, descriptor) {
          return _extends({}, descriptor, {
            value: function suppressWarningsWrapper() {
              return applyWithoutWarnings(this, descriptor.value, arguments);
            }
          });
        }

        function suppressWarnings() {
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
//# sourceMappingURL=e5b433a81407f06b52d909ac58e32287e9798c87.js.map