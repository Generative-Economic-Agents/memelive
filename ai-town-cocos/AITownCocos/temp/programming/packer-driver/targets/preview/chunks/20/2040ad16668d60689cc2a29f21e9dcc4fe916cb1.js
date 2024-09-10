System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        version: 2,
        waiters: {
          DataSourceAvailable: {
            delay: 30,
            operation: 'DescribeDataSources',
            maxAttempts: 60,
            acceptors: [{
              expected: 'COMPLETED',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Results[].Status'
            }, {
              expected: 'FAILED',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Results[].Status'
            }]
          },
          MLModelAvailable: {
            delay: 30,
            operation: 'DescribeMLModels',
            maxAttempts: 60,
            acceptors: [{
              expected: 'COMPLETED',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Results[].Status'
            }, {
              expected: 'FAILED',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Results[].Status'
            }]
          },
          EvaluationAvailable: {
            delay: 30,
            operation: 'DescribeEvaluations',
            maxAttempts: 60,
            acceptors: [{
              expected: 'COMPLETED',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Results[].Status'
            }, {
              expected: 'FAILED',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Results[].Status'
            }]
          },
          BatchPredictionAvailable: {
            delay: 30,
            operation: 'DescribeBatchPredictions',
            maxAttempts: 60,
            acceptors: [{
              expected: 'COMPLETED',
              matcher: 'pathAll',
              state: 'success',
              argument: 'Results[].Status'
            }, {
              expected: 'FAILED',
              matcher: 'pathAny',
              state: 'failure',
              argument: 'Results[].Status'
            }]
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2040ad16668d60689cc2a29f21e9dcc4fe916cb1.js.map