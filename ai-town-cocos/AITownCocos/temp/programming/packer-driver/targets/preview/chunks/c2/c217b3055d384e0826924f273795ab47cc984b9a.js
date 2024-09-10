System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAlarmHistory: {
            input_token: 'NextToken',
            limit_key: 'MaxRecords',
            output_token: 'NextToken',
            result_key: 'AlarmHistoryItems'
          },
          DescribeAlarms: {
            input_token: 'NextToken',
            limit_key: 'MaxRecords',
            output_token: 'NextToken',
            result_key: ['MetricAlarms', 'CompositeAlarms']
          },
          DescribeAlarmsForMetric: {
            result_key: 'MetricAlarms'
          },
          DescribeAnomalyDetectors: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'AnomalyDetectors'
          },
          DescribeInsightRules: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetMetricData: {
            input_token: 'NextToken',
            limit_key: 'MaxDatapoints',
            output_token: 'NextToken',
            result_key: ['MetricDataResults', 'Messages']
          },
          ListDashboards: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'DashboardEntries'
          },
          ListManagedInsightRules: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListMetricStreams: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListMetrics: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: ['Metrics', 'OwningAccounts']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c217b3055d384e0826924f273795ab47cc984b9a.js.map