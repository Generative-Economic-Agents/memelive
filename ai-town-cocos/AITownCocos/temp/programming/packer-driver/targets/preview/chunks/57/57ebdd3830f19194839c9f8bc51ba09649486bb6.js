System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDeviceIdentifiers: {
            input_token: 'startToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'deviceIdentifiers'
          },
          ListNetworkResources: {
            input_token: 'startToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networkResources'
          },
          ListNetworkSites: {
            input_token: 'startToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networkSites'
          },
          ListNetworks: {
            input_token: 'startToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networks'
          },
          ListOrders: {
            input_token: 'startToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'orders'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=57ebdd3830f19194839c9f8bc51ba09649486bb6.js.map