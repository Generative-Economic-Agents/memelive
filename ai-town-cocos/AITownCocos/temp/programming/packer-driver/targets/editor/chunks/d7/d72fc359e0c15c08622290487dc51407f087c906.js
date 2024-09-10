System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListChecks: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'checkSummaries'
          },
          ListOrganizationRecommendationAccounts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'accountRecommendationLifecycleSummaries'
          },
          ListOrganizationRecommendationResources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'organizationRecommendationResourceSummaries'
          },
          ListOrganizationRecommendations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'organizationRecommendationSummaries'
          },
          ListRecommendationResources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'recommendationResourceSummaries'
          },
          ListRecommendations: {
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
//# sourceMappingURL=d72fc359e0c15c08622290487dc51407f087c906.js.map