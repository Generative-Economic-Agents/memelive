System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListBaselines: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'baselines'
          },
          ListControlOperations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'controlOperations'
          },
          ListEnabledBaselines: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'enabledBaselines'
          },
          ListEnabledControls: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'enabledControls'
          },
          ListLandingZones: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'landingZones'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=6548e70abe72609fe5efe8617decbc33fa869cc9.js.map