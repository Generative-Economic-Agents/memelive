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

        module.exports = function generate_items(it, $keyword, $ruleType) {
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
          var $idx = 'i' + $lvl,
              $dataNxt = $it.dataLevel = it.dataLevel + 1,
              $nextData = 'data' + $dataNxt,
              $currentBaseId = it.baseId;
          out += 'var ' + $errs + ' = errors;var ' + $valid + ';';

          if (Array.isArray($schema)) {
            var $additionalItems = it.schema.additionalItems;

            if ($additionalItems === false) {
              out += ' ' + $valid + ' = ' + $data + '.length <= ' + $schema.length + '; ';
              var $currErrSchemaPath = $errSchemaPath;
              $errSchemaPath = it.errSchemaPath + '/additionalItems';
              out += '  if (!' + $valid + ') {   ';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = '';
              /* istanbul ignore else */

              if (it.createErrors !== false) {
                out += ' { keyword: \'' + 'additionalItems' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schema.length + ' } ';

                if (it.opts.messages !== false) {
                  out += ' , message: \'should NOT have more than ' + $schema.length + ' items\' ';
                }

                if (it.opts.verbose) {
                  out += ' , schema: false , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
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

              out += ' } ';
              $errSchemaPath = $currErrSchemaPath;

              if ($breakOnError) {
                $closingBraces += '}';
                out += ' else { ';
              }
            }

            var arr1 = $schema;

            if (arr1) {
              var $sch,
                  $i = -1,
                  l1 = arr1.length - 1;

              while ($i < l1) {
                $sch = arr1[$i += 1];

                if (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
                  out += ' ' + $nextValid + ' = true; if (' + $data + '.length > ' + $i + ') { ';
                  var $passData = $data + '[' + $i + ']';
                  $it.schema = $sch;
                  $it.schemaPath = $schemaPath + '[' + $i + ']';
                  $it.errSchemaPath = $errSchemaPath + '/' + $i;
                  $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
                  $it.dataPathArr[$dataNxt] = $i;
                  var $code = it.validate($it);
                  $it.baseId = $currentBaseId;

                  if (it.util.varOccurences($code, $nextData) < 2) {
                    out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
                  } else {
                    out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
                  }

                  out += ' }  ';

                  if ($breakOnError) {
                    out += ' if (' + $nextValid + ') { ';
                    $closingBraces += '}';
                  }
                }
              }
            }

            if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0 || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
              $it.schema = $additionalItems;
              $it.schemaPath = it.schemaPath + '.additionalItems';
              $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
              out += ' ' + $nextValid + ' = true; if (' + $data + '.length > ' + $schema.length + ') {  for (var ' + $idx + ' = ' + $schema.length + '; ' + $idx + ' < ' + $data + '.length; ' + $idx + '++) { ';
              $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
              var $passData = $data + '[' + $idx + ']';
              $it.dataPathArr[$dataNxt] = $idx;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;

              if (it.util.varOccurences($code, $nextData) < 2) {
                out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
              } else {
                out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
              }

              if ($breakOnError) {
                out += ' if (!' + $nextValid + ') break; ';
              }

              out += ' } }  ';

              if ($breakOnError) {
                out += ' if (' + $nextValid + ') { ';
                $closingBraces += '}';
              }
            }
          } else if (it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
            $it.schema = $schema;
            $it.schemaPath = $schemaPath;
            $it.errSchemaPath = $errSchemaPath;
            out += '  for (var ' + $idx + ' = ' + 0 + '; ' + $idx + ' < ' + $data + '.length; ' + $idx + '++) { ';
            $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
            var $passData = $data + '[' + $idx + ']';
            $it.dataPathArr[$dataNxt] = $idx;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;

            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
            } else {
              out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
            }

            if ($breakOnError) {
              out += ' if (!' + $nextValid + ') break; ';
            }

            out += ' }';
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
//# sourceMappingURL=a843b5998da33d65a338ef966f6d9c215848aa7d.js.map