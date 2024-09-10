System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'timings.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        required: ['send', 'wait', 'receive'],
        properties: {
          dns: {
            type: 'number',
            min: -1
          },
          connect: {
            type: 'number',
            min: -1
          },
          blocked: {
            type: 'number',
            min: -1
          },
          send: {
            type: 'number',
            min: -1
          },
          wait: {
            type: 'number',
            min: -1
          },
          receive: {
            type: 'number',
            min: -1
          },
          ssl: {
            type: 'number',
            min: -1
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=9c352373b2fa34c5c690d9f427758e7ed52ae942.js.map