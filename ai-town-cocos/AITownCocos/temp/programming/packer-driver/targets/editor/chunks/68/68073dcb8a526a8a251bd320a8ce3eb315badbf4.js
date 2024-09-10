System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListProfileAssociations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ProfileAssociations'
          },
          ListProfileResourceAssociations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ProfileResourceAssociations'
          },
          ListProfiles: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'ProfileSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=68073dcb8a526a8a251bd320a8ce3eb315badbf4.js.map