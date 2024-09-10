System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          InstanceDeregistered: {
            delay: 15,
            operation: 'DescribeInstanceHealth',
            maxAttempts: 40,
            acceptors: [{
              expected: 'OutOfService',
              matcher: 'pathAll',
              state: 'success',
              argument: 'InstanceStates[].State'
            }, {
              matcher: 'error',
              expected: 'InvalidInstance',
              state: 'success'
            }]
          },
          AnyInstanceInService: {
            acceptors: [{
              argument: 'InstanceStates[].State',
              expected: 'InService',
              matcher: 'pathAny',
              state: 'success'
            }],
            delay: 15,
            maxAttempts: 40,
            operation: 'DescribeInstanceHealth'
          },
          InstanceInService: {
            acceptors: [{
              argument: 'InstanceStates[].State',
              expected: 'InService',
              matcher: 'pathAll',
              state: 'success'
            }, {
              matcher: 'error',
              expected: 'InvalidInstance',
              state: 'retry'
            }],
            delay: 15,
            maxAttempts: 40,
            operation: 'DescribeInstanceHealth'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ad4be566f8e89d6de76a8bf59ad7ef347265238b.js.map