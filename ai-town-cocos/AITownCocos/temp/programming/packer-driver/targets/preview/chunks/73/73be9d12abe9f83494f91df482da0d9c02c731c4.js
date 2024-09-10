System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetComplianceSummary: {
            input_token: 'PaginationToken',
            limit_key: 'MaxResults',
            output_token: 'PaginationToken',
            result_key: 'SummaryList'
          },
          GetResources: {
            input_token: 'PaginationToken',
            limit_key: 'ResourcesPerPage',
            output_token: 'PaginationToken',
            result_key: 'ResourceTagMappingList'
          },
          GetTagKeys: {
            input_token: 'PaginationToken',
            output_token: 'PaginationToken',
            result_key: 'TagKeys'
          },
          GetTagValues: {
            input_token: 'PaginationToken',
            output_token: 'PaginationToken',
            result_key: 'TagValues'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=73be9d12abe9f83494f91df482da0d9c02c731c4.js.map