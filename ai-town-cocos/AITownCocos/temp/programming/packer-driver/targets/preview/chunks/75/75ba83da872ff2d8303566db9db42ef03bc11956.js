System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ResourceRecordSetsChanged: {
            delay: 30,
            maxAttempts: 60,
            operation: 'GetChange',
            acceptors: [{
              matcher: 'path',
              expected: 'INSYNC',
              argument: 'ChangeInfo.Status',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=75ba83da872ff2d8303566db9db42ef03bc11956.js.map