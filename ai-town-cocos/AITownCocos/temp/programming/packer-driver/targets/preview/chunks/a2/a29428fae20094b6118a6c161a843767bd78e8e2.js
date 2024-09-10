System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListJobsByPipeline: {
            input_token: 'PageToken',
            output_token: 'NextPageToken',
            result_key: 'Jobs'
          },
          ListJobsByStatus: {
            input_token: 'PageToken',
            output_token: 'NextPageToken',
            result_key: 'Jobs'
          },
          ListPipelines: {
            input_token: 'PageToken',
            output_token: 'NextPageToken',
            result_key: 'Pipelines'
          },
          ListPresets: {
            input_token: 'PageToken',
            output_token: 'NextPageToken',
            result_key: 'Presets'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a29428fae20094b6118a6c161a843767bd78e8e2.js.map