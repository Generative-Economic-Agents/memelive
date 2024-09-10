System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListJobRuns: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobRuns'
          },
          ListJobTemplates: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'templates'
          },
          ListManagedEndpoints: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'endpoints'
          },
          ListSecurityConfigurations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'securityConfigurations'
          },
          ListVirtualClusters: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'virtualClusters'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b57998bd7c6b6b7ab14e5934a844e5e3c43ff90b.js.map