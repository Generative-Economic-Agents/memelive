System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListAppAuthorizations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'appAuthorizationSummaryList'
          },
          ListAppBundles: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'appBundleSummaryList'
          },
          ListIngestionDestinations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'ingestionDestinations'
          },
          ListIngestions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'ingestions'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bbebba75686bd7d538f95891597a114d497af566.js.map