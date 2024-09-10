System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListCustomVerificationEmailTemplates: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListIdentities: {
            input_token: 'NextToken',
            limit_key: 'MaxItems',
            output_token: 'NextToken',
            result_key: 'Identities'
          },
          ListVerifiedEmailAddresses: {
            result_key: 'VerifiedEmailAddresses'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9f902ae38f03ced7b73e3772811717996081c3d1.js.map