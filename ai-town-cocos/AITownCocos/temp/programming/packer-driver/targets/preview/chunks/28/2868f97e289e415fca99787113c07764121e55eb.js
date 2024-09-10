System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCustomModels: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'modelSummaries'
          },
          ListEvaluationJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobSummaries'
          },
          ListGuardrails: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'guardrails'
          },
          ListModelCustomizationJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'modelCustomizationJobSummaries'
          },
          ListProvisionedModelThroughputs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'provisionedModelSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2868f97e289e415fca99787113c07764121e55eb.js.map