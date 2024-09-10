System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'request.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        required: ['method', 'url', 'httpVersion', 'cookies', 'headers', 'queryString', 'headersSize', 'bodySize'],
        properties: {
          method: {
            type: 'string'
          },
          url: {
            type: 'string',
            format: 'uri'
          },
          httpVersion: {
            type: 'string'
          },
          cookies: {
            type: 'array',
            items: {
              $ref: 'cookie.json#'
            }
          },
          headers: {
            type: 'array',
            items: {
              $ref: 'header.json#'
            }
          },
          queryString: {
            type: 'array',
            items: {
              $ref: 'query.json#'
            }
          },
          postData: {
            $ref: 'postData.json#'
          },
          headersSize: {
            type: 'integer'
          },
          bodySize: {
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
//# sourceMappingURL=aee06fd9c448f42f2f7782a5eccb8999fc48ee9a.js.map