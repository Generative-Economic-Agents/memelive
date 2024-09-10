System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          SuccessfulSigningJob: {
            delay: 20,
            operation: 'DescribeSigningJob',
            maxAttempts: 25,
            acceptors: [{
              expected: 'Succeeded',
              matcher: 'path',
              state: 'success',
              argument: 'status'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'status'
            }, {
              expected: 'ResourceNotFoundException',
              matcher: 'error',
              state: 'failure'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bbb7065595e143105bc2e886ff5db41d218feaf0.js.map