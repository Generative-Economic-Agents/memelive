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

        module.exports = function generate_anyOf(it, $keyword, $ruleType) {
          var out = ' ';
          var $lvl = it.level;
          var $dataLvl = it.dataLevel;
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $data = 'data' + ($dataLvl || '');
          var $valid = 'valid' + $lvl;
          var $errs = 'errs__' + $lvl;
          var $it = it.util.copy(it);
          var $closingBraces = '';
          $it.level++;
          var $nextValid = 'valid' + $it.level;
          var $noEmptySchema = $schema.every(function ($sch) {
            return it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all);
          });

          if ($noEmptySchema) {
            var $currentBaseId = $it.baseId;
            out += ' var ' + $errs + ' = errors; var ' + $valid + ' = false;  ';
            var $wasComposite = it.compositeRule;
            it.compositeRule = $it.compositeRule = true;
            var arr1 = $schema;

            if (arr1) {
              var $sch,
                  $i = -1,
                  l1 = arr1.length - 1;

              while ($i < l1) {
                $sch = arr1[$i += 1];
                $it.schema = $sch;
                $it.schemaPath = $schemaPath + '[' + $i + ']';
                $it.errSchemaPath = $errSchemaPath + '/' + $i;
                out += '  ' + it.validate($it) + ' ';
                $it.baseId = $currentBaseId;
                out += ' ' + $valid + ' = ' + $valid + ' || ' + $nextValid + '; if (!' + $valid + ') { ';
                $closingBraces += '}';
              }
            }

            it.compositeRule = $it.compositeRule = $wasComposite;
            out += ' ' + $closingBraces + ' if (!' + $valid + ') {   var err =   ';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'anyOf' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should match some schema in anyOf\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError(vErrors); ';
              } else {
                out += ' validate.errors = vErrors; return false; ';
              }
            }

            out += ' } else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } ';

            if (it.opts.allErrors) {
              out += ' } ';
            }
          } else {
            if ($breakOnError) {
              out += ' if (true) { ';
            }
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=832eded9fb368ab01c539d8e53bc13ff8fb5da35.js.map