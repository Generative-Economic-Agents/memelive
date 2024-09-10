System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          BatchGetTraces: {
            input_token: 'NextToken',
            non_aggregate_keys: ['UnprocessedTraceIds'],
            output_token: 'NextToken',
            result_key: 'Traces'
          },
          GetGroups: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Groups'
          },
          GetInsightEvents: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetInsightSummaries: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetSamplingRules: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'SamplingRuleRecords'
          },
          GetSamplingStatisticSummaries: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'SamplingStatisticSummaries'
          },
          GetServiceGraph: {
            input_token: 'NextToken',
            non_aggregate_keys: ['StartTime', 'EndTime', 'ContainsOldGroupVersions'],
            output_token: 'NextToken',
            result_key: 'Services'
          },
          GetTimeSeriesServiceStatistics: {
            input_token: 'NextToken',
            non_aggregate_keys: ['ContainsOldGroupVersions'],
            output_token: 'NextToken',
            result_key: 'TimeSeriesServiceStatistics'
          },
          GetTraceGraph: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Services'
          },
          GetTraceSummaries: {
            input_token: 'NextToken',
            non_aggregate_keys: ['TracesProcessedCount', 'ApproximateTime'],
            output_token: 'NextToken',
            result_key: 'TraceSummaries'
          },
          ListResourcePolicies: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'ResourcePolicies'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            result_key: 'Tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8c2365dd382920ee25eda5f25e2b583a41cbaa17.js.map