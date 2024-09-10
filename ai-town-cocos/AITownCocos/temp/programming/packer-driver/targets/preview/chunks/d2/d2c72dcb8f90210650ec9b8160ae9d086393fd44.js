System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'afterRequest.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        optional: true,
        required: ['lastAccess', 'eTag', 'hitCount'],
        properties: {
          expires: {
            type: 'string',
            pattern: '^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?'
          },
          lastAccess: {
            type: 'string',
            pattern: '^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?'
          },
          eTag: {
            type: 'string'
          },
          hitCount: {
            type: 'integer'
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=d2c72dcb8f90210650ec9b8160ae9d086393fd44.js.map