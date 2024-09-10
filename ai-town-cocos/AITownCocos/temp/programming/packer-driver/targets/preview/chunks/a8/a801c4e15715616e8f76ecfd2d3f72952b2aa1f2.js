System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListEndpoints: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Endpoints'
          },
          ListOutpostsWithS3: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Outposts'
          },
          ListSharedEndpoints: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Endpoints'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a801c4e15715616e8f76ecfd2d3f72952b2aa1f2.js.map