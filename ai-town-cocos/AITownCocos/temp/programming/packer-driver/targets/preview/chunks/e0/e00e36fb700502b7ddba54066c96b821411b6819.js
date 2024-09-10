System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApplicationStates: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ApplicationStateList'
          },
          ListCreatedArtifacts: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CreatedArtifactList'
          },
          ListDiscoveredResources: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'DiscoveredResourceList'
          },
          ListMigrationTasks: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'MigrationTaskSummaryList'
          },
          ListProgressUpdateStreams: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ProgressUpdateStreamSummaryList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e00e36fb700502b7ddba54066c96b821411b6819.js.map