System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var ruleModules = require('../dotjs'),
            toHash = require('./util').toHash;

        module.exports = function rules() {
          var RULES = [{
            type: 'number',
            rules: [{
              'maximum': ['exclusiveMaximum']
            }, {
              'minimum': ['exclusiveMinimum']
            }, 'multipleOf', 'format']
          }, {
            type: 'string',
            rules: ['maxLength', 'minLength', 'pattern', 'format']
          }, {
            type: 'array',
            rules: ['maxItems', 'minItems', 'items', 'contains', 'uniqueItems']
          }, {
            type: 'object',
            rules: ['maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames', {
              'properties': ['additionalProperties', 'patternProperties']
            }]
          }, {
            rules: ['$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if']
          }];
          var ALL = ['type', '$comment'];
          var KEYWORDS = ['$schema', '$id', 'id', '$data', '$async', 'title', 'description', 'default', 'definitions', 'examples', 'readOnly', 'writeOnly', 'contentMediaType', 'contentEncoding', 'additionalItems', 'then', 'else'];
          var TYPES = ['number', 'integer', 'string', 'array', 'object', 'boolean', 'null'];
          RULES.all = toHash(ALL);
          RULES.types = toHash(TYPES);
          RULES.forEach(function (group) {
            group.rules = group.rules.map(function (keyword) {
              var implKeywords;

              if (typeof keyword == 'object') {
                var key = Object.keys(keyword)[0];
                implKeywords = keyword[key];
                keyword = key;
                implKeywords.forEach(function (k) {
                  ALL.push(k);
                  RULES.all[k] = true;
                });
              }

              ALL.push(keyword);
              var rule = RULES.all[keyword] = {
                keyword: keyword,
                code: ruleModules[keyword],
                implements: implKeywords
              };
              return rule;
            });
            RULES.all.$comment = {
              keyword: '$comment',
              code: ruleModules.$comment
            };
            if (group.type) RULES.types[group.type] = group;
          });
          RULES.keywords = toHash(ALL.concat(KEYWORDS));
          RULES.custom = {};
          return RULES;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../dotjs': _req,
        './util': _req0
      }));
    }
  };
});
//# sourceMappingURL=e62ea662fbf52fbfc44ba2fada06d97e38ea053a.js.map