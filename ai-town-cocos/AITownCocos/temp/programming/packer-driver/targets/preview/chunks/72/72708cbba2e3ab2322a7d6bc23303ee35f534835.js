System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          LoadBalancerExists: {
            delay: 15,
            operation: 'DescribeLoadBalancers',
            maxAttempts: 40,
            acceptors: [{
              matcher: 'status',
              expected: 200,
              state: 'success'
            }, {
              matcher: 'error',
              expected: 'LoadBalancerNotFound',
              state: 'retry'
            }]
          },
          LoadBalancerAvailable: {
            delay: 15,
            operation: 'DescribeLoadBalancers',
            maxAttempts: 40,
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'LoadBalancers[].State.Code',
              expected: 'active'
            }, {
              state: 'retry',
              matcher: 'pathAny',
              argument: 'LoadBalancers[].State.Code',
              expected: 'provisioning'
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'LoadBalancerNotFound'
            }]
          },
          LoadBalancersDeleted: {
            delay: 15,
            operation: 'DescribeLoadBalancers',
            maxAttempts: 40,
            acceptors: [{
              state: 'retry',
              matcher: 'pathAll',
              argument: 'LoadBalancers[].State.Code',
              expected: 'active'
            }, {
              matcher: 'error',
              expected: 'LoadBalancerNotFound',
              state: 'success'
            }]
          },
          TargetInService: {
            delay: 15,
            maxAttempts: 40,
            operation: 'DescribeTargetHealth',
            acceptors: [{
              argument: 'TargetHealthDescriptions[].TargetHealth.State',
              expected: 'healthy',
              matcher: 'pathAll',
              state: 'success'
            }, {
              matcher: 'error',
              expected: 'InvalidInstance',
              state: 'retry'
            }]
          },
          TargetDeregistered: {
            delay: 15,
            maxAttempts: 40,
            operation: 'DescribeTargetHealth',
            acceptors: [{
              matcher: 'error',
              expected: 'InvalidTarget',
              state: 'success'
            }, {
              argument: 'TargetHealthDescriptions[].TargetHealth.State',
              expected: 'unused',
              matcher: 'pathAll',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=72708cbba2e3ab2322a7d6bc23303ee35f534835.js.map