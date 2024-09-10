System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApps: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'apps'
          },
          ListBranches: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'branches'
          },
          ListDomainAssociations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'domainAssociations'
          },
          ListJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=aa73c42159b1f1f2588785d39dfc6ba37c290b12.js.map