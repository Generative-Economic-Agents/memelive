System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeImageScanFindings: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            non_aggregate_keys: ['registryId', 'repositoryName', 'imageId', 'imageScanStatus', 'imageScanFindings'],
            output_token: 'nextToken',
            result_key: ['imageScanFindings.findings', 'imageScanFindings.enhancedFindings']
          },
          DescribeImages: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'imageDetails'
          },
          DescribePullThroughCacheRules: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'pullThroughCacheRules'
          },
          DescribeRepositories: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'repositories'
          },
          GetLifecyclePolicyPreview: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            non_aggregate_keys: ['registryId', 'repositoryName', 'lifecyclePolicyText', 'status', 'summary'],
            output_token: 'nextToken',
            result_key: 'previewResults'
          },
          ListImages: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'imageIds'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c668fae00c1b2c8f9308dc54f2b55c0cce0484a8.js.map