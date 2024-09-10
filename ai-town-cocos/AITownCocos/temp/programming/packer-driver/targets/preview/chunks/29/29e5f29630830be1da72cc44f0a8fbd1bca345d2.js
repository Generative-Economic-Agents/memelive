System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, _add, _get, _remove, _validate, __cjsMetaURL;

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

        var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;

        var customRuleCode = require('./dotjs/custom');

        var definitionSchema = require('./definition_schema');

        module.exports = {
          add: addKeyword,
          get: getKeyword,
          remove: removeKeyword,
          validate: validateKeyword
        };
        /**
         * Define custom keyword
         * @this  Ajv
         * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
         * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
         * @return {Ajv} this for method chaining
         */

        function addKeyword(keyword, definition) {
          /* jshint validthis: true */

          /* eslint no-shadow: 0 */
          var RULES = this.RULES;
          if (RULES.keywords[keyword]) throw new Error('Keyword ' + keyword + ' is already defined');
          if (!IDENTIFIER.test(keyword)) throw new Error('Keyword ' + keyword + ' is not a valid identifier');

          if (definition) {
            this.validateKeyword(definition, true);
            var dataType = definition.type;

            if (Array.isArray(dataType)) {
              for (var i = 0; i < dataType.length; i++) _addRule(keyword, dataType[i], definition);
            } else {
              _addRule(keyword, dataType, definition);
            }

            var metaSchema = definition.metaSchema;

            if (metaSchema) {
              if (definition.$data && this._opts.$data) {
                metaSchema = {
                  anyOf: [metaSchema, {
                    '$ref': 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#'
                  }]
                };
              }

              definition.validateSchema = this.compile(metaSchema, true);
            }
          }

          RULES.keywords[keyword] = RULES.all[keyword] = true;

          function _addRule(keyword, dataType, definition) {
            var ruleGroup;

            for (var i = 0; i < RULES.length; i++) {
              var rg = RULES[i];

              if (rg.type == dataType) {
                ruleGroup = rg;
                break;
              }
            }

            if (!ruleGroup) {
              ruleGroup = {
                type: dataType,
                rules: []
              };
              RULES.push(ruleGroup);
            }

            var rule = {
              keyword: keyword,
              definition: definition,
              custom: true,
              code: customRuleCode,
              implements: definition.implements
            };
            ruleGroup.rules.push(rule);
            RULES.custom[keyword] = rule;
          }

          return this;
        }
        /**
         * Get keyword
         * @this  Ajv
         * @param {String} keyword pre-defined or custom keyword.
         * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
         */


        function getKeyword(keyword) {
          /* jshint validthis: true */
          var rule = this.RULES.custom[keyword];
          return rule ? rule.definition : this.RULES.keywords[keyword] || false;
        }
        /**
         * Remove keyword
         * @this  Ajv
         * @param {String} keyword pre-defined or custom keyword.
         * @return {Ajv} this for method chaining
         */


        function removeKeyword(keyword) {
          /* jshint validthis: true */
          var RULES = this.RULES;
          delete RULES.keywords[keyword];
          delete RULES.all[keyword];
          delete RULES.custom[keyword];

          for (var i = 0; i < RULES.length; i++) {
            var rules = RULES[i].rules;

            for (var j = 0; j < rules.length; j++) {
              if (rules[j].keyword == keyword) {
                rules.splice(j, 1);
                break;
              }
            }
          }

          return this;
        }
        /**
         * Validate keyword definition
         * @this  Ajv
         * @param {Object} definition keyword definition object.
         * @param {Boolean} throwError true to throw exception if definition is invalid
         * @return {boolean} validation result
         */


        function validateKeyword(definition, throwError) {
          validateKeyword.errors = null;
          var v = this._validateKeyword = this._validateKeyword || this.compile(definitionSchema, true);
          if (v(definition)) return true;
          validateKeyword.errors = v.errors;
          if (throwError) throw new Error('custom keyword definition is invalid: ' + this.errorsText(v.errors));else return false;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _add = module.exports.add;
        _get = module.exports.get;
        _remove = module.exports.remove;
        _validate = module.exports.validate;
      }, () => ({
        './dotjs/custom': _req,
        './definition_schema': _req0
      }));
    }
  };
});
//# sourceMappingURL=29e5f29630830be1da72cc44f0a8fbd1bca345d2.js.map