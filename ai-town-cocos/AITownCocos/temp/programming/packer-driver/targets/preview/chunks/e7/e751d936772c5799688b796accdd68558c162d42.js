System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListJobs: {
            input_token: 'marker',
            limit_key: 'limit',
            output_token: 'Marker',
            result_key: 'JobList'
          },
          ListMultipartUploads: {
            input_token: 'marker',
            limit_key: 'limit',
            output_token: 'Marker',
            result_key: 'UploadsList'
          },
          ListParts: {
            input_token: 'marker',
            limit_key: 'limit',
            output_token: 'Marker',
            result_key: 'Parts'
          },
          ListVaults: {
            input_token: 'marker',
            limit_key: 'limit',
            output_token: 'Marker',
            result_key: 'VaultList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e751d936772c5799688b796accdd68558c162d42.js.map