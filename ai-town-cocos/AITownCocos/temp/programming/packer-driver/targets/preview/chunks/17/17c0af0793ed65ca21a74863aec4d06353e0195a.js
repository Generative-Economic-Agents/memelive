System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        $id: 'page.json#',
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        optional: true,
        required: ['startedDateTime', 'id', 'title', 'pageTimings'],
        properties: {
          startedDateTime: {
            type: 'string',
            format: 'date-time',
            pattern: '^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))'
          },
          id: {
            type: 'string',
            unique: true
          },
          title: {
            type: 'string'
          },
          pageTimings: {
            $ref: 'pageTimings.json#'
          },
          comment: {
            type: 'string'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=17c0af0793ed65ca21a74863aec4d06353e0195a.js.map