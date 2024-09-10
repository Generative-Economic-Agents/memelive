System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _permuteDomain, __cjsMetaURL;

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
        "use strict";

        var pubsuffix = require('./pubsuffix-psl'); // Gives the permutation of all possible domainMatch()es of a given domain. The
        // array is in shortest-to-longest order.  Handy for indexing.


        function permuteDomain(domain) {
          var pubSuf = pubsuffix.getPublicSuffix(domain);

          if (!pubSuf) {
            return null;
          }

          if (pubSuf == domain) {
            return [domain];
          }

          var prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"

          var parts = prefix.split('.').reverse();
          var cur = pubSuf;
          var permutations = [cur];

          while (parts.length) {
            cur = parts.shift() + '.' + cur;
            permutations.push(cur);
          }

          return permutations;
        }

        exports.permuteDomain = permuteDomain; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _permuteDomain = module.exports.permuteDomain;
      }, () => ({
        './pubsuffix-psl': _req
      }));
    }
  };
});
//# sourceMappingURL=4bdcab88433a4f49f20e7cc3d2c6001fa3012de2.js.map