System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeImageTags: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'imageTagDetails'
          },
          DescribeImages: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'imageDetails'
          },
          DescribeRegistries: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'registries'
          },
          DescribeRepositories: {
            input_token: 'nextToken',
            limit_key: 'maxResults',
            output_token: 'nextToken',
            result_key: 'repositories'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d288d9e6c979a2f8e072dc892a01cf55ddad84e1.js.map