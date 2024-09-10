System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var KEYWORDS = ['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum', 'maxLength', 'minLength', 'pattern', 'additionalItems', 'maxItems', 'minItems', 'uniqueItems', 'maxProperties', 'minProperties', 'required', 'additionalProperties', 'enum', 'format', 'const'];

        module.exports = function (metaSchema, keywordsJsonPointers) {
          for (var i = 0; i < keywordsJsonPointers.length; i++) {
            metaSchema = JSON.parse(JSON.stringify(metaSchema));
            var segments = keywordsJsonPointers[i].split('/');
            var keywords = metaSchema;
            var j;

            for (j = 1; j < segments.length; j++) keywords = keywords[segments[j]];

            for (j = 0; j < KEYWORDS.length; j++) {
              var key = KEYWORDS[j];
              var schema = keywords[key];

              if (schema) {
                keywords[key] = {
                  anyOf: [schema, {
                    $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#'
                  }]
                };
              }
            }
          }

          return metaSchema;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=08cd31e43d0d8b6fd24c9a28f30523292db59938.js.map