System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var metaSchema = require('./refs/json-schema-draft-07.json');

        module.exports = {
          $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
          definitions: {
            simpleTypes: metaSchema.definitions.simpleTypes
          },
          type: 'object',
          dependencies: {
            schema: ['validate'],
            $data: ['validate'],
            statements: ['inline'],
            valid: {
              not: {
                required: ['macro']
              }
            }
          },
          properties: {
            type: metaSchema.properties.type,
            schema: {
              type: 'boolean'
            },
            statements: {
              type: 'boolean'
            },
            dependencies: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            metaSchema: {
              type: 'object'
            },
            modifying: {
              type: 'boolean'
            },
            valid: {
              type: 'boolean'
            },
            $data: {
              type: 'boolean'
            },
            async: {
              type: 'boolean'
            },
            errors: {
              anyOf: [{
                type: 'boolean'
              }, {
                const: 'full'
              }]
            }
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './refs/json-schema-draft-07.json': _req
      }));
    }
  };
});
//# sourceMappingURL=0eb3feb46cd7543380300bf45f04d8da60c3fec3.js.map