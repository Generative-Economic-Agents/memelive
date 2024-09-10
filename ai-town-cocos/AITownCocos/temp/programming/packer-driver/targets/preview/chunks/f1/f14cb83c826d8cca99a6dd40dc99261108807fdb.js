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

        module.exports = function generate_propertyNames(it, $keyword, $ruleType) {
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
          var $closingBraces = '';
          $it.level++;
          var $nextValid = 'valid' + $it.level;
          out += 'var ' + $errs + ' = errors;';

          if (it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
            $it.schema = $schema;
            $it.schemaPath = $schemaPath;
            $it.errSchemaPath = $errSchemaPath;
            var $key = 'key' + $lvl,
                $idx = 'idx' + $lvl,
                $i = 'i' + $lvl,
                $invalidName = '\' + ' + $key + ' + \'',
                $dataNxt = $it.dataLevel = it.dataLevel + 1,
                $nextData = 'data' + $dataNxt,
                $dataProperties = 'dataProperties' + $lvl,
                $ownProperties = it.opts.ownProperties,
                $currentBaseId = it.baseId;

            if ($ownProperties) {
              out += ' var ' + $dataProperties + ' = undefined; ';
            }

            if ($ownProperties) {
              out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
            } else {
              out += ' for (var ' + $key + ' in ' + $data + ') { ';
            }

            out += ' var startErrs' + $lvl + ' = errors; ';
            var $passData = $key;
            var $wasComposite = it.compositeRule;
            it.compositeRule = $it.compositeRule = true;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;

            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
            } else {
              out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
            }

            it.compositeRule = $it.compositeRule = $wasComposite;
            out += ' if (!' + $nextValid + ') { for (var ' + $i + '=startErrs' + $lvl + '; ' + $i + '<errors; ' + $i + '++) { vErrors[' + $i + '].propertyName = ' + $key + '; }   var err =   ';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'propertyNames' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { propertyName: \'' + $invalidName + '\' } ';

              if (it.opts.messages !== false) {
                out += ' , message: \'property name \\\'' + $invalidName + '\\\' is invalid\' ';
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

            if ($breakOnError) {
              out += ' break; ';
            }

            out += ' } }';
          }

          if ($breakOnError) {
            out += ' ' + $closingBraces + ' if (' + $errs + ' == errors) {';
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=f14cb83c826d8cca99a6dd40dc99261108807fdb.js.map