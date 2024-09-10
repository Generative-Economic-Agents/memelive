System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeTable: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ColumnList'
          },
          GetStatementResult: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Records'
          },
          ListDatabases: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Databases'
          },
          ListSchemas: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Schemas'
          },
          ListStatements: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Statements'
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
//# sourceMappingURL=109b171039545f2d7a9c7d101fb6e5dc4f868be0.js.map