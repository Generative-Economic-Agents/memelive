System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          VaultExists: {
            operation: 'DescribeVault',
            delay: 3,
            maxAttempts: 15,
            acceptors: [{
              state: 'success',
              matcher: 'status',
              expected: 200
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'ResourceNotFoundException'
            }]
          },
          VaultNotExists: {
            operation: 'DescribeVault',
            delay: 3,
            maxAttempts: 15,
            acceptors: [{
              state: 'retry',
              matcher: 'status',
              expected: 200
            }, {
              state: 'success',
              matcher: 'error',
              expected: 'ResourceNotFoundException'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=73b2aa0f8bd1102a75868ea726c25ee23cc241fd.js.map