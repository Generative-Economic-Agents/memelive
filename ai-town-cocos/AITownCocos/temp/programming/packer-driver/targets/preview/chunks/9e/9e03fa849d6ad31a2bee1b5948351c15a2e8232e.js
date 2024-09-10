System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAudienceExportJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'audienceExportJobs'
          },
          ListAudienceGenerationJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'audienceGenerationJobs'
          },
          ListAudienceModels: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'audienceModels'
          },
          ListConfiguredAudienceModels: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'configuredAudienceModels'
          },
          ListTrainingDatasets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'trainingDatasets'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9e03fa849d6ad31a2bee1b5948351c15a2e8232e.js.map