System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeBackups: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Backups'
          },
          DescribeEvents: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ServerEvents'
          },
          DescribeServers: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Servers'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cc1368fb0dbc952a0cddb038b7d9c305bf5fe0cc.js.map