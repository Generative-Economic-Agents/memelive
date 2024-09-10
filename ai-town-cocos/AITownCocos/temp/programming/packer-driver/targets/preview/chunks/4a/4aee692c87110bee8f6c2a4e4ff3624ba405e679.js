System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'log.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        required: ['version', 'creator', 'entries'],
        properties: {
          version: {
            type: 'string'
          },
          creator: {
            $ref: 'creator.json#'
          },
          browser: {
            $ref: 'browser.json#'
          },
          pages: {
            type: 'array',
            items: {
              $ref: 'page.json#'
            }
          },
          entries: {
            type: 'array',
            items: {
              $ref: 'entry.json#'
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
//# sourceMappingURL=4aee692c87110bee8f6c2a4e4ff3624ba405e679.js.map