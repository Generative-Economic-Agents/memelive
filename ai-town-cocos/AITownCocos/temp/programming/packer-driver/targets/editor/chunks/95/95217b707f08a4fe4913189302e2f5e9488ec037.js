System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
        description: 'Meta-schema for $data reference (JSON Schema extension proposal)',
        type: 'object',
        required: ['$data'],
        properties: {
          $data: {
            type: 'string',
            anyOf: [{
              format: 'relative-json-pointer'
            }, {
              format: 'json-pointer'
            }]
          }
        },
        additionalProperties: false
      });
    }
  };
});
//# sourceMappingURL=95217b707f08a4fe4913189302e2f5e9488ec037.js.map