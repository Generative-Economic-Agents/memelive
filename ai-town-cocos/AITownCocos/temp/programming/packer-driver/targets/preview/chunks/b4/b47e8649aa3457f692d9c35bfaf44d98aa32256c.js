System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetDataLakeSources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'dataLakeSources'
          },
          ListDataLakeExceptions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'exceptions'
          },
          ListLogSources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'sources'
          },
          ListSubscribers: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'subscribers'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b47e8649aa3457f692d9c35bfaf44d98aa32256c.js.map