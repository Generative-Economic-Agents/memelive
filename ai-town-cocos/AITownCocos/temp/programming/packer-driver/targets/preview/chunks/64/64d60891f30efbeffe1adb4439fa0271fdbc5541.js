System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _populateHostPrefix, __cjsMetaURL;

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
        var util = require('../util');

        var AWS = require('../core');
        /**
         * Prepend prefix defined by API model to endpoint that's already
         * constructed. This feature does not apply to operations using
         * endpoint discovery and can be disabled.
         * @api private
         */


        function populateHostPrefix(request) {
          var enabled = request.service.config.hostPrefixEnabled;
          if (!enabled) return request;
          var operationModel = request.service.api.operations[request.operation]; //don't marshal host prefix when operation has endpoint discovery traits

          if (hasEndpointDiscover(request)) return request;

          if (operationModel.endpoint && operationModel.endpoint.hostPrefix) {
            var hostPrefixNotation = operationModel.endpoint.hostPrefix;
            var hostPrefix = expandHostPrefix(hostPrefixNotation, request.params, operationModel.input);
            prependEndpointPrefix(request.httpRequest.endpoint, hostPrefix);
            validateHostname(request.httpRequest.endpoint.hostname);
          }

          return request;
        }
        /**
         * @api private
         */


        function hasEndpointDiscover(request) {
          var api = request.service.api;
          var operationModel = api.operations[request.operation];
          var isEndpointOperation = api.endpointOperation && api.endpointOperation === util.string.lowerFirst(operationModel.name);
          return operationModel.endpointDiscoveryRequired !== 'NULL' || isEndpointOperation === true;
        }
        /**
         * @api private
         */


        function expandHostPrefix(hostPrefixNotation, params, shape) {
          util.each(shape.members, function (name, member) {
            if (member.hostLabel === true) {
              if (typeof params[name] !== 'string' || params[name] === '') {
                throw util.error(new Error(), {
                  message: 'Parameter ' + name + ' should be a non-empty string.',
                  code: 'InvalidParameter'
                });
              }

              var regex = new RegExp('\\{' + name + '\\}', 'g');
              hostPrefixNotation = hostPrefixNotation.replace(regex, params[name]);
            }
          });
          return hostPrefixNotation;
        }
        /**
         * @api private
         */


        function prependEndpointPrefix(endpoint, prefix) {
          if (endpoint.host) {
            endpoint.host = prefix + endpoint.host;
          }

          if (endpoint.hostname) {
            endpoint.hostname = prefix + endpoint.hostname;
          }
        }
        /**
         * @api private
         */


        function validateHostname(hostname) {
          var labels = hostname.split('.'); //Reference: https://tools.ietf.org/html/rfc1123#section-2

          var hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
          util.arrayEach(labels, function (label) {
            if (!label.length || label.length < 1 || label.length > 63) {
              throw util.error(new Error(), {
                code: 'ValidationError',
                message: 'Hostname label length should be between 1 to 63 characters, inclusive.'
              });
            }

            if (!hostPattern.test(label)) {
              throw AWS.util.error(new Error(), {
                code: 'ValidationError',
                message: label + ' is not hostname compatible.'
              });
            }
          });
        }

        module.exports = {
          populateHostPrefix: populateHostPrefix
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _populateHostPrefix = module.exports.populateHostPrefix;
      }, () => ({
        '../util': _req,
        '../core': _req0
      }));
    }
  };
});
//# sourceMappingURL=64d60891f30efbeffe1adb4439fa0271fdbc5541.js.map