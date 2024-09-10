System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListBuckets: {
            result_key: 'Buckets'
          },
          ListDirectoryBuckets: {
            input_token: 'ContinuationToken',
            limit_key: 'MaxDirectoryBuckets',
            output_token: 'ContinuationToken',
            result_key: 'Buckets'
          },
          ListMultipartUploads: {
            input_token: ['KeyMarker', 'UploadIdMarker'],
            limit_key: 'MaxUploads',
            more_results: 'IsTruncated',
            output_token: ['NextKeyMarker', 'NextUploadIdMarker'],
            result_key: ['Uploads', 'CommonPrefixes']
          },
          ListObjectVersions: {
            input_token: ['KeyMarker', 'VersionIdMarker'],
            limit_key: 'MaxKeys',
            more_results: 'IsTruncated',
            output_token: ['NextKeyMarker', 'NextVersionIdMarker'],
            result_key: ['Versions', 'DeleteMarkers', 'CommonPrefixes']
          },
          ListObjects: {
            input_token: 'Marker',
            limit_key: 'MaxKeys',
            more_results: 'IsTruncated',
            output_token: 'NextMarker || Contents[-1].Key',
            result_key: ['Contents', 'CommonPrefixes']
          },
          ListObjectsV2: {
            input_token: 'ContinuationToken',
            limit_key: 'MaxKeys',
            output_token: 'NextContinuationToken',
            result_key: ['Contents', 'CommonPrefixes']
          },
          ListParts: {
            input_token: 'PartNumberMarker',
            limit_key: 'MaxParts',
            more_results: 'IsTruncated',
            output_token: 'NextPartNumberMarker',
            result_key: 'Parts'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=3268f894196a371b942a1f405f2b990d2f1d2c3b.js.map