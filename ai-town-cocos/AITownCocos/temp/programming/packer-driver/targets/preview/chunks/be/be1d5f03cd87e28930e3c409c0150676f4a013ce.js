System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          CodeBindingExists: {
            description: 'Wait until code binding is generated',
            delay: 2,
            operation: 'DescribeCodeBinding',
            maxAttempts: 30,
            acceptors: [{
              expected: 'CREATE_COMPLETE',
              matcher: 'path',
              state: 'success',
              argument: 'Status'
            }, {
              expected: 'CREATE_IN_PROGRESS',
              matcher: 'path',
              state: 'retry',
              argument: 'Status'
            }, {
              expected: 'CREATE_FAILED',
              matcher: 'path',
              state: 'failure',
              argument: 'Status'
            }, {
              matcher: 'error',
              expected: 'NotFoundException',
              state: 'failure'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=be1d5f03cd87e28930e3c409c0150676f4a013ce.js.map