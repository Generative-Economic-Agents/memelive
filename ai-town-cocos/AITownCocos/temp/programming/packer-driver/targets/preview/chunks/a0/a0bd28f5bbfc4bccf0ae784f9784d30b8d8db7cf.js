System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ContactScheduled: {
            description: 'Waits until a contact has been scheduled',
            delay: 5,
            maxAttempts: 180,
            operation: 'DescribeContact',
            acceptors: [{
              matcher: 'path',
              argument: 'contactStatus',
              state: 'failure',
              expected: 'FAILED_TO_SCHEDULE'
            }, {
              matcher: 'path',
              argument: 'contactStatus',
              state: 'success',
              expected: 'SCHEDULED'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a0bd28f5bbfc4bccf0ae784f9784d30b8d8db7cf.js.map