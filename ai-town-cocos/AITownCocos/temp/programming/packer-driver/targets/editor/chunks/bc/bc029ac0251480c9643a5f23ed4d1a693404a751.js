System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListConnectors: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Connectors'
          },
          ListDirectoryRegistrations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'DirectoryRegistrations'
          },
          ListServicePrincipalNames: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ServicePrincipalNames'
          },
          ListTemplateGroupAccessControlEntries: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'AccessControlEntries'
          },
          ListTemplates: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Templates'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=bc029ac0251480c9643a5f23ed4d1a693404a751.js.map