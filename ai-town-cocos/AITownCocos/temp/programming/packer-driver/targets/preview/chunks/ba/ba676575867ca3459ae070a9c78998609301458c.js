System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetFindings: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'findings'
          },
          ListFindingsMetrics: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'findingsMetrics'
          },
          ListScans: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'summaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ba676575867ca3459ae070a9c78998609301458c.js.map