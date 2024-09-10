System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _EndpointCache, __cjsMetaURL;

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
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var LRU_1 = require("./utils/LRU");

        var CACHE_SIZE = 1000;
        /**
         * Inspired node-lru-cache[https://github.com/isaacs/node-lru-cache]
         */

        var EndpointCache =
        /** @class */
        function () {
          function EndpointCache(maxSize) {
            if (maxSize === void 0) {
              maxSize = CACHE_SIZE;
            }

            this.maxSize = maxSize;
            this.cache = new LRU_1.LRUCache(maxSize);
          }

          ;
          Object.defineProperty(EndpointCache.prototype, "size", {
            get: function get() {
              return this.cache.length;
            },
            enumerable: true,
            configurable: true
          });

          EndpointCache.prototype.put = function (key, value) {
            var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
            var endpointRecord = this.populateValue(value);
            this.cache.put(keyString, endpointRecord);
          };

          EndpointCache.prototype.get = function (key) {
            var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
            var now = Date.now();
            var records = this.cache.get(keyString);

            if (records) {
              for (var i = records.length - 1; i >= 0; i--) {
                var record = records[i];

                if (record.Expire < now) {
                  records.splice(i, 1);
                }
              }

              if (records.length === 0) {
                this.cache.remove(keyString);
                return undefined;
              }
            }

            return records;
          };

          EndpointCache.getKeyString = function (key) {
            var identifiers = [];
            var identifierNames = Object.keys(key).sort();

            for (var i = 0; i < identifierNames.length; i++) {
              var identifierName = identifierNames[i];
              if (key[identifierName] === undefined) continue;
              identifiers.push(key[identifierName]);
            }

            return identifiers.join(' ');
          };

          EndpointCache.prototype.populateValue = function (endpoints) {
            var now = Date.now();
            return endpoints.map(function (endpoint) {
              return {
                Address: endpoint.Address || '',
                Expire: now + (endpoint.CachePeriodInMinutes || 1) * 60 * 1000
              };
            });
          };

          EndpointCache.prototype.empty = function () {
            this.cache.empty();
          };

          EndpointCache.prototype.remove = function (key) {
            var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
            this.cache.remove(keyString);
          };

          return EndpointCache;
        }();

        exports.EndpointCache = EndpointCache; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _EndpointCache = module.exports.EndpointCache;
      }, () => ({
        './utils/LRU': _req
      }));
    }
  };
});
//# sourceMappingURL=122163b45b9599cbc0caae5e977d903467e546ae.js.map