System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListApplications: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'applications'
          },
          ListAssociatedAttributeGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'attributeGroups'
          },
          ListAssociatedResources: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'resources'
          },
          ListAttributeGroups: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'attributeGroups'
          },
          ListAttributeGroupsForApplication: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'attributeGroupsDetails'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e493f8adde0c262415f8244a3e2b78e400019045.js.map