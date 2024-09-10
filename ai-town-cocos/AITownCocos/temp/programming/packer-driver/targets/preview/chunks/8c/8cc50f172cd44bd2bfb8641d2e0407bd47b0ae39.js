System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetCase: {
            input_token: 'nextToken',
            output_token: 'nextToken'
          },
          GetCaseAuditEvents: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListCasesForContact: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListDomains: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListFieldOptions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListFields: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListLayouts: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          ListTemplates: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults'
          },
          SearchCases: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'cases'
          },
          SearchRelatedItems: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'relatedItems'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=8cc50f172cd44bd2bfb8641d2e0407bd47b0ae39.js.map