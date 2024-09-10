System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListSolFunctionInstances: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'functionInstances'
          },
          ListSolFunctionPackages: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'functionPackages'
          },
          ListSolNetworkInstances: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networkInstances'
          },
          ListSolNetworkOperations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networkOperations'
          },
          ListSolNetworkPackages: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'networkPackages'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=07dd35e1111f3afe954faba5b6d9c2a16dbb5ed3.js.map