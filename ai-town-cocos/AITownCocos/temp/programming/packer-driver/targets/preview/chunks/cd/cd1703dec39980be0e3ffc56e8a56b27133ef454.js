System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          BatchGetRumMetricDefinitions: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'MetricDefinitions'
          },
          GetAppMonitorData: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Events'
          },
          ListAppMonitors: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'AppMonitorSummaries'
          },
          ListRumMetricsDestinations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Destinations'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=cd1703dec39980be0e3ffc56e8a56b27133ef454.js.map