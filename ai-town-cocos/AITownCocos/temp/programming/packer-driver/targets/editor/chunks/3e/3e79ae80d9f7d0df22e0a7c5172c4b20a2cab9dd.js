System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListActionExecutions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'actionExecutionDetails'
          },
          ListActionTypes: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            result_key: 'actionTypes'
          },
          ListPipelineExecutions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'pipelineExecutionSummaries'
          },
          ListPipelines: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'pipelines'
          },
          ListTagsForResource: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tags'
          },
          ListWebhooks: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'webhooks'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3e79ae80d9f7d0df22e0a7c5172c4b20a2cab9dd.js.map