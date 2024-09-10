System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          DeploymentSuccessful: {
            delay: 15,
            operation: 'GetDeployment',
            maxAttempts: 120,
            acceptors: [{
              expected: 'Succeeded',
              matcher: 'path',
              state: 'success',
              argument: 'deploymentInfo.status'
            }, {
              expected: 'Failed',
              matcher: 'path',
              state: 'failure',
              argument: 'deploymentInfo.status'
            }, {
              expected: 'Stopped',
              matcher: 'path',
              state: 'failure',
              argument: 'deploymentInfo.status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=487646564d0a37ab7f30989d4e50fa648533a0ff.js.map