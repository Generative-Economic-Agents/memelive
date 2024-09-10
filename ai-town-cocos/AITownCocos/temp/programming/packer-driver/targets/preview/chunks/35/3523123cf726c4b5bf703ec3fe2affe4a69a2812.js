System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeCases: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'cases'
          },
          DescribeCommunications: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'communications'
          },
          DescribeServices: {
            result_key: 'services'
          },
          DescribeTrustedAdvisorCheckRefreshStatuses: {
            result_key: 'statuses'
          },
          DescribeTrustedAdvisorCheckSummaries: {
            result_key: 'summaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3523123cf726c4b5bf703ec3fe2affe4a69a2812.js.map