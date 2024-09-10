System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListKxChangesets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListKxClusterNodes: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListKxDatabases: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListKxDataviews: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListKxEnvironments: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'environments'
          },
          ListKxScalingGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3db43dce8b9da1ac80569c0d5a45570157ba993f.js.map