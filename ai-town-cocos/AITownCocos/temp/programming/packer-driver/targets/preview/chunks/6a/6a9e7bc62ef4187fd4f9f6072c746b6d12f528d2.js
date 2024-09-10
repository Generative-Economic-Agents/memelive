System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeStream: {
            input_token: 'ExclusiveStartShardId',
            limit_key: 'Limit',
            more_results: 'StreamDescription.HasMoreShards',
            output_token: 'StreamDescription.Shards[-1].ShardId',
            result_key: 'StreamDescription.Shards'
          },
          ListStreamConsumers: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListStreams: {
            input_token: 'NextToken',
            limit_key: 'Limit',
            more_results: 'HasMoreStreams',
            output_token: 'NextToken',
            result_key: ['StreamNames', 'StreamSummaries']
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6a9e7bc62ef4187fd4f9f6072c746b6d12f528d2.js.map