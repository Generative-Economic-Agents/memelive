System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListClusterSnapshots: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'snapshots'
          },
          ListClusters: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'clusters'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3dda899efba5c4b309c00252d58f181e4e80be3e.js.map