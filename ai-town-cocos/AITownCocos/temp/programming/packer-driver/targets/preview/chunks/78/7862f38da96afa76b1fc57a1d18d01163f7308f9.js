System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          JobComplete: {
            delay: 30,
            operation: 'ReadJob',
            maxAttempts: 120,
            acceptors: [{
              expected: 'Complete',
              matcher: 'path',
              state: 'success',
              argument: 'Job.Status'
            }, {
              expected: 'Canceled',
              matcher: 'path',
              state: 'failure',
              argument: 'Job.Status'
            }, {
              expected: 'Error',
              matcher: 'path',
              state: 'failure',
              argument: 'Job.Status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7862f38da96afa76b1fc57a1d18d01163f7308f9.js.map