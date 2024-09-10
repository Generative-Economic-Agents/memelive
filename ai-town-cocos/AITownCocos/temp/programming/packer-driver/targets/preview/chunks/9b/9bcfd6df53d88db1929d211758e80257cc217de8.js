System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          WaitForReplicationSetActive: {
            description: 'Wait for a replication set to become ACTIVE',
            delay: 30,
            maxAttempts: 5,
            operation: 'GetReplicationSet',
            acceptors: [{
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'success',
              expected: 'ACTIVE'
            }, {
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'retry',
              expected: 'CREATING'
            }, {
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'retry',
              expected: 'UPDATING'
            }, {
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'failure',
              expected: 'FAILED'
            }]
          },
          WaitForReplicationSetDeleted: {
            description: 'Wait for a replication set to be deleted',
            delay: 30,
            maxAttempts: 5,
            operation: 'GetReplicationSet',
            acceptors: [{
              matcher: 'error',
              state: 'success',
              expected: 'ResourceNotFoundException'
            }, {
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'retry',
              expected: 'DELETING'
            }, {
              matcher: 'path',
              argument: 'replicationSet.status',
              state: 'failure',
              expected: 'FAILED'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9bcfd6df53d88db1929d211758e80257cc217de8.js.map