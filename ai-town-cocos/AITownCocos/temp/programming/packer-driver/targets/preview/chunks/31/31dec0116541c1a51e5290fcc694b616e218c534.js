System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAffectedAccountsForOrganization: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            non_aggregate_keys: ['eventScopeCode'],
            output_token: 'nextToken',
            result_key: 'affectedAccounts'
          },
          DescribeAffectedEntities: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'entities'
          },
          DescribeAffectedEntitiesForOrganization: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            non_aggregate_keys: ['failedSet'],
            output_token: 'nextToken',
            result_key: 'entities'
          },
          DescribeEntityAggregates: {
            result_key: 'entityAggregates'
          },
          DescribeEventAggregates: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'eventAggregates'
          },
          DescribeEventTypes: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'eventTypes'
          },
          DescribeEvents: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'events'
          },
          DescribeEventsForOrganization: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'events'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=31dec0116541c1a51e5290fcc694b616e218c534.js.map