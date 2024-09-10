System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ClusterRunning: {
            delay: 30,
            operation: 'DescribeCluster',
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'RUNNING'
            }, {
              state: 'success',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'WAITING'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'TERMINATING'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'TERMINATED'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'TERMINATED_WITH_ERRORS'
            }]
          },
          StepComplete: {
            delay: 30,
            operation: 'DescribeStep',
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'Step.Status.State',
              expected: 'COMPLETED'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Step.Status.State',
              expected: 'FAILED'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Step.Status.State',
              expected: 'CANCELLED'
            }]
          },
          ClusterTerminated: {
            delay: 30,
            operation: 'DescribeCluster',
            maxAttempts: 60,
            acceptors: [{
              state: 'success',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'TERMINATED'
            }, {
              state: 'failure',
              matcher: 'path',
              argument: 'Cluster.Status.State',
              expected: 'TERMINATED_WITH_ERRORS'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5a6a22afc9acf520ac72e93608c322b226c5fac0.js.map