System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeApplicationAssociations: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          DescribeApplications: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          DescribeWorkspaceBundles: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Bundles'
          },
          DescribeWorkspaceDirectories: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Directories'
          },
          DescribeWorkspaces: {
            input_token: 'NextToken',
            limit_key: 'Limit',
            output_token: 'NextToken',
            result_key: 'Workspaces'
          },
          ListAccountLinks: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'AccountLinks'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f594b6073140ce853aeb18291ca7c23b1bd96c6e.js.map