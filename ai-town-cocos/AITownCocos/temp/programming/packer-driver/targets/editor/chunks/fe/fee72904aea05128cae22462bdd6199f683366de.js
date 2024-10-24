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

        exports.default = throttle;

        var _utils = require('./private/utils');

        var DEFAULT_TIMEOUT = 300;

        function handleDescriptor(target, key, descriptor, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              _ref2$ = _ref2[0],
              wait = _ref2$ === undefined ? DEFAULT_TIMEOUT : _ref2$,
              _ref2$2 = _ref2[1],
              options = _ref2$2 === undefined ? {} : _ref2$2;

          var callback = descriptor.value;

          if (typeof callback !== 'function') {
            throw new SyntaxError('Only functions can be throttled');
          }

          if (options.leading !== false) {
            options.leading = true;
          }

          if (options.trailing !== false) {
            options.trailing = true;
          }

          return _extends({}, descriptor, {
            value: function value() {
              var _this = this;

              var meta = (0, _utils.metaFor)(this);
              var throttleTimeoutIds = meta.throttleTimeoutIds,
                  throttlePreviousTimestamps = meta.throttlePreviousTimestamps;
              var timeout = throttleTimeoutIds[key]; // last execute timestamp

              var previous = throttlePreviousTimestamps[key] || 0;
              var now = Date.now();

              if (options.trailing) {
                meta.throttleTrailingArgs = arguments;
              } // if first be called and disable the execution on the leading edge
              // set last execute timestamp to now


              if (!previous && options.leading === false) {
                previous = now;
              }

              var remaining = wait - (now - previous);

              if (remaining <= 0) {
                clearTimeout(timeout);
                delete throttleTimeoutIds[key];
                throttlePreviousTimestamps[key] = now;
                callback.apply(this, arguments);
              } else if (!timeout && options.trailing) {
                throttleTimeoutIds[key] = setTimeout(function () {
                  throttlePreviousTimestamps[key] = options.leading === false ? 0 : Date.now();
                  delete throttleTimeoutIds[key];
                  callback.apply(_this, meta.throttleTrailingArgs); // don't leak memory!

                  meta.throttleTrailingArgs = null;
                }, remaining);
              }
            }
          });
        }

        function throttle() {
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
//# sourceMappingURL=fee72904aea05128cae22462bdd6199f683366de.js.map