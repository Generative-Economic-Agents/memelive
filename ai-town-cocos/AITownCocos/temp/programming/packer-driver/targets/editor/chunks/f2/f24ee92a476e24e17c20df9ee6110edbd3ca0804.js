System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          BatchGetSecretValue: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListSecretVersionIds: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListSecrets: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f24ee92a476e24e17c20df9ee6110edbd3ca0804.js.map