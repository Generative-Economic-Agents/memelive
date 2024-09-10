System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          GetEffectivePermissionsForPath: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetTableObjects: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          GetWorkUnits: {
            input_token: 'NextToken',
            limit_key: 'PageSize',
            output_token: 'NextToken',
            result_key: 'WorkUnitRanges'
          },
          ListDataCellsFilter: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'DataCellsFilters'
          },
          ListLFTags: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'LFTags'
          },
          ListLakeFormationOptIns: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListPermissions: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListResources: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListTableStorageOptimizers: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          ListTransactions: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken'
          },
          SearchDatabasesByLFTags: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'DatabaseList'
          },
          SearchTablesByLFTags: {
            input_token: 'NextToken',
            limit_key: 'MaxResults',
            output_token: 'NextToken',
            result_key: 'TableList'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=2f85dd4089ebc1b806a0e4292b357f2dc72dcfc0.js.map