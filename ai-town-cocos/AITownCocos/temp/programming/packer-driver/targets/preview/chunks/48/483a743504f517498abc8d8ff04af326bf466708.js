System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListPlugins: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'plugins'
          },
          ListTemplateStepGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'templateStepGroupSummary'
          },
          ListTemplateSteps: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'templateStepSummaryList'
          },
          ListTemplates: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'templateSummary'
          },
          ListWorkflowStepGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workflowStepGroupsSummary'
          },
          ListWorkflowSteps: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workflowStepsSummary'
          },
          ListWorkflows: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'migrationWorkflowSummary'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=483a743504f517498abc8d8ff04af326bf466708.js.map