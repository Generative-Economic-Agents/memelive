System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetWorkflowExecutionHistory: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'events'
          },
          ListActivityTypes: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'typeInfos'
          },
          ListClosedWorkflowExecutions: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'executionInfos'
          },
          ListDomains: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'domainInfos'
          },
          ListOpenWorkflowExecutions: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'executionInfos'
          },
          ListWorkflowTypes: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'typeInfos'
          },
          PollForDecisionTask: {
            input_token: 'nextPageToken',
            limit_key: 'maximumPageSize',
            output_token: 'nextPageToken',
            result_key: 'events'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8cd881b408f188941c95c801b924f3d521410aa8.js.map