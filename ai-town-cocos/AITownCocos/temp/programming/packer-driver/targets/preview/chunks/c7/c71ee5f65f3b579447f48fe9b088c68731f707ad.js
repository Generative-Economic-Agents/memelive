System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCloudFrontOriginAccessIdentities: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'CloudFrontOriginAccessIdentityList.IsTruncated',
            output_token: 'CloudFrontOriginAccessIdentityList.NextMarker',
            result_key: 'CloudFrontOriginAccessIdentityList.Items'
          },
          ListDistributions: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'DistributionList.IsTruncated',
            output_token: 'DistributionList.NextMarker',
            result_key: 'DistributionList.Items'
          },
          ListInvalidations: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'InvalidationList.IsTruncated',
            output_token: 'InvalidationList.NextMarker',
            result_key: 'InvalidationList.Items'
          },
          ListKeyValueStores: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            output_token: 'KeyValueStoreList.NextMarker',
            result_key: 'KeyValueStoreList.Items'
          },
          ListStreamingDistributions: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'StreamingDistributionList.IsTruncated',
            output_token: 'StreamingDistributionList.NextMarker',
            result_key: 'StreamingDistributionList.Items'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c71ee5f65f3b579447f48fe9b088c68731f707ad.js.map