System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListGateways: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Gateways'
          },
          ListHypervisors: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Hypervisors'
          },
          ListVirtualMachines: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'VirtualMachines'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=43e0253c0610e92832988d62b07c61957e21708d.js.map