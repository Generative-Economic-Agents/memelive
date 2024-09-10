System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetServerDetails: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'associatedApplications'
          },
          ListAnalyzableServers: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'analyzableServers'
          },
          ListApplicationComponents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'applicationComponentInfos'
          },
          ListCollectors: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'Collectors'
          },
          ListImportFileTask: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'taskInfos'
          },
          ListServers: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'serverInfos'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8e8e5abd375861bb3834d9a3c62684bc02f0a46c.js.map