System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          AlarmExists: {
            delay: 5,
            maxAttempts: 40,
            operation: 'DescribeAlarms',
            acceptors: [{
              matcher: 'path',
              expected: true,
              argument: 'length(MetricAlarms[]) > `0`',
              state: 'success'
            }]
          },
          CompositeAlarmExists: {
            delay: 5,
            maxAttempts: 40,
            operation: 'DescribeAlarms',
            acceptors: [{
              matcher: 'path',
              expected: true,
              argument: 'length(CompositeAlarms[]) > `0`',
              state: 'success'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=006fcc9aa5525343de90c1ba46a6b84442a3b72e.js.map