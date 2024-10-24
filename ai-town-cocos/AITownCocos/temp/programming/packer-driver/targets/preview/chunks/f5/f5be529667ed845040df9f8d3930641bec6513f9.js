System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        pagination: {
          ListDiscoverers: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'Limit',
            result_key: 'Discoverers'
          },
          ListRegistries: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'Limit',
            result_key: 'Registries'
          },
          ListSchemaVersions: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'Limit',
            result_key: 'SchemaVersions'
          },
          ListSchemas: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'Limit',
            result_key: 'Schemas'
          },
          SearchSchemas: {
            input_token: 'NextToken',
            output_token: 'NextToken',
            limit_key: 'Limit',
            result_key: 'Schemas'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=f5be529667ed845040df9f8d3930641bec6513f9.js.map