System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeApplicationVersions: {
            result_key: 'ApplicationVersions'
          },
          DescribeApplications: {
            result_key: 'Applications'
          },
          DescribeConfigurationOptions: {
            result_key: 'Options'
          },
          DescribeEnvironmentManagedActionHistory: {
            input_token: 'NextToken',
            limit_key: 'MaxItems',
            output_token: 'NextToken',
            result_key: 'ManagedActionHistoryItems'
          },
          DescribeEnvironments: {
            result_key: 'Environments'
          },
          DescribeEvents: {
            input_token: 'NextToken',
            limit_key: 'MaxRecords',
            output_token: 'NextToken',
            result_key: 'Events'
          },
          ListAvailableSolutionStacks: {
            result_key: 'SolutionStacks'
          },
          ListPlatformBranches: {
            input_token: 'NextToken',
            limit_key: 'MaxRecords',
            output_token: 'NextToken'
          },
          ListPlatformVersions: {
            input_token: 'NextToken',
            limit_key: 'MaxRecords',
            output_token: 'NextToken',
            result_key: 'PlatformSummaryList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b9bc88c7f2fbc36398eace96a4dce5beebb5994b.js.map