System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var utils = require('./utils');

        var formats = require('./formats');

        var arrayPrefixGenerators = {
          brackets: function brackets(prefix) {
            return prefix + '[]';
          },
          indices: function indices(prefix, key) {
            return prefix + '[' + key + ']';
          },
          repeat: function repeat(prefix) {
            return prefix;
          }
        };
        var isArray = Array.isArray;
        var push = Array.prototype.push;

        var pushToArray = function pushToArray(arr, valueOrArray) {
          push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
        };

        var toISO = Date.prototype.toISOString;
        var defaults = {
          delimiter: '&',
          encode: true,
          encoder: utils.encode,
          encodeValuesOnly: false,
          serializeDate: function serializeDate(date) {
            return toISO.call(date);
          },
          skipNulls: false,
          strictNullHandling: false
        };

        var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly) {
          var obj = object;

          if (typeof filter === 'function') {
            obj = filter(prefix, obj);
          } else if (obj instanceof Date) {
            obj = serializeDate(obj);
          }

          if (obj === null) {
            if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
            }

            obj = '';
          }

          if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
            if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
            }

            return [formatter(prefix) + '=' + formatter(String(obj))];
          }

          var values = [];

          if (typeof obj === 'undefined') {
            return values;
          }

          var objKeys;

          if (isArray(filter)) {
            objKeys = filter;
          } else {
            var keys = Object.keys(obj);
            objKeys = sort ? keys.sort(sort) : keys;
          }

          for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];

            if (skipNulls && obj[key] === null) {
              continue;
            }

            if (isArray(obj)) {
              pushToArray(values, stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
            } else {
              pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
            }
          }

          return values;
        };

        module.exports = function (object, opts) {
          var obj = object;
          var options = opts ? utils.assign({}, opts) : {};

          if (options.encoder !== null && typeof options.encoder !== 'undefined' && typeof options.encoder !== 'function') {
            throw new TypeError('Encoder has to be a function.');
          }

          var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
          var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
          var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
          var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
          var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
          var sort = typeof options.sort === 'function' ? options.sort : null;
          var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
          var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
          var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;

          if (typeof options.format === 'undefined') {
            options.format = formats['default'];
          } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
            throw new TypeError('Unknown format option provided.');
          }

          var formatter = formats.formatters[options.format];
          var objKeys;
          var filter;

          if (typeof options.filter === 'function') {
            filter = options.filter;
            obj = filter('', obj);
          } else if (isArray(options.filter)) {
            filter = options.filter;
            objKeys = filter;
          }

          var keys = [];

          if (typeof obj !== 'object' || obj === null) {
            return '';
          }

          var arrayFormat;

          if (options.arrayFormat in arrayPrefixGenerators) {
            arrayFormat = options.arrayFormat;
          } else if ('indices' in options) {
            arrayFormat = options.indices ? 'indices' : 'repeat';
          } else {
            arrayFormat = 'indices';
          }

          var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

          if (!objKeys) {
            objKeys = Object.keys(obj);
          }

          if (sort) {
            objKeys.sort(sort);
          }

          for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];

            if (skipNulls && obj[key] === null) {
              continue;
            }

            pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
          }

          var joined = keys.join(delimiter);
          var prefix = options.addQueryPrefix === true ? '?' : '';
          return joined.length > 0 ? prefix + joined : '';
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './utils': _req,
        './formats': _req0
      }));
    }
  };
});
//# sourceMappingURL=2867e836aa113b58d6172f4944b3c59133c808ba.js.map