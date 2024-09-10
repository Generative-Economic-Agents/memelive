System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "util"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, _MemoryCookieStore, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_util) {
      _req2 = _util.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*!
         * Copyright (c) 2015, Salesforce.com, Inc.
         * All rights reserved.
         *
         * Redistribution and use in source and binary forms, with or without
         * modification, are permitted provided that the following conditions are met:
         *
         * 1. Redistributions of source code must retain the above copyright notice,
         * this list of conditions and the following disclaimer.
         *
         * 2. Redistributions in binary form must reproduce the above copyright notice,
         * this list of conditions and the following disclaimer in the documentation
         * and/or other materials provided with the distribution.
         *
         * 3. Neither the name of Salesforce.com nor the names of its contributors may
         * be used to endorse or promote products derived from this software without
         * specific prior written permission.
         *
         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
         * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
         * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
         * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
         * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
         * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
         * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
         * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
         * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
         * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
         * POSSIBILITY OF SUCH DAMAGE.
         */
        'use strict';

        var Store = require('./store').Store;

        var permuteDomain = require('./permuteDomain').permuteDomain;

        var pathMatch = require('./pathMatch').pathMatch;

        var util = require('util');

        function MemoryCookieStore() {
          Store.call(this);
          this.idx = {};
        }

        util.inherits(MemoryCookieStore, Store);
        exports.MemoryCookieStore = MemoryCookieStore;
        MemoryCookieStore.prototype.idx = null; // Since it's just a struct in RAM, this Store is synchronous

        MemoryCookieStore.prototype.synchronous = true; // force a default depth:

        MemoryCookieStore.prototype.inspect = function () {
          return "{ idx: " + util.inspect(this.idx, false, 2) + ' }';
        }; // Use the new custom inspection symbol to add the custom inspect function if
        // available.


        if (util.inspect.custom) {
          MemoryCookieStore.prototype[util.inspect.custom] = MemoryCookieStore.prototype.inspect;
        }

        MemoryCookieStore.prototype.findCookie = function (domain, path, key, cb) {
          if (!this.idx[domain]) {
            return cb(null, undefined);
          }

          if (!this.idx[domain][path]) {
            return cb(null, undefined);
          }

          return cb(null, this.idx[domain][path][key] || null);
        };

        MemoryCookieStore.prototype.findCookies = function (domain, path, cb) {
          var results = [];

          if (!domain) {
            return cb(null, []);
          }

          var pathMatcher;

          if (!path) {
            // null means "all paths"
            pathMatcher = function matchAll(domainIndex) {
              for (var curPath in domainIndex) {
                var pathIndex = domainIndex[curPath];

                for (var key in pathIndex) {
                  results.push(pathIndex[key]);
                }
              }
            };
          } else {
            pathMatcher = function matchRFC(domainIndex) {
              //NOTE: we should use path-match algorithm from S5.1.4 here
              //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
              Object.keys(domainIndex).forEach(function (cookiePath) {
                if (pathMatch(path, cookiePath)) {
                  var pathIndex = domainIndex[cookiePath];

                  for (var key in pathIndex) {
                    results.push(pathIndex[key]);
                  }
                }
              });
            };
          }

          var domains = permuteDomain(domain) || [domain];
          var idx = this.idx;
          domains.forEach(function (curDomain) {
            var domainIndex = idx[curDomain];

            if (!domainIndex) {
              return;
            }

            pathMatcher(domainIndex);
          });
          cb(null, results);
        };

        MemoryCookieStore.prototype.putCookie = function (cookie, cb) {
          if (!this.idx[cookie.domain]) {
            this.idx[cookie.domain] = {};
          }

          if (!this.idx[cookie.domain][cookie.path]) {
            this.idx[cookie.domain][cookie.path] = {};
          }

          this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
          cb(null);
        };

        MemoryCookieStore.prototype.updateCookie = function (oldCookie, newCookie, cb) {
          // updateCookie() may avoid updating cookies that are identical.  For example,
          // lastAccessed may not be important to some stores and an equality
          // comparison could exclude that field.
          this.putCookie(newCookie, cb);
        };

        MemoryCookieStore.prototype.removeCookie = function (domain, path, key, cb) {
          if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) {
            delete this.idx[domain][path][key];
          }

          cb(null);
        };

        MemoryCookieStore.prototype.removeCookies = function (domain, path, cb) {
          if (this.idx[domain]) {
            if (path) {
              delete this.idx[domain][path];
            } else {
              delete this.idx[domain];
            }
          }

          return cb(null);
        };

        MemoryCookieStore.prototype.removeAllCookies = function (cb) {
          this.idx = {};
          return cb(null);
        };

        MemoryCookieStore.prototype.getAllCookies = function (cb) {
          var cookies = [];
          var idx = this.idx;
          var domains = Object.keys(idx);
          domains.forEach(function (domain) {
            var paths = Object.keys(idx[domain]);
            paths.forEach(function (path) {
              var keys = Object.keys(idx[domain][path]);
              keys.forEach(function (key) {
                if (key !== null) {
                  cookies.push(idx[domain][path][key]);
                }
              });
            });
          }); // Sort by creationIndex so deserializing retains the creation order.
          // When implementing your own store, this SHOULD retain the order too

          cookies.sort(function (a, b) {
            return (a.creationIndex || 0) - (b.creationIndex || 0);
          });
          cb(null, cookies);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _MemoryCookieStore = module.exports.MemoryCookieStore;
      }, () => ({
        './store': _req,
        './permuteDomain': _req0,
        './pathMatch': _req1,
        'util': _req2
      }));
    }
  };
});
//# sourceMappingURL=9e2d87414849621090f2561718627e246d979281.js.map