System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          StreamExists: {
            delay: 10,
            operation: 'DescribeStream',
            maxAttempts: 18,
            acceptors: [{
              expected: 'ACTIVE',
              matcher: 'path',
              state: 'success',
              argument: 'StreamDescription.StreamStatus'
            }]
          },
          StreamNotExists: {
            delay: 10,
            operation: 'DescribeStream',
            maxAttempts: 18,
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
//# sourceMappingURL=76a352fd15f2a953134a539081ba38e36825348c.js.map