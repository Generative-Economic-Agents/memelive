System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ResourceRequestSuccess: {
            description: 'Wait until resource operation request is successful',
            delay: 5,
            maxAttempts: 24,
            operation: 'GetResourceRequestStatus',
            acceptors: [{
              matcher: 'path',
              argument: 'ProgressEvent.OperationStatus',
              state: 'success',
              expected: 'SUCCESS'
            }, {
              matcher: 'path',
              argument: 'ProgressEvent.OperationStatus',
              state: 'failure',
              expected: 'FAILED'
            }, {
              matcher: 'path',
              argument: 'ProgressEvent.OperationStatus',
              state: 'failure',
              expected: 'CANCEL_COMPLETE'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6989ca5c98054d9692c94e6729e4b0f736b1060c.js.map