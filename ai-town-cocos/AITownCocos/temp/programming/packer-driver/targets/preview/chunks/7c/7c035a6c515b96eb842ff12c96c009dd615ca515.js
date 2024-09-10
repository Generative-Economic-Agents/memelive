System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCodeReviews: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListRecommendationFeedback: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListRecommendations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListRepositoryAssociations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RepositoryAssociationSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7c035a6c515b96eb842ff12c96c009dd615ca515.js.map