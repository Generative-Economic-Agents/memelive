System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeMappedResourceConfiguration: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'MappedResourceConfigurationList'
          },
          ListEdgeAgentConfigurations: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'EdgeConfigs'
          },
          ListSignalingChannels: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'ChannelInfoList'
          },
          ListStreams: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'StreamInfoList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3725b2f3ed96932dc959bfce7caec9225de0c89a.js.map