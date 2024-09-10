System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          TableExists: {
            delay: 20,
            operation: 'DescribeTable',
            maxAttempts: 25,
            acceptors: [{
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'Table.TableStatus'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'retry'
            }]
          },
          TableNotExists: {
            delay: 20,
            operation: 'DescribeTable',
            maxAttempts: 25,
            acceptors: [{
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8ca19fee8f09439ff194ad932600df749a463172.js.map