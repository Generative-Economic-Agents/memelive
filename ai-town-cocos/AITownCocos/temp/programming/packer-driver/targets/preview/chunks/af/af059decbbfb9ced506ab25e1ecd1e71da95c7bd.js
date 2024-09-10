System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetFindingsReportAccountSummary: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListFindingsReports: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListProfileTimes: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'profileTimes'
          },
          ListProfilingGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=af059decbbfb9ced506ab25e1ecd1e71da95c7bd.js.map