System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAssetContracts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'contracts'
          },
          ListFilteredTransactionEvents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'events'
          },
          ListTokenBalances: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'tokenBalances'
          },
          ListTransactionEvents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'events'
          },
          ListTransactions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'transactions'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3270cdacbb16540fc026e5bd03155cb3232d561a.js.map