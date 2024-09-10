System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAssets: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Assets'
          },
          ListPackagingConfigurations: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'PackagingConfigurations'
          },
          ListPackagingGroups: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'PackagingGroups'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=c911dfab886586c9c9b3b940cccc9baf734b8eae.js.map