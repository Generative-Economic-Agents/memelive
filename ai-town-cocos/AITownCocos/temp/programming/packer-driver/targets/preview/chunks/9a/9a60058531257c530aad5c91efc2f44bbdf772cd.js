System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          TestConnectionSucceeds: {
            acceptors: [{
              argument: 'Connections[].Status',
              expected: 'successful',
              matcher: 'pathAll',
              state: 'success'
            }, {
              argument: 'Connections[].Status',
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 5,
            description: 'Wait until testing connection succeeds.',
            maxAttempts: 60,
            operation: 'DescribeConnections'
          },
          EndpointDeleted: {
            acceptors: [{
              expected: 'ResourceNotFoundFault',
              matcher: 'error',
              state: 'success'
            }, {
              argument: 'Endpoints[].Status',
              expected: 'active',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'Endpoints[].Status',
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 5,
            description: 'Wait until testing endpoint is deleted.',
            maxAttempts: 60,
            operation: 'DescribeEndpoints'
          },
          ReplicationInstanceAvailable: {
            acceptors: [{
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'available',
              matcher: 'pathAll',
              state: 'success'
            }, {
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'incompatible-credentials',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'incompatible-network',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'inaccessible-encryption-credentials',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 60,
            description: 'Wait until DMS replication instance is available.',
            maxAttempts: 60,
            operation: 'DescribeReplicationInstances'
          },
          ReplicationInstanceDeleted: {
            acceptors: [{
              argument: 'ReplicationInstances[].ReplicationInstanceStatus',
              expected: 'available',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              expected: 'ResourceNotFoundFault',
              matcher: 'error',
              state: 'success'
            }],
            delay: 15,
            description: 'Wait until DMS replication instance is deleted.',
            maxAttempts: 60,
            operation: 'DescribeReplicationInstances'
          },
          ReplicationTaskReady: {
            acceptors: [{
              argument: 'ReplicationTasks[].Status',
              expected: 'ready',
              matcher: 'pathAll',
              state: 'success'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'starting',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'running',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'stopping',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'stopped',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'modifying',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'testing',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 15,
            description: 'Wait until DMS replication task is ready.',
            maxAttempts: 60,
            operation: 'DescribeReplicationTasks'
          },
          ReplicationTaskStopped: {
            acceptors: [{
              argument: 'ReplicationTasks[].Status',
              expected: 'stopped',
              matcher: 'pathAll',
              state: 'success'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'ready',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'starting',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'modifying',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'testing',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 15,
            description: 'Wait until DMS replication task is stopped.',
            maxAttempts: 60,
            operation: 'DescribeReplicationTasks'
          },
          ReplicationTaskRunning: {
            acceptors: [{
              argument: 'ReplicationTasks[].Status',
              expected: 'running',
              matcher: 'pathAll',
              state: 'success'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'ready',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'stopping',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'stopped',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'modifying',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'testing',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure'
            }],
            delay: 15,
            description: 'Wait until DMS replication task is running.',
            maxAttempts: 60,
            operation: 'DescribeReplicationTasks'
          },
          ReplicationTaskDeleted: {
            acceptors: [{
              argument: 'ReplicationTasks[].Status',
              expected: 'ready',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'stopped',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'running',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              argument: 'ReplicationTasks[].Status',
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure'
            }, {
              expected: 'ResourceNotFoundFault',
              matcher: 'error',
              state: 'success'
            }],
            delay: 15,
            description: 'Wait until DMS replication task is deleted.',
            maxAttempts: 60,
            operation: 'DescribeReplicationTasks'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9a60058531257c530aad5c91efc2f44bbdf772cd.js.map