System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDevices: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'devices'
          },
          ListEnvironments: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'environments'
          },
          ListSoftwareSets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'softwareSets'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=0b5d50ea7c07fff335145d879e11c10df8fe3bdc.js.map