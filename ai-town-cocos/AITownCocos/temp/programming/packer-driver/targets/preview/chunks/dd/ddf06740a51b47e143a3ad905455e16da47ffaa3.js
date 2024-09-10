System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeScalableTargets: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ScalableTargets'
          },
          DescribeScalingActivities: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ScalingActivities'
          },
          DescribeScalingPolicies: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ScalingPolicies'
          },
          DescribeScheduledActions: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ScheduledActions'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=ddf06740a51b47e143a3ad905455e16da47ffaa3.js.map