System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListChannels: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Channels'
          },
          ListOriginEndpoints: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'OriginEndpoints'
          },
          ListHarvestJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'HarvestJobs'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f8f4d6b88e680c86866fc888b4104475ed1a89ed.js.map