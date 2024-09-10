System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListReadinessChecks: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ReadinessChecks'
          },
          ListResourceSets: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ResourceSets'
          },
          ListCells: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Cells'
          },
          ListRecoveryGroups: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RecoveryGroups'
          },
          ListRules: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Rules'
          },
          ListCrossAccountAuthorizations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'CrossAccountAuthorizations'
          },
          GetCellReadinessSummary: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ReadinessChecks',
            non_aggregate_keys: ['Readiness']
          },
          GetRecoveryGroupReadinessSummary: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ReadinessChecks',
            non_aggregate_keys: ['Readiness']
          },
          GetReadinessCheckStatus: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Resources',
            non_aggregate_keys: ['Readiness', 'Messages']
          },
          GetReadinessCheckResourceStatus: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Rules',
            non_aggregate_keys: ['Readiness']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0be32ae6d0902851f1ee7ee2735aff82cadb3c2d.js.map