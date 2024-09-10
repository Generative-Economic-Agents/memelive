System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListEarthObservationJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'EarthObservationJobSummaries'
          },
          ListRasterDataCollections: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'RasterDataCollectionSummaries'
          },
          ListVectorEnrichmentJobs: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'VectorEnrichmentJobSummaries'
          },
          SearchRasterDataCollection: {
            input_token: 'NextToken',
            output_token: 'NextToken'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e065c352a8bddb921aece860a6b97e86c94b5bc5.js.map