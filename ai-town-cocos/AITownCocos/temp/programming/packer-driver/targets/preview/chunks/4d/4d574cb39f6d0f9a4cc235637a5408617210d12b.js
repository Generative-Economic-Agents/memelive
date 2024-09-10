System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * Helpers.
         */
        var s = 1000;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var y = d * 365.25;
        /**
         * Parse or format the given `val`.
         *
         * Options:
         *
         *  - `long` verbose formatting [false]
         *
         * @param {String|Number} val
         * @param {Object} [options]
         * @throws {Error} throw an error if val is not a non-empty string or a number
         * @return {String|Number}
         * @api public
         */

        module.exports = function (val, options) {
          options = options || {};
          var type = typeof val;

          if (type === 'string' && val.length > 0) {
            return parse(val);
          } else if (type === 'number' && isNaN(val) === false) {
            return options.long ? fmtLong(val) : fmtShort(val);
          }

          throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
        };
        /**
         * Parse the given `str` and return milliseconds.
         *
         * @param {String} str
         * @return {Number}
         * @api private
         */


        function parse(str) {
          str = String(str);

          if (str.length > 100) {
            return;
          }

          var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

          if (!match) {
            return;
          }

          var n = parseFloat(match[1]);
          var type = (match[2] || 'ms').toLowerCase();

          switch (type) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return n * y;

            case 'days':
            case 'day':
            case 'd':
              return n * d;

            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return n * h;

            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return n * m;

            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return n * s;

            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return n;

            default:
              return undefined;
          }
        }
        /**
         * Short format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */


        function fmtShort(ms) {
          if (ms >= d) {
            return Math.round(ms / d) + 'd';
          }

          if (ms >= h) {
            return Math.round(ms / h) + 'h';
          }

          if (ms >= m) {
            return Math.round(ms / m) + 'm';
          }

          if (ms >= s) {
            return Math.round(ms / s) + 's';
          }

          return ms + 'ms';
        }
        /**
         * Long format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */


        function fmtLong(ms) {
          return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
        }
        /**
         * Pluralization helper.
         */


        function plural(ms, n, name) {
          if (ms < n) {
            return;
          }

          if (ms < n * 1.5) {
            return Math.floor(ms / n) + ' ' + name;
          }

          return Math.ceil(ms / n) + ' ' + name + 's';
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=4d574cb39f6d0f9a4cc235637a5408617210d12b.js.map