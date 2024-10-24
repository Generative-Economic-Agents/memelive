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

        module.exports = function generate_not(it, $keyword, $ruleType) {
          var out = ' ';
          var $lvl = it.level;
          var $dataLvl = it.dataLevel;
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $data = 'data' + ($dataLvl || '');
          var $errs = 'errs__' + $lvl;
          var $it = it.util.copy(it);
          $it.level++;
          var $nextValid = 'valid' + $it.level;

          if (it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
            $it.schema = $schema;
            $it.schemaPath = $schemaPath;
            $it.errSchemaPath = $errSchemaPath;
            out += ' var ' + $errs + ' = errors;  ';
            var $wasComposite = it.compositeRule;
            it.compositeRule = $it.compositeRule = true;
            $it.createErrors = false;
            var $allErrorsOption;

            if ($it.opts.allErrors) {
              $allErrorsOption = $it.opts.allErrors;
              $it.opts.allErrors = false;
            }

            out += ' ' + it.validate($it) + ' ';
            $it.createErrors = true;
            if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
            it.compositeRule = $it.compositeRule = $wasComposite;
            out += ' if (' + $nextValid + ') {   ';
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = '';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'not' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should NOT be valid\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            var __err = out;
            out = $$outStack.pop();

            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + __err + ']); ';
              } else {
                out += ' validate.errors = [' + __err + ']; return false; ';
              }
            } else {
              out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }

            out += ' } else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } ';

            if (it.opts.allErrors) {
              out += ' } ';
            }
          } else {
            out += '  var err =   ';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'not' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should NOT be valid\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

            if ($breakOnError) {
              out += ' if (false) { ';
            }
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=8a5e08c77f72d3a47761f4dd8bb7685a3a08a572.js.map