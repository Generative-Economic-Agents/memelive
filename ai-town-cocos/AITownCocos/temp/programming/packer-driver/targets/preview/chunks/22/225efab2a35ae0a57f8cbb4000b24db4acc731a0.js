System.register(["__unresolved_0", "qs", "querystring"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _Querystring, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_qs) {
      _req = _qs.__cjsMetaURL;
    }, function (_querystring) {
      _req0 = _querystring.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var qs = require('qs');

        var querystring = require('querystring');

        function Querystring(request) {
          this.request = request;
          this.lib = null;
          this.useQuerystring = null;
          this.parseOptions = null;
          this.stringifyOptions = null;
        }

        Querystring.prototype.init = function (options) {
          if (this.lib) {
            return;
          }

          this.useQuerystring = options.useQuerystring;
          this.lib = this.useQuerystring ? querystring : qs;
          this.parseOptions = options.qsParseOptions || {};
          this.stringifyOptions = options.qsStringifyOptions || {};
        };

        Querystring.prototype.stringify = function (obj) {
          return this.useQuerystring ? this.rfc3986(this.lib.stringify(obj, this.stringifyOptions.sep || null, this.stringifyOptions.eq || null, this.stringifyOptions)) : this.lib.stringify(obj, this.stringifyOptions);
        };

        Querystring.prototype.parse = function (str) {
          return this.useQuerystring ? this.lib.parse(str, this.parseOptions.sep || null, this.parseOptions.eq || null, this.parseOptions) : this.lib.parse(str, this.parseOptions);
        };

        Querystring.prototype.rfc3986 = function (str) {
          return str.replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase();
          });
        };

        Querystring.prototype.unescape = querystring.unescape;
        exports.Querystring = Querystring; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _Querystring = module.exports.Querystring;
      }, () => ({
        'qs': _req,
        'querystring': _req0
      }));
    }
  };
});
//# sourceMappingURL=225efab2a35ae0a57f8cbb4000b24db4acc731a0.js.map