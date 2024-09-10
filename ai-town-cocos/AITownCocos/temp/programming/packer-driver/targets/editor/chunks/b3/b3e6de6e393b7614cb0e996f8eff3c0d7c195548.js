System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListFirewallPolicies: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'FirewallPolicies'
          },
          ListFirewalls: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Firewalls'
          },
          ListRuleGroups: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RuleGroups'
          },
          ListTLSInspectionConfigurations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'TLSInspectionConfigurations'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b3e6de6e393b7614cb0e996f8eff3c0d7c195548.js.map