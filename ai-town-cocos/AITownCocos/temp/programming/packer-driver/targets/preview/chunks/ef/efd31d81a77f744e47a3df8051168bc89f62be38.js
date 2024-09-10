System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _defaultConsole, _default, __cjsMetaURL;

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
        exports.defaultConsole = undefined;

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

        var _slicedToArray = function () {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"]) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();

        exports.default = time;

        var _utils = require('./private/utils');

        var labels = {}; // Exported for mocking in tests

        var defaultConsole = exports.defaultConsole = {
          time: console.time ? console.time.bind(console) : function (label) {
            labels[label] = new Date();
          },
          timeEnd: console.timeEnd ? console.timeEnd.bind(console) : function (label) {
            var timeNow = new Date();
            var timeTaken = timeNow - labels[label];
            delete labels[label];
            console.log(label + ': ' + timeTaken + 'ms');
          }
        };
        var count = 0;

        function handleDescriptor(target, key, descriptor, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              _ref2$ = _ref2[0],
              prefix = _ref2$ === undefined ? null : _ref2$,
              _ref2$2 = _ref2[1],
              console = _ref2$2 === undefined ? defaultConsole : _ref2$2;

          var fn = descriptor.value;

          if (prefix === null) {
            prefix = target.constructor.name + '.' + key;
          }

          if (typeof fn !== 'function') {
            throw new SyntaxError('@time can only be used on functions, not: ' + fn);
          }

          return _extends({}, descriptor, {
            value: function value() {
              var label = prefix + '-' + count;
              count++;
              console.time(label);

              try {
                return fn.apply(this, arguments);
              } finally {
                console.timeEnd(label);
              }
            }
          });
        }

        function time() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (0, _utils.decorate)(handleDescriptor, args);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _defaultConsole = module.exports.defaultConsole;
        _default = module.exports.default;
      }, () => ({
        './private/utils': _req
      }));
    }
  };
});
//# sourceMappingURL=efd31d81a77f744e47a3df8051168bc89f62be38.js.map