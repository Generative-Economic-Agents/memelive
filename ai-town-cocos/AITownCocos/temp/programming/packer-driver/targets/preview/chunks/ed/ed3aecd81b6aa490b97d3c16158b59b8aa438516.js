System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApplications: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ApplicationSummaryList'
          },
          ListEnvironmentVpcs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'EnvironmentVpcList'
          },
          ListEnvironments: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'EnvironmentSummaryList'
          },
          ListRoutes: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RouteSummaryList'
          },
          ListServices: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ServiceSummaryList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ed3aecd81b6aa490b97d3c16158b59b8aa438516.js.map