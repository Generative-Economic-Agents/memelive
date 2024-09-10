System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAliases: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Aliases'
          },
          ListKeys: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Keys'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9db5f1b97bebe6e6cda7736d8eead276e94283f1.js.map