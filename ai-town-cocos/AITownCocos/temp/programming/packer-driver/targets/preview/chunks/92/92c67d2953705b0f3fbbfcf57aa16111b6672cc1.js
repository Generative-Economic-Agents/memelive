System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          FleetStarted: {
            delay: 30,
            maxAttempts: 40,
            operation: 'DescribeFleets',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Fleets[].State',
              expected: 'RUNNING'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'Fleets[].State',
              expected: 'STOPPING'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'Fleets[].State',
              expected: 'STOPPED'
            }]
          },
          FleetStopped: {
            delay: 30,
            maxAttempts: 40,
            operation: 'DescribeFleets',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'Fleets[].State',
              expected: 'STOPPED'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'Fleets[].State',
              expected: 'STARTING'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'Fleets[].State',
              expected: 'RUNNING'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=92c67d2953705b0f3fbbfcf57aa16111b6672cc1.js.map