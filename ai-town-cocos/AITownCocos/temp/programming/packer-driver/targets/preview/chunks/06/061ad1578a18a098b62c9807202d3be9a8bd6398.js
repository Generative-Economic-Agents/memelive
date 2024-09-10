System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetConnectors: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'connectorList'
          },
          GetReplicationJobs: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'replicationJobList'
          },
          GetReplicationRuns: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'replicationRunList'
          },
          GetServers: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'serverList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=061ad1578a18a098b62c9807202d3be9a8bd6398.js.map