System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListConnectors: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'connectors'
          },
          ListCustomPlugins: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'customPlugins'
          },
          ListWorkerConfigurations: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workerConfigurations'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=38a8ae8b4617ed3244cbcd3a5adb2854e64b8185.js.map