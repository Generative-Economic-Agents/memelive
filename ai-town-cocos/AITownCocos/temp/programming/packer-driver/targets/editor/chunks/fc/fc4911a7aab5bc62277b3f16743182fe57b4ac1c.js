System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCidrBlocks: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CidrBlocks'
          },
          ListCidrCollections: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CidrCollections'
          },
          ListCidrLocations: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CidrLocations'
          },
          ListHealthChecks: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'IsTruncated',
            output_token: 'NextMarker',
            result_key: 'HealthChecks'
          },
          ListHostedZones: {
            input_token: 'Marker',
            limit_key: 'MaxItems',
            more_results: 'IsTruncated',
            output_token: 'NextMarker',
            result_key: 'HostedZones'
          },
          ListQueryLoggingConfigs: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'QueryLoggingConfigs'
          },
          ListResourceRecordSets: {
            input_token: ['StartRecordName', 'StartRecordType', 'StartRecordIdentifier'],
            limit_key: 'MaxItems',
            more_results: 'IsTruncated',
            output_token: ['NextRecordName', 'NextRecordType', 'NextRecordIdentifier'],
            result_key: 'ResourceRecordSets'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fc4911a7aab5bc62277b3f16743182fe57b4ac1c.js.map