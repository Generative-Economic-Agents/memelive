System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListPermissions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'permissions'
          },
          ListVersions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'grafanaVersions'
          },
          ListWorkspaceServiceAccountTokens: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'serviceAccountTokens'
          },
          ListWorkspaceServiceAccounts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'serviceAccounts'
          },
          ListWorkspaces: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'workspaces'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4f84cb98a12ba22b837a6ec2c8b26127e6c62f1f.js.map