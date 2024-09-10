System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeAccessPoints: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'AccessPoints'
          },
          DescribeFileSystems: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            limit_key: 'MaxItems',
            result_key: 'FileSystems'
          },
          DescribeMountTargets: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            limit_key: 'MaxItems',
            result_key: 'MountTargets'
          },
          DescribeReplicationConfigurations: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Replications'
          },
          DescribeTags: {
            input_token: 'Marker',
            output_token: 'NextMarker',
            limit_key: 'MaxItems',
            result_key: 'Tags'
          },
          ListTagsForResource: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=fbb79bbb645c7e9a4ac32bddfd1d92be2458ffe8.js.map