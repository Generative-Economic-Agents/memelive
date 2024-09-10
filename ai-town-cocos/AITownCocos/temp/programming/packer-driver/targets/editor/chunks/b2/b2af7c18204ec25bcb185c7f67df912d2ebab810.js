System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAssociatedRoute53HealthChecks: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'HealthCheckIds'
          },
          ListClusters: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Clusters'
          },
          ListControlPanels: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ControlPanels'
          },
          ListRoutingControls: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RoutingControls'
          },
          ListSafetyRules: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'SafetyRules'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b2af7c18204ec25bcb185c7f67df912d2ebab810.js.map