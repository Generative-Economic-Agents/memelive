System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'postData.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        optional: true,
        required: ['mimeType'],
        properties: {
          mimeType: {
            type: 'string'
          },
          text: {
            type: 'string'
          },
          params: {
            type: 'array',
            required: ['name'],
            properties: {
              name: {
                type: 'string'
              },
              value: {
                type: 'string'
              },
              fileName: {
                type: 'string'
              },
              contentType: {
                type: 'string'
              },
              comment: {
                type: 'string'
              }
            }
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=604058bb7d76e160e92f97d4b4632164c2c2ea42.js.map