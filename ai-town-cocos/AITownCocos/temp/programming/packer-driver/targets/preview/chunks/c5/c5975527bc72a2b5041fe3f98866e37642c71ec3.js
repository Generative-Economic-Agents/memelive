System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetResourcePolicies: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'resourcePolicies'
          },
          ListIncidentFindings: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'findings'
          },
          ListIncidentRecords: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'incidentRecordSummaries'
          },
          ListRelatedItems: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'relatedItems'
          },
          ListReplicationSets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'replicationSetArns'
          },
          ListResponsePlans: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'responsePlanSummaries'
          },
          ListTimelineEvents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'eventSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c5975527bc72a2b5041fe3f98866e37642c71ec3.js.map