System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListScheduledQueries: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ScheduledQueries'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Tags'
          },
          Query: {
            input_token: 'NextToken',
            limit_key: 'MaxRows',
            non_aggregate_keys: ['ColumnInfo', 'QueryId', 'QueryStatus'],
            output_token: 'NextToken',
            result_key: 'Rows'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cdda3db2cf0683b8e8c7dfd688360cf3146a9bcd.js.map