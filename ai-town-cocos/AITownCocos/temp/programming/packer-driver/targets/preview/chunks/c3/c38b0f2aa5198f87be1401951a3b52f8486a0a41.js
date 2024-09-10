System.register(["__unresolved_0", "assert", "stream", "util"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_assert) {
      _req = _assert.__cjsMetaURL;
    }, function (_stream) {
      _req0 = _stream.__cjsMetaURL;
    }, function (_util) {
      _req1 = _util.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright (c) 2012, Mark Cavage. All rights reserved.
        // Copyright 2015 Joyent, Inc.
        var assert = require('assert');

        var Stream = require('stream').Stream;

        var util = require('util'); ///--- Globals

        /* JSSTYLED */


        var UUID_REGEXP = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/; ///--- Internal

        function _capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }

        function _toss(name, expected, oper, arg, actual) {
          throw new assert.AssertionError({
            message: util.format('%s (%s) is required', name, expected),
            actual: actual === undefined ? typeof arg : actual(arg),
            expected: expected,
            operator: oper || '===',
            stackStartFunction: _toss.caller
          });
        }

        function _getClass(arg) {
          return Object.prototype.toString.call(arg).slice(8, -1);
        }

        function noop() {// Why even bother with asserts?
        } ///--- Exports


        var types = {
          bool: {
            check: function check(arg) {
              return typeof arg === 'boolean';
            }
          },
          func: {
            check: function check(arg) {
              return typeof arg === 'function';
            }
          },
          string: {
            check: function check(arg) {
              return typeof arg === 'string';
            }
          },
          object: {
            check: function check(arg) {
              return typeof arg === 'object' && arg !== null;
            }
          },
          number: {
            check: function check(arg) {
              return typeof arg === 'number' && !isNaN(arg);
            }
          },
          finite: {
            check: function check(arg) {
              return typeof arg === 'number' && !isNaN(arg) && isFinite(arg);
            }
          },
          buffer: {
            check: function check(arg) {
              return Buffer.isBuffer(arg);
            },
            operator: 'Buffer.isBuffer'
          },
          array: {
            check: function check(arg) {
              return Array.isArray(arg);
            },
            operator: 'Array.isArray'
          },
          stream: {
            check: function check(arg) {
              return arg instanceof Stream;
            },
            operator: 'instanceof',
            actual: _getClass
          },
          date: {
            check: function check(arg) {
              return arg instanceof Date;
            },
            operator: 'instanceof',
            actual: _getClass
          },
          regexp: {
            check: function check(arg) {
              return arg instanceof RegExp;
            },
            operator: 'instanceof',
            actual: _getClass
          },
          uuid: {
            check: function check(arg) {
              return typeof arg === 'string' && UUID_REGEXP.test(arg);
            },
            operator: 'isUUID'
          }
        };

        function _setExports(ndebug) {
          var keys = Object.keys(types);
          var out;
          /* re-export standard assert */

          if (process.env.NODE_NDEBUG) {
            out = noop;
          } else {
            out = function out(arg, msg) {
              if (!arg) {
                _toss(msg, 'true', arg);
              }
            };
          }
          /* standard checks */


          keys.forEach(function (k) {
            if (ndebug) {
              out[k] = noop;
              return;
            }

            var type = types[k];

            out[k] = function (arg, msg) {
              if (!type.check(arg)) {
                _toss(msg, k, type.operator, arg, type.actual);
              }
            };
          });
          /* optional checks */

          keys.forEach(function (k) {
            var name = 'optional' + _capitalize(k);

            if (ndebug) {
              out[name] = noop;
              return;
            }

            var type = types[k];

            out[name] = function (arg, msg) {
              if (arg === undefined || arg === null) {
                return;
              }

              if (!type.check(arg)) {
                _toss(msg, k, type.operator, arg, type.actual);
              }
            };
          });
          /* arrayOf checks */

          keys.forEach(function (k) {
            var name = 'arrayOf' + _capitalize(k);

            if (ndebug) {
              out[name] = noop;
              return;
            }

            var type = types[k];
            var expected = '[' + k + ']';

            out[name] = function (arg, msg) {
              if (!Array.isArray(arg)) {
                _toss(msg, expected, type.operator, arg, type.actual);
              }

              var i;

              for (i = 0; i < arg.length; i++) {
                if (!type.check(arg[i])) {
                  _toss(msg, expected, type.operator, arg, type.actual);
                }
              }
            };
          });
          /* optionalArrayOf checks */

          keys.forEach(function (k) {
            var name = 'optionalArrayOf' + _capitalize(k);

            if (ndebug) {
              out[name] = noop;
              return;
            }

            var type = types[k];
            var expected = '[' + k + ']';

            out[name] = function (arg, msg) {
              if (arg === undefined || arg === null) {
                return;
              }

              if (!Array.isArray(arg)) {
                _toss(msg, expected, type.operator, arg, type.actual);
              }

              var i;

              for (i = 0; i < arg.length; i++) {
                if (!type.check(arg[i])) {
                  _toss(msg, expected, type.operator, arg, type.actual);
                }
              }
            };
          });
          /* re-export built-in assertions */

          Object.keys(assert).forEach(function (k) {
            if (k === 'AssertionError') {
              out[k] = assert[k];
              return;
            }

            if (ndebug) {
              out[k] = noop;
              return;
            }

            out[k] = assert[k];
          });
          /* export ourselves (for unit tests _only_) */

          out._setExports = _setExports;
          return out;
        }

        module.exports = _setExports(process.env.NODE_NDEBUG); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'assert': _req,
        'stream': _req0,
        'util': _req1
      }));
    }
  };
});
//# sourceMappingURL=c38b0f2aa5198f87be1401951a3b52f8486a0a41.js.map