System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDeploymentEvents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'deploymentEvents'
          },
          ListDeployments: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'deployments'
          },
          ListWorkloadDeploymentPatterns: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workloadDeploymentPatterns'
          },
          ListWorkloads: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workloads'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=464a24c368fc7b2da0b3bfe55f2cda0aa64f414b.js.map