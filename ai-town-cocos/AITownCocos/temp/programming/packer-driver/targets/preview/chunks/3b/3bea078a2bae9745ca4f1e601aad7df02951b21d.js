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

        module.exports = function generate__limitLength(it, $keyword, $ruleType) {
          var out = ' ';
          var $lvl = it.level;
          var $dataLvl = it.dataLevel;
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $errorKeyword;
          var $data = 'data' + ($dataLvl || '');
          var $isData = it.opts.$data && $schema && $schema.$data,
              $schemaValue;

          if ($isData) {
            out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
            $schemaValue = 'schema' + $lvl;
          } else {
            $schemaValue = $schema;
          }

          if (!($isData || typeof $schema == 'number')) {
            throw new Error($keyword + ' must be number');
          }

          var $op = $keyword == 'maxLength' ? '>' : '<';
          out += 'if ( ';

          if ($isData) {
            out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
          }

          if (it.opts.unicode === false) {
            out += ' ' + $data + '.length ';
          } else {
            out += ' ucs2length(' + $data + ') ';
          }

          out += ' ' + $op + ' ' + $schemaValue + ') { ';
          var $errorKeyword = $keyword;
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = '';
          /* istanbul ignore else */

          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schemaValue + ' } ';

            if (it.opts.messages !== false) {
              out += ' , message: \'should NOT be ';

              if ($keyword == 'maxLength') {
                out += 'longer';
              } else {
                out += 'shorter';
              }

              out += ' than ';

              if ($isData) {
                out += '\' + ' + $schemaValue + ' + \'';
              } else {
                out += '' + $schema;
              }

              out += ' characters\' ';
            }

            if (it.opts.verbose) {
              out += ' , schema:  ';

              if ($isData) {
                out += 'validate.schema' + $schemaPath;
              } else {
                out += '' + $schema;
              }

              out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
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

          out += '} ';

          if ($breakOnError) {
            out += ' else { ';
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=3bea078a2bae9745ca4f1e601aad7df02951b21d.js.map