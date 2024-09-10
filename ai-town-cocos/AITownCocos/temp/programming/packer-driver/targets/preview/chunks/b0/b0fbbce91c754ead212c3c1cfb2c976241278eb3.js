System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCapabilities: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'capabilities'
          },
          ListPartnerships: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'partnerships'
          },
          ListProfiles: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'profiles'
          },
          ListTransformers: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'transformers'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=b0fbbce91c754ead212c3c1cfb2c976241278eb3.js.map