System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ServerOffline: {
            delay: 30,
            maxAttempts: 120,
            operation: 'DescribeServer',
            acceptors: [{
              matcher: 'path',
              argument: 'Server.State',
              state: 'success',
              expected: 'OFFLINE'
            }, {
              matcher: 'path',
              argument: 'Server.State',
              state: 'failure',
              expected: 'STOP_FAILED'
            }]
          },
          ServerOnline: {
            delay: 30,
            maxAttempts: 120,
            operation: 'DescribeServer',
            acceptors: [{
              matcher: 'path',
              argument: 'Server.State',
              state: 'success',
              expected: 'ONLINE'
            }, {
              matcher: 'path',
              argument: 'Server.State',
              state: 'failure',
              expected: 'START_FAILED'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=be546a937a77bec2319d8d99b9532e162a9d2cd2.js.map