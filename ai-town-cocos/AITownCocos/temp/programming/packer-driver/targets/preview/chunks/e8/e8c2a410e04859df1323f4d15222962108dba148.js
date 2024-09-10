System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'entry.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        optional: true,
        required: ['startedDateTime', 'time', 'request', 'response', 'cache', 'timings'],
        properties: {
          pageref: {
            type: 'string'
          },
          startedDateTime: {
            type: 'string',
            format: 'date-time',
            pattern: '^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))'
          },
          time: {
            type: 'number',
            min: 0
          },
          request: {
            $ref: 'request.json#'
          },
          response: {
            $ref: 'response.json#'
          },
          cache: {
            $ref: 'cache.json#'
          },
          timings: {
            $ref: 'timings.json#'
          },
          serverIPAddress: {
            type: 'string',
            oneOf: [{
              format: 'ipv4'
            }, {
              format: 'ipv6'
            }]
          },
          connection: {
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
//# sourceMappingURL=e8c2a410e04859df1323f4d15222962108dba148.js.map