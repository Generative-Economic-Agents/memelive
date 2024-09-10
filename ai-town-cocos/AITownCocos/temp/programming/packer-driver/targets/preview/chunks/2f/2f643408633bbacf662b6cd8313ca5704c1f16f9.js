System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListJournalKinesisStreamsForLedger: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListJournalS3Exports: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListJournalS3ExportsForLedger: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListLedgers: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2f643408633bbacf662b6cd8313ca5704c1f16f9.js.map