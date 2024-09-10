System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeTrails: {
            result_key: 'trailList'
          },
          GetQueryResults: {
            input_token: 'NextToken',
            output_token: 'NextToken'
          },
          ListChannels: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListEventDataStores: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListImportFailures: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Failures'
          },
          ListImports: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Imports'
          },
          ListInsightsMetricData: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListPublicKeys: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'PublicKeyList'
          },
          ListQueries: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListTags: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'ResourceTagList'
          },
          ListTrails: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Trails'
          },
          LookupEvents: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Events'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bf30b1f2465c0152eb7391f71bdca8bbddc497e4.js.map