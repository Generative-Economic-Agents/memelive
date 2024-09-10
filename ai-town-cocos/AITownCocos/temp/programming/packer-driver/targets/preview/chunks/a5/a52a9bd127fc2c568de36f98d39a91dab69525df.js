System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          DescribeServices: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'Services'
          },
          GetAttributeValues: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'AttributeValues'
          },
          GetProducts: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'PriceList'
          },
          ListPriceLists: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'MaxResults',
            result_key: 'PriceLists'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=a52a9bd127fc2c568de36f98d39a91dab69525df.js.map