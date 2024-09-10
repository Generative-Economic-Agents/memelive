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

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        exports.default = mixin;

        var _utils = require('./private/utils');

        var defineProperty = Object.defineProperty,
            getPrototypeOf = Object.getPrototypeOf;

        function buggySymbol(symbol) {
          return Object.prototype.toString.call(symbol) === '[object Symbol]' && (typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol)) === 'object';
        }

        function hasProperty(prop, obj) {
          // We have to traverse manually prototypes' chain for polyfilled ES6 Symbols
          // like "in" operator does.
          // I.e.: Babel 5 Symbol polyfill stores every created symbol in Object.prototype.
          // That's why we cannot use construction like "prop in obj" to check, if needed
          // prop actually exists in given object/prototypes' chain.
          if (buggySymbol(prop)) {
            do {
              if (obj === Object.prototype) {
                // Polyfill assigns undefined as value for stored symbol key.
                // We can assume in this special case if there is nothing assigned it doesn't exist.
                return typeof obj[prop] !== 'undefined';
              }

              if (obj.hasOwnProperty(prop)) {
                return true;
              }
            } while (obj = getPrototypeOf(obj));

            return false;
          } else {
            return prop in obj;
          }
        }

        function handleClass(target, mixins) {
          if (!mixins.length) {
            throw new SyntaxError('@mixin() class ' + target.name + ' requires at least one mixin as an argument');
          }

          for (var i = 0, l = mixins.length; i < l; i++) {
            var descs = (0, _utils.getOwnPropertyDescriptors)(mixins[i]);
            var keys = (0, _utils.getOwnKeys)(descs);

            for (var j = 0, k = keys.length; j < k; j++) {
              var key = keys[j];

              if (!hasProperty(key, target.prototype)) {
                defineProperty(target.prototype, key, descs[key]);
              }
            }
          }
        }

        function mixin() {
          for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
            mixins[_key] = arguments[_key];
          }

          if (typeof mixins[0] === 'function') {
            return handleClass(mixins[0], []);
          } else {
            return function (target) {
              return handleClass(target, mixins);
            };
          }
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
//# sourceMappingURL=d610989a3d49f900b02431370543960fdc8e5fec.js.map