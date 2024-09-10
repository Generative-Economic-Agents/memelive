System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListIdentitySources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'identitySources'
          },
          ListPolicies: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'policies'
          },
          ListPolicyStores: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'policyStores'
          },
          ListPolicyTemplates: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'policyTemplates'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=15789667229ea367f9ff055e63d70955ab00d730.js.map