System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListIdMappingJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobs'
          },
          ListIdMappingWorkflows: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workflowSummaries'
          },
          ListIdNamespaces: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'idNamespaceSummaries'
          },
          ListMatchingJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobs'
          },
          ListMatchingWorkflows: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workflowSummaries'
          },
          ListProviderServices: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'providerServiceSummaries'
          },
          ListSchemaMappings: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'schemaList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=236f99686a7e1a81206d4015c7d5820cac5d17cc.js.map