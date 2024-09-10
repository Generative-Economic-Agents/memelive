System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          EnvironmentExists: {
            delay: 20,
            maxAttempts: 20,
            operation: 'DescribeEnvironments',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Ready'
            }, {
              state: 'retry',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Launching'
            }]
          },
          EnvironmentUpdated: {
            delay: 20,
            maxAttempts: 20,
            operation: 'DescribeEnvironments',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Ready'
            }, {
              state: 'retry',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Updating'
            }]
          },
          EnvironmentTerminated: {
            delay: 20,
            maxAttempts: 20,
            operation: 'DescribeEnvironments',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Terminated'
            }, {
              state: 'retry',
              matcher: 'pathAll',
              argument: 'Environments[].Status',
              expected: 'Terminating'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bb6a49573d1949c246f67246179da2e72a25e994.js.map