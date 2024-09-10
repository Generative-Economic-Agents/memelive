System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetExecutionHistory: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'events'
          },
          ListActivities: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'activities'
          },
          ListExecutions: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'executions'
          },
          ListMapRuns: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'mapRuns'
          },
          ListStateMachines: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'stateMachines'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=879ed3a39fcc23d6f4f2c4c9e5bc5d61886f187b.js.map