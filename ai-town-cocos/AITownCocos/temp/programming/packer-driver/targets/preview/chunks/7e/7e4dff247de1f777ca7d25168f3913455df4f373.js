System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAccountRoles: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'roleList'
          },
          ListAccounts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'accountList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7e4dff247de1f777ca7d25168f3913455df4f373.js.map