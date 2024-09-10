System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListChannels: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListDatasetContents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListDatasets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListDatastores: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListPipelines: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7f15595d5633c0cc9c4a89fbd44b0954f8474851.js.map