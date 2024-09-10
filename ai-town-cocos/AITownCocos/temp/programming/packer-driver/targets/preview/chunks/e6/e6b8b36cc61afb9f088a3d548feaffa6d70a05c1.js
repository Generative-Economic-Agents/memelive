System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeObjects: {
            input_token: 'marker',
            more_results: 'hasMoreResults',
            output_token: 'marker',
            result_key: 'pipelineObjects'
          },
          DescribePipelines: {
            result_key: 'pipelineDescriptionList'
          },
          ListPipelines: {
            input_token: 'marker',
            more_results: 'hasMoreResults',
            output_token: 'marker',
            result_key: 'pipelineIdList'
          },
          QueryObjects: {
            input_token: 'marker',
            limit_key: 'limit',
            more_results: 'hasMoreResults',
            output_token: 'marker',
            result_key: 'ids'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=e6b8b36cc61afb9f088a3d548feaffa6d70a05c1.js.map