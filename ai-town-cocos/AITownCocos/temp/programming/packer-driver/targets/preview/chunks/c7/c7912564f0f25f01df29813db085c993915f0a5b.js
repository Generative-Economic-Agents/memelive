System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          DistributionDeployed: {
            delay: 60,
            operation: 'GetDistribution',
            maxAttempts: 25,
            description: 'Wait until a distribution is deployed.',
            acceptors: [{
              expected: 'Deployed',
              matcher: 'path',
              state: 'success',
              argument: 'Distribution.Status'
            }]
          },
          InvalidationCompleted: {
            delay: 20,
            operation: 'GetInvalidation',
            maxAttempts: 30,
            description: 'Wait until an invalidation has completed.',
            acceptors: [{
              expected: 'Completed',
              matcher: 'path',
              state: 'success',
              argument: 'Invalidation.Status'
            }]
          },
          StreamingDistributionDeployed: {
            delay: 60,
            operation: 'GetStreamingDistribution',
            maxAttempts: 25,
            description: 'Wait until a streaming distribution is deployed.',
            acceptors: [{
              expected: 'Deployed',
              matcher: 'path',
              state: 'success',
              argument: 'StreamingDistribution.Status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c7912564f0f25f01df29813db085c993915f0a5b.js.map