System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeComputeEnvironments: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'computeEnvironments'
          },
          DescribeJobDefinitions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobDefinitions'
          },
          DescribeJobQueues: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobQueues'
          },
          ListJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobSummaryList'
          },
          ListSchedulingPolicies: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'schedulingPolicies'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=589a8bc0ffc267e4919b2003471d24ffeae6c612.js.map