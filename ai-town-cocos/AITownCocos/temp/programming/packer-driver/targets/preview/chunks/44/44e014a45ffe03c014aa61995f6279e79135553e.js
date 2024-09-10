System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAgents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'agentsInfo'
          },
          DescribeContinuousExports: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'descriptions'
          },
          DescribeExportConfigurations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'exportsInfo'
          },
          DescribeExportTasks: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'exportsInfo'
          },
          DescribeImportTasks: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tasks'
          },
          DescribeTags: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tags'
          },
          ListConfigurations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'configurations'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=44e014a45ffe03c014aa61995f6279e79135553e.js.map