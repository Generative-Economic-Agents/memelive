System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDatasetEntries: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'DatasetEntries'
          },
          ListModelPackagingJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ModelPackagingJobs'
          },
          ListModels: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Models'
          },
          ListProjects: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Projects'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ee42add6b532aa759c2603740269c1b1a4d12006.js.map