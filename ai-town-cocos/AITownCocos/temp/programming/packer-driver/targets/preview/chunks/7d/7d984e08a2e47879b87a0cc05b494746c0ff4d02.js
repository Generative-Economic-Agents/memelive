System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListJobs: {
            input_token: 'Marker',
            output_token: 'Jobs[-1].JobId',
            more_results: 'IsTruncated',
            limit_key: 'MaxJobs',
            result_key: 'Jobs'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=7d984e08a2e47879b87a0cc05b494746c0ff4d02.js.map