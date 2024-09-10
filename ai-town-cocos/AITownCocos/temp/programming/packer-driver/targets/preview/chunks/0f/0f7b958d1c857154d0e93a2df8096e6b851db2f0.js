System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListIdentityProviders: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'IdentityProviderSummaries'
          },
          ListInstances: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'InstanceSummaries'
          },
          ListProductSubscriptions: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ProductUserSummaries'
          },
          ListUserAssociations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'InstanceUserSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0f7b958d1c857154d0e93a2df8096e6b851db2f0.js.map