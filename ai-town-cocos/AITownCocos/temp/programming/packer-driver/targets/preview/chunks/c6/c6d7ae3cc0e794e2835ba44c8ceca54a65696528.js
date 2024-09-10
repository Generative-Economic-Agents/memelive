System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Collection = require('./collection');

        var Operation = require('./operation');

        var Shape = require('./shape');

        var Paginator = require('./paginator');

        var ResourceWaiter = require('./resource_waiter');

        var metadata = require('../../apis/metadata.json');

        var util = require('../util');

        var property = util.property;
        var memoizedProperty = util.memoizedProperty;

        function Api(api, options) {
          var self = this;
          api = api || {};
          options = options || {};
          options.api = this;
          api.metadata = api.metadata || {};
          var serviceIdentifier = options.serviceIdentifier;
          delete options.serviceIdentifier;
          property(this, 'isApi', true, false);
          property(this, 'apiVersion', api.metadata.apiVersion);
          property(this, 'endpointPrefix', api.metadata.endpointPrefix);
          property(this, 'signingName', api.metadata.signingName);
          property(this, 'globalEndpoint', api.metadata.globalEndpoint);
          property(this, 'signatureVersion', api.metadata.signatureVersion);
          property(this, 'jsonVersion', api.metadata.jsonVersion);
          property(this, 'targetPrefix', api.metadata.targetPrefix);
          property(this, 'protocol', api.metadata.protocol);
          property(this, 'timestampFormat', api.metadata.timestampFormat);
          property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
          property(this, 'abbreviation', api.metadata.serviceAbbreviation);
          property(this, 'fullName', api.metadata.serviceFullName);
          property(this, 'serviceId', api.metadata.serviceId);

          if (serviceIdentifier && metadata[serviceIdentifier]) {
            property(this, 'xmlNoDefaultLists', metadata[serviceIdentifier].xmlNoDefaultLists, false);
          }

          memoizedProperty(this, 'className', function () {
            var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
            if (!name) return null;
            name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
            if (name === 'ElasticLoadBalancing') name = 'ELB';
            return name;
          });

          function addEndpointOperation(name, operation) {
            if (operation.endpointoperation === true) {
              property(self, 'endpointOperation', util.string.lowerFirst(name));
            }

            if (operation.endpointdiscovery && !self.hasRequiredEndpointDiscovery) {
              property(self, 'hasRequiredEndpointDiscovery', operation.endpointdiscovery.required === true);
            }
          }

          property(this, 'operations', new Collection(api.operations, options, function (name, operation) {
            return new Operation(name, operation, options);
          }, util.string.lowerFirst, addEndpointOperation));
          property(this, 'shapes', new Collection(api.shapes, options, function (name, shape) {
            return Shape.create(shape, options);
          }));
          property(this, 'paginators', new Collection(api.paginators, options, function (name, paginator) {
            return new Paginator(name, paginator, options);
          }));
          property(this, 'waiters', new Collection(api.waiters, options, function (name, waiter) {
            return new ResourceWaiter(name, waiter, options);
          }, util.string.lowerFirst));

          if (options.documentation) {
            property(this, 'documentation', api.documentation);
            property(this, 'documentationUrl', api.documentationUrl);
          }

          property(this, 'awsQueryCompatible', api.metadata.awsQueryCompatible);
        }
        /**
         * @api private
         */


        module.exports = Api; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './collection': _req,
        './operation': _req0,
        './shape': _req1,
        './paginator': _req2,
        './resource_waiter': _req3,
        '../../apis/metadata.json': _req4,
        '../util': _req5
      }));
    }
  };
});
//# sourceMappingURL=c6d7ae3cc0e794e2835ba44c8ceca54a65696528.js.map