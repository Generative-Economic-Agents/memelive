System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAddonVersions: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'addons'
          },
          ListAccessEntries: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'accessEntries'
          },
          ListAccessPolicies: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'accessPolicies'
          },
          ListAddons: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'addons'
          },
          ListAssociatedAccessPolicies: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            non_aggregate_keys: ['clusterName', 'principalArn'],
            output_token: 'nextToken',
            result_key: 'associatedAccessPolicies'
          },
          ListClusters: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'clusters'
          },
          ListEksAnywhereSubscriptions: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'subscriptions'
          },
          ListFargateProfiles: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'fargateProfileNames'
          },
          ListIdentityProviderConfigs: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'identityProviderConfigs'
          },
          ListInsights: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'insights'
          },
          ListNodegroups: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'nodegroups'
          },
          ListPodIdentityAssociations: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'associations'
          },
          ListUpdates: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'updateIds'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4e870f70a9f65ac1a72f30a35d4a436437e428bd.js.map