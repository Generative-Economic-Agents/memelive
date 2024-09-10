System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetQueryResults: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          },
          ListHealthEvents: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'HealthEvents'
          },
          ListInternetEvents: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'InternetEvents'
          },
          ListMonitors: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Monitors'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=5d8ff85c75ff46b015a5423e38667609cbf3770d.js.map