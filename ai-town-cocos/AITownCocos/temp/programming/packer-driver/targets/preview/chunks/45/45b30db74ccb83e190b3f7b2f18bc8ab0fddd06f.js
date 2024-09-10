System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListGroupMemberships: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'GroupMemberships'
          },
          ListGroupMembershipsForMember: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'GroupMemberships'
          },
          ListGroups: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Groups'
          },
          ListUsers: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Users'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=45b30db74ccb83e190b3f7b2f18bc8ab0fddd06f.js.map