System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          CommandExecuted: {
            delay: 5,
            operation: 'GetCommandInvocation',
            maxAttempts: 20,
            acceptors: [{
              expected: 'Pending',
              matcher: 'path',
              state: 'retry',
              argument: 'Status'
            }, {
              expected: 'InProgress',
              matcher: 'path',
              state: 'retry',
              argument: 'Status'
            }, {
              expected: 'Delayed',
              matcher: 'path',
              state: 'retry',
              argument: 'Status'
            }, {
              expected: 'Success',
              matcher: 'path',
              state: 'success',
              argument: 'Status'
            }, {
              expected: 'Cancelled',
              matcher: 'path',
              state: 'failure',
              argument: 'Status'
            }, {
              expected: 'TimedOut',
              matcher: 'path',
              state: 'failure',
              argument: 'Status'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'Status'
            }, {
              expected: 'Cancelling',
              matcher: 'path',
              state: 'failure',
              argument: 'Status'
            }, {
              state: 'retry',
              matcher: 'error',
              expected: 'InvocationDoesNotExist'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=546d56e1f0cfc617359b9dea430a3423bd3d2398.js.map