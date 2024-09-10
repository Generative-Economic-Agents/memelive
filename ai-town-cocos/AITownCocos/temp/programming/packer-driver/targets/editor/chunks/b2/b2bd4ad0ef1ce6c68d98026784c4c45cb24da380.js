System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApplicationRevisions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'revisions'
          },
          ListApplications: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'applications'
          },
          ListDeploymentConfigs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'deploymentConfigsList'
          },
          ListDeploymentGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'deploymentGroups'
          },
          ListDeploymentInstances: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'instancesList'
          },
          ListDeployments: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'deployments'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b2bd4ad0ef1ce6c68d98026784c4c45cb24da380.js.map