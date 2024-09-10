System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApplications: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'applications'
          },
          ListJobRunAttempts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobRunAttempts'
          },
          ListJobRuns: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobRuns'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4c60aa65b4a69c0cb6f3162d6e1acf5f11bbe991.js.map