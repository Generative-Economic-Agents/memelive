System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAddresses: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Addresses'
          },
          ListClusterJobs: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'JobListEntries'
          },
          ListClusters: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ClusterListEntries'
          },
          ListCompatibleImages: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CompatibleImages'
          },
          ListJobs: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'JobListEntries'
          },
          ListLongTermPricing: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'LongTermPricingEntries'
          },
          ListPickupLocations: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=99eaa1131cbd79617ade3aa1b0054f9f902cdf14.js.map