System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          BatchGetItem: {
            input_token: 'RequestItems',
            output_token: 'UnprocessedKeys'
          },
          ListTables: {
            input_token: 'ExclusiveStartTableName',
            limit_key: 'Limit',
            output_token: 'LastEvaluatedTableName',
            result_key: 'TableNames'
          },
          Query: {
            input_token: 'ExclusiveStartKey',
            limit_key: 'Limit',
            output_token: 'LastEvaluatedKey',
            result_key: 'Items'
          },
          Scan: {
            input_token: 'ExclusiveStartKey',
            limit_key: 'Limit',
            output_token: 'LastEvaluatedKey',
            result_key: 'Items'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=04a8eb2cded369d44c71e939164bd2b3c1bbb605.js.map