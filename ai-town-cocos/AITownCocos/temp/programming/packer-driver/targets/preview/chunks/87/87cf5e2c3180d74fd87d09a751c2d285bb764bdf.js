System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListGroupResources: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: ['ResourceIdentifiers', 'Resources']
          },
          ListGroups: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'GroupIdentifiers'
          },
          SearchResources: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ResourceIdentifiers'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=87cf5e2c3180d74fd87d09a751c2d285bb764bdf.js.map