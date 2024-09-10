System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDomains: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            output_token: 'NextPageMarker',
            result_key: 'Domains'
          },
          ListOperations: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            output_token: 'NextPageMarker',
            result_key: 'Operations'
          },
          ListPrices: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            output_token: 'NextPageMarker',
            result_key: 'Prices'
          },
          ViewBilling: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            output_token: 'NextPageMarker',
            result_key: 'BillingRecords'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a4a3ac72d7e87f583f1d82bfe33a05b7f0c9f76f.js.map