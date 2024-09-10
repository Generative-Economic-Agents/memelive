System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'cookie.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        required: ['name', 'value'],
        properties: {
          name: {
            type: 'string'
          },
          value: {
            type: 'string'
          },
          path: {
            type: 'string'
          },
          domain: {
            type: 'string'
          },
          expires: {
            type: ['string', 'null'],
            format: 'date-time'
          },
          httpOnly: {
            type: 'boolean'
          },
          secure: {
            type: 'boolean'
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9c35772070b4ebbef325b73a816619581b7b48b8.js.map