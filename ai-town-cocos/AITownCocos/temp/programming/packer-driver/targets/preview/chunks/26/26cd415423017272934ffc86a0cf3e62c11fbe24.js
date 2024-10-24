System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCertificateAuthorities: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'CertificateAuthorities'
          },
          ListPermissions: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Permissions'
          },
          ListTags: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'Tags'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=26cd415423017272934ffc86a0cf3e62c11fbe24.js.map