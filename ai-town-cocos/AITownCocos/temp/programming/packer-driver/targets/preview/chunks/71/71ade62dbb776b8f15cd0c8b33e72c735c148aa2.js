System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'content.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        required: ['size', 'mimeType'],
        properties: {
          size: {
            type: 'integer'
          },
          compression: {
            type: 'integer'
          },
          mimeType: {
            type: 'string'
          },
          text: {
            type: 'string'
          },
          encoding: {
            type: 'string'
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=71ade62dbb776b8f15cd0c8b33e72c735c148aa2.js.map