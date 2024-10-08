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
        'use strict';

        function formatHostname(hostname) {
          // canonicalize the hostname, so that 'oogle.com' won't match 'google.com'
          return hostname.replace(/^\.*/, '.').toLowerCase();
        }

        function parseNoProxyZone(zone) {
          zone = zone.trim().toLowerCase();
          var zoneParts = zone.split(':', 2);
          var zoneHost = formatHostname(zoneParts[0]);
          var zonePort = zoneParts[1];
          var hasPort = zone.indexOf(':') > -1;
          return {
            hostname: zoneHost,
            port: zonePort,
            hasPort: hasPort
          };
        }

        function uriInNoProxy(uri, noProxy) {
          var port = uri.port || (uri.protocol === 'https:' ? '443' : '80');
          var hostname = formatHostname(uri.hostname);
          var noProxyList = noProxy.split(','); // iterate through the noProxyList until it finds a match.

          return noProxyList.map(parseNoProxyZone).some(function (noProxyZone) {
            var isMatchedAt = hostname.indexOf(noProxyZone.hostname);
            var hostnameMatched = isMatchedAt > -1 && isMatchedAt === hostname.length - noProxyZone.hostname.length;

            if (noProxyZone.hasPort) {
              return port === noProxyZone.port && hostnameMatched;
            }

            return hostnameMatched;
          });
        }

        function getProxyFromURI(uri) {
          // Decide the proper request proxy to use based on the request URI object and the
          // environmental variables (NO_PROXY, HTTP_PROXY, etc.)
          // respect NO_PROXY environment variables (see: https://lynx.invisible-island.net/lynx2.8.7/breakout/lynx_help/keystrokes/environments.html)
          var noProxy = process.env.NO_PROXY || process.env.no_proxy || ''; // if the noProxy is a wildcard then return null

          if (noProxy === '*') {
            return null;
          } // if the noProxy is not empty and the uri is found return null


          if (noProxy !== '' && uriInNoProxy(uri, noProxy)) {
            return null;
          } // Check for HTTP or HTTPS Proxy in environment Else default to null


          if (uri.protocol === 'http:') {
            return process.env.HTTP_PROXY || process.env.http_proxy || null;
          }

          if (uri.protocol === 'https:') {
            return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
          } // if none of that works, return null
          // (What uri protocol are you using then?)


          return null;
        }

        module.exports = getProxyFromURI; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=3594e5d0a9d2e218af7323f02b07a06062df0779.js.map