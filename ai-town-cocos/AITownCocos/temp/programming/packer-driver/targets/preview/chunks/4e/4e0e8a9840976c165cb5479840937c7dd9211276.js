System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          TasksRunning: {
            delay: 6,
            operation: 'DescribeTasks',
            maxAttempts: 100,
            acceptors: [{
              expected: 'STOPPED',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'tasks[].lastStatus'
            }, {
              expected: 'MISSING',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'failures[].reason'
            }, {
              expected: 'RUNNING',
              matcher: 'pathAll',
              state: 'success',
              argument: 'tasks[].lastStatus'
            }]
          },
          TasksStopped: {
            delay: 6,
            operation: 'DescribeTasks',
            maxAttempts: 100,
            acceptors: [{
              expected: 'STOPPED',
              matcher: 'pathAll',
              state: 'success',
              argument: 'tasks[].lastStatus'
            }]
          },
          ServicesStable: {
            delay: 15,
            operation: 'DescribeServices',
            maxAttempts: 40,
            acceptors: [{
              expected: 'MISSING',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'failures[].reason'
            }, {
              expected: 'DRAINING',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'services[].status'
            }, {
              expected: 'INACTIVE',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'services[].status'
            }, {
              expected: true,
              matcher: 'path',
              state: 'success',
              argument: 'length(services[?!(length(deployments) == `1` && runningCount == desiredCount)]) == `0`'
            }]
          },
          ServicesInactive: {
            delay: 15,
            operation: 'DescribeServices',
            maxAttempts: 40,
            acceptors: [{
              expected: 'MISSING',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'failures[].reason'
            }, {
              expected: 'INACTIVE',
              matcher: 'pathAny',
              state: 'success',
              argument: 'services[].status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4e0e8a9840976c165cb5479840937c7dd9211276.js.map