System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeActivities: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'UserActivities'
          },
          DescribeComments: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Comments'
          },
          DescribeDocumentVersions: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'DocumentVersions'
          },
          DescribeFolderContents: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: ['Folders', 'Documents']
          },
          DescribeGroups: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Groups'
          },
          DescribeNotificationSubscriptions: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Subscriptions'
          },
          DescribeResourcePermissions: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Principals'
          },
          DescribeRootFolders: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Folders'
          },
          DescribeUsers: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Users'
          },
          SearchResources: {
            input_token: 'Marker',
            limit_key: 'Limit',
            output_token: 'Marker',
            result_key: 'Items'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f573ca97fe32accd67195d856ef97468b99f7e68.js.map