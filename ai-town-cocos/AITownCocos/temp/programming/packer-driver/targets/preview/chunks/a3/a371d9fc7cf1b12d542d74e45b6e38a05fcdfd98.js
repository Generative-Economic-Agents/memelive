System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ClusterAvailable: {
            delay: 60,
            operation: 'DescribeClusters',
            maxAttempts: 30,
            acceptors: [{
              expected: 'available',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Clusters[].ClusterStatus'
            }, {
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Clusters[].ClusterStatus'
            }, {
              expected: 'ClusterNotFound',
              matcher: 'error',
              state: 'retry'
            }]
          },
          ClusterDeleted: {
            delay: 60,
            operation: 'DescribeClusters',
            maxAttempts: 30,
            acceptors: [{
              expected: 'ClusterNotFound',
              matcher: 'error',
              state: 'success'
            }, {
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Clusters[].ClusterStatus'
            }, {
              expected: 'modifying',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Clusters[].ClusterStatus'
            }]
          },
          ClusterRestored: {
            operation: 'DescribeClusters',
            maxAttempts: 30,
            delay: 60,
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Clusters[].RestoreStatus.Status',
              expected: 'completed'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'Clusters[].ClusterStatus',
              expected: 'deleting'
            }]
          },
          SnapshotAvailable: {
            delay: 15,
            operation: 'DescribeClusterSnapshots',
            maxAttempts: 20,
            acceptors: [{
              expected: 'available',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Snapshots[].Status'
            }, {
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Snapshots[].Status'
            }, {
              expected: 'deleted',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Snapshots[].Status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a371d9fc7cf1b12d542d74e45b6e38a05fcdfd98.js.map