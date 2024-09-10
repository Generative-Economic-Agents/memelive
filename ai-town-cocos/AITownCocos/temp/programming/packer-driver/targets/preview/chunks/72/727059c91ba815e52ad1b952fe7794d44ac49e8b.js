System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDICOMImportJobs: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'jobSummaries'
          },
          ListDatastores: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'datastoreSummaries'
          },
          ListImageSetVersions: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'imageSetPropertiesList'
          },
          SearchImageSets: {
            input_token: 'nextToken',
            output_token: 'nextToken',
            limit_key: 'maxResults',
            result_key: 'imageSetsMetadataSummaries'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=727059c91ba815e52ad1b952fe7794d44ac49e8b.js.map