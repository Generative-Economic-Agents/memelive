System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListKeyspaces: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'keyspaces'
          },
          ListTables: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tables'
          },
          ListTagsForResource: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e069b21d06a31681cc635da2627e08849a5bec44.js.map