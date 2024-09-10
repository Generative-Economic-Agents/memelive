System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeListeners: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            result_key: 'Listeners'
          },
          DescribeLoadBalancers: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            result_key: 'LoadBalancers'
          },
          DescribeTargetGroups: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            result_key: 'TargetGroups'
          },
          DescribeTrustStoreAssociations: {
            input_token: 'Marker',
            limit_key: 'PageSize',
            output_token: 'NextMarker'
          },
          DescribeTrustStoreRevocations: {
            input_token: 'Marker',
            limit_key: 'PageSize',
            output_token: 'NextMarker'
          },
          DescribeTrustStores: {
            input_token: 'Marker',
            limit_key: 'PageSize',
            output_token: 'NextMarker'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=125ca220fa7ab0e4e773f0be2b9e565407631714.js.map