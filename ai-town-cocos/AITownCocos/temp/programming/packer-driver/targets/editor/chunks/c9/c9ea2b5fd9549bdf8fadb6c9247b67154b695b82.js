System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeCodeCoverages: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'codeCoverages'
          },
          DescribeTestCases: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'testCases'
          },
          ListBuildBatches: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'ids'
          },
          ListBuildBatchesForProject: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'ids'
          },
          ListBuilds: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'ids'
          },
          ListBuildsForProject: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'ids'
          },
          ListFleets: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken'
          },
          ListProjects: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'projects'
          },
          ListReportGroups: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'reportGroups'
          },
          ListReports: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'reports'
          },
          ListReportsForReportGroup: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'reports'
          },
          ListSharedProjects: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'projects'
          },
          ListSharedReportGroups: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'reportGroups'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c9ea2b5fd9549bdf8fadb6c9247b67154b695b82.js.map