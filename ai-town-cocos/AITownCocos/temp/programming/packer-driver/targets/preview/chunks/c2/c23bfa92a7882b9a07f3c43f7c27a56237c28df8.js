System.register(["__unresolved_0", "extend", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_extend) {
      _req = _extend.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req2 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        // Copyright 2010-2012 Mikeal Rogers
        //
        //    Licensed under the Apache License, Version 2.0 (the "License");
        //    you may not use this file except in compliance with the License.
        //    You may obtain a copy of the License at
        //
        //        http://www.apache.org/licenses/LICENSE-2.0
        //
        //    Unless required by applicable law or agreed to in writing, software
        //    distributed under the License is distributed on an "AS IS" BASIS,
        //    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        //    See the License for the specific language governing permissions and
        //    limitations under the License.
        'use strict';

        var extend = require('extend');

        var cookies = require('./lib/cookies');

        var helpers = require('./lib/helpers');

        var paramsHaveRequestBody = helpers.paramsHaveRequestBody; // organize params for patch, post, put, head, del

        function initParams(uri, options, callback) {
          if (typeof options === 'function') {
            callback = options;
          }

          var params = {};

          if (options !== null && typeof options === 'object') {
            extend(params, options, {
              uri: uri
            });
          } else if (typeof uri === 'string') {
            extend(params, {
              uri: uri
            });
          } else {
            extend(params, uri);
          }

          params.callback = callback || params.callback;
          return params;
        }

        function request(uri, options, callback) {
          if (typeof uri === 'undefined') {
            throw new Error('undefined is not a valid uri or options object.');
          }

          var params = initParams(uri, options, callback);

          if (params.method === 'HEAD' && paramsHaveRequestBody(params)) {
            throw new Error('HTTP HEAD requests MUST NOT include a request body.');
          }

          return new request.Request(params);
        }

        function verbFunc(verb) {
          var method = verb.toUpperCase();
          return function (uri, options, callback) {
            var params = initParams(uri, options, callback);
            params.method = method;
            return request(params, params.callback);
          };
        } // define like this to please codeintel/intellisense IDEs


        request.get = verbFunc('get');
        request.head = verbFunc('head');
        request.options = verbFunc('options');
        request.post = verbFunc('post');
        request.put = verbFunc('put');
        request.patch = verbFunc('patch');
        request.del = verbFunc('delete');
        request['delete'] = verbFunc('delete');

        request.jar = function (store) {
          return cookies.jar(store);
        };

        request.cookie = function (str) {
          return cookies.parse(str);
        };

        function wrapRequestMethod(method, options, requester, verb) {
          return function (uri, opts, callback) {
            var params = initParams(uri, opts, callback);
            var target = {};
            extend(true, target, options, params);
            target.pool = params.pool || options.pool;

            if (verb) {
              target.method = verb.toUpperCase();
            }

            if (typeof requester === 'function') {
              method = requester;
            }

            return method(target, target.callback);
          };
        }

        request.defaults = function (options, requester) {
          var self = this;
          options = options || {};

          if (typeof options === 'function') {
            requester = options;
            options = {};
          }

          var defaults = wrapRequestMethod(self, options, requester);
          var verbs = ['get', 'head', 'post', 'put', 'patch', 'del', 'delete'];
          verbs.forEach(function (verb) {
            defaults[verb] = wrapRequestMethod(self[verb], options, requester, verb);
          });
          defaults.cookie = wrapRequestMethod(self.cookie, options, requester);
          defaults.jar = self.jar;
          defaults.defaults = self.defaults;
          return defaults;
        };

        request.forever = function (agentOptions, optionsArg) {
          var options = {};

          if (optionsArg) {
            extend(options, optionsArg);
          }

          if (agentOptions) {
            options.agentOptions = agentOptions;
          }

          options.forever = true;
          return request.defaults(options);
        }; // Exports


        module.exports = request;
        request.Request = require('./request');
        request.initParams = initParams; // Backwards compatibility for request.debug

        Object.defineProperty(request, 'debug', {
          enumerable: true,
          get: function get() {
            return request.Request.debug;
          },
          set: function set(debug) {
            request.Request.debug = debug;
          }
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'extend': _req,
        './lib/cookies': _req0,
        './lib/helpers': _req1,
        './request': _req2
      }));
    }
  };
});
//# sourceMappingURL=c23bfa92a7882b9a07f3c43f7c27a56237c28df8.js.map