System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'cache.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        properties: {
          beforeRequest: {
            oneOf: [{
              type: 'null'
            }, {
              $ref: 'beforeRequest.json#'
            }]
          },
          afterRequest: {
            oneOf: [{
              type: 'null'
            }, {
              $ref: 'afterRequest.json#'
            }]
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=4f6069906a3146db62e989e354178fa59428f41f.js.map