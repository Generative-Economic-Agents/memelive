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
        var Shape = require('./shape');

        var util = require('../util');

        var property = util.property;
        var memoizedProperty = util.memoizedProperty;

        function Operation(name, operation, options) {
          var self = this;
          options = options || {};
          property(this, 'name', operation.name || name);
          property(this, 'api', options.api, false);
          operation.http = operation.http || {};
          property(this, 'endpoint', operation.endpoint);
          property(this, 'httpMethod', operation.http.method || 'POST');
          property(this, 'httpPath', operation.http.requestUri || '/');
          property(this, 'authtype', operation.authtype || '');
          property(this, 'endpointDiscoveryRequired', operation.endpointdiscovery ? operation.endpointdiscovery.required ? 'REQUIRED' : 'OPTIONAL' : 'NULL'); // httpChecksum replaces usage of httpChecksumRequired, but some APIs
          // (s3control) still uses old trait.

          var httpChecksumRequired = operation.httpChecksumRequired || operation.httpChecksum && operation.httpChecksum.requestChecksumRequired;
          property(this, 'httpChecksumRequired', httpChecksumRequired, false);
          memoizedProperty(this, 'input', function () {
            if (!operation.input) {
              return new Shape.create({
                type: 'structure'
              }, options);
            }

            return Shape.create(operation.input, options);
          });
          memoizedProperty(this, 'output', function () {
            if (!operation.output) {
              return new Shape.create({
                type: 'structure'
              }, options);
            }

            return Shape.create(operation.output, options);
          });
          memoizedProperty(this, 'errors', function () {
            var list = [];
            if (!operation.errors) return null;

            for (var i = 0; i < operation.errors.length; i++) {
              list.push(Shape.create(operation.errors[i], options));
            }

            return list;
          });
          memoizedProperty(this, 'paginator', function () {
            return options.api.paginators[name];
          });

          if (options.documentation) {
            property(this, 'documentation', operation.documentation);
            property(this, 'documentationUrl', operation.documentationUrl);
          } // idempotentMembers only tracks top-level input shapes


          memoizedProperty(this, 'idempotentMembers', function () {
            var idempotentMembers = [];
            var input = self.input;
            var members = input.members;

            if (!input.members) {
              return idempotentMembers;
            }

            for (var name in members) {
              if (!members.hasOwnProperty(name)) {
                continue;
              }

              if (members[name].isIdempotent === true) {
                idempotentMembers.push(name);
              }
            }

            return idempotentMembers;
          });
          memoizedProperty(this, 'hasEventOutput', function () {
            var output = self.output;
            return hasEventStream(output);
          });
        }

        function hasEventStream(topLevelShape) {
          var members = topLevelShape.members;
          var payload = topLevelShape.payload;

          if (!topLevelShape.members) {
            return false;
          }

          if (payload) {
            var payloadMember = members[payload];
            return payloadMember.isEventStream;
          } // check if any member is an event stream


          for (var name in members) {
            if (!members.hasOwnProperty(name)) {
              if (members[name].isEventStream === true) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         * @api private
         */


        module.exports = Operation; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './shape': _req,
        '../util': _req0
      }));
    }
  };
});
//# sourceMappingURL=20670ff55c6062392710fe8972779008f281a4ec.js.map