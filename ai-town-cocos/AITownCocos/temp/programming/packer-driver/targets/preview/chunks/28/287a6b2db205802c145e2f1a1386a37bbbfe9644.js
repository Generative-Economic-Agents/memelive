System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCloudFrontOriginAccessIdentities: {
            input_token: 'Marker',
            output_token: 'CloudFrontOriginAccessIdentityList.NextMarker',
            limit_key: 'MaxItems',
            more_results: 'CloudFrontOriginAccessIdentityList.IsTruncated',
            result_key: 'CloudFrontOriginAccessIdentityList.Items'
          },
          ListDistributions: {
            input_token: 'Marker',
            output_token: 'DistributionList.NextMarker',
            limit_key: 'MaxItems',
            more_results: 'DistributionList.IsTruncated',
            result_key: 'DistributionList.Items'
          },
          ListInvalidations: {
            input_token: 'Marker',
            output_token: 'InvalidationList.NextMarker',
            limit_key: 'MaxItems',
            more_results: 'InvalidationList.IsTruncated',
            result_key: 'InvalidationList.Items'
          },
          ListStreamingDistributions: {
            input_token: 'Marker',
            output_token: 'StreamingDistributionList.NextMarker',
            limit_key: 'MaxItems',
            more_results: 'StreamingDistributionList.IsTruncated',
            result_key: 'StreamingDistributionList.Items'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=287a6b2db205802c145e2f1a1386a37bbbfe9644.js.map