System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListExecutions: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Executions'
          },
          ListExports: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Exports'
          },
          ListTables: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Tables'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ae1eb363538e5e4feaf0c130f9f42fce89e250f4.js.map