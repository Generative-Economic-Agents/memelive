System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeInstanceHealth: {
            result_key: 'InstanceStates'
          },
          DescribeLoadBalancerPolicies: {
            result_key: 'PolicyDescriptions'
          },
          DescribeLoadBalancerPolicyTypes: {
            result_key: 'PolicyTypeDescriptions'
          },
          DescribeLoadBalancers: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            result_key: 'LoadBalancerDescriptions'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b407f16a6a4ebfa9e2b71bc232f9b7d034ea337a.js.map