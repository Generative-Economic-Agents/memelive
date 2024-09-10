System.register(["__unresolved_0", "tough-cookie"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _parse, _jar, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_toughCookie) {
      _req = _toughCookie.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var tough = require('tough-cookie');

        var Cookie = tough.Cookie;
        var CookieJar = tough.CookieJar;

        exports.parse = function (str) {
          if (str && str.uri) {
            str = str.uri;
          }

          if (typeof str !== 'string') {
            throw new Error('The cookie function only accepts STRING as param');
          }

          return Cookie.parse(str, {
            loose: true
          });
        }; // Adapt the sometimes-Async api of tough.CookieJar to our requirements


        function RequestJar(store) {
          var self = this;
          self._jar = new CookieJar(store, {
            looseMode: true
          });
        }

        RequestJar.prototype.setCookie = function (cookieOrStr, uri, options) {
          var self = this;
          return self._jar.setCookieSync(cookieOrStr, uri, options || {});
        };

        RequestJar.prototype.getCookieString = function (uri) {
          var self = this;
          return self._jar.getCookieStringSync(uri);
        };

        RequestJar.prototype.getCookies = function (uri) {
          var self = this;
          return self._jar.getCookiesSync(uri);
        };

        exports.jar = function (store) {
          return new RequestJar(store);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _parse = module.exports.parse;
        _jar = module.exports.jar;
      }, () => ({
        'tough-cookie': _req
      }));
    }
  };
});
//# sourceMappingURL=b51710c7bc3016d0ab70d288aad0e47e0d01f96a.js.map