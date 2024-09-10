System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          DBInstanceAvailable: {
            delay: 30,
            operation: 'DescribeDBInstances',
            maxAttempts: 60,
            acceptors: [{
              expected: 'available',
              matcher: 'pathAll',
              state: 'success',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'deleted',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'deleting',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'failed',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'incompatible-restore',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'incompatible-parameters',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }]
          },
          DBInstanceDeleted: {
            delay: 30,
            operation: 'DescribeDBInstances',
            maxAttempts: 60,
            acceptors: [{
              expected: 'deleted',
              matcher: 'pathAll',
              state: 'success',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'DBInstanceNotFound',
              matcher: 'error',
              state: 'success'
            }, {
              expected: 'creating',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'modifying',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'rebooting',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }, {
              expected: 'resetting-master-credentials',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'DBInstances[].DBInstanceStatus'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4ba15d78ae9c66463a4becc1988d0bd276009269.js.map