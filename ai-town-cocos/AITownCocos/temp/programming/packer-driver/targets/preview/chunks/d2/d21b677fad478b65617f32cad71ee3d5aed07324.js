System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeRecommendationExportJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'recommendationExportJobs'
          },
          GetEnrollmentStatusesForOrganization: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'accountEnrollmentStatuses'
          },
          GetLambdaFunctionRecommendations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'lambdaFunctionRecommendations'
          },
          GetRecommendationPreferences: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'recommendationPreferencesDetails'
          },
          GetRecommendationSummaries: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'recommendationSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d21b677fad478b65617f32cad71ee3d5aed07324.js.map