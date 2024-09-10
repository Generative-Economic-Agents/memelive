System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          SearchDevices: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'devices'
          },
          SearchJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobs'
          },
          SearchQuantumTasks: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'quantumTasks'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0a801e32d1c19be827b10087662985c47d3b740f.js.map