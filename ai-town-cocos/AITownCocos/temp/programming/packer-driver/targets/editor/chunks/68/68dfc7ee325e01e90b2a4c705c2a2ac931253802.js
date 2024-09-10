System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          ProjectVersionTrainingCompleted: {
            description: 'Wait until the ProjectVersion training completes.',
            operation: 'DescribeProjectVersions',
            delay: 120,
            maxAttempts: 360,
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'ProjectVersionDescriptions[].Status',
              expected: 'TRAINING_COMPLETED'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'ProjectVersionDescriptions[].Status',
              expected: 'TRAINING_FAILED'
            }]
          },
          ProjectVersionRunning: {
            description: 'Wait until the ProjectVersion is running.',
            delay: 30,
            maxAttempts: 40,
            operation: 'DescribeProjectVersions',
            acceptors: [{
              state: 'success',
              matcher: 'pathAll',
              argument: 'ProjectVersionDescriptions[].Status',
              expected: 'RUNNING'
            }, {
              state: 'failure',
              matcher: 'pathAny',
              argument: 'ProjectVersionDescriptions[].Status',
              expected: 'FAILED'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=68dfc7ee325e01e90b2a4c705c2a2ac931253802.js.map