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

        module.exports = function generate_const(it, $keyword, $ruleType) {
          var out = ' ';
          var $lvl = it.level;
          var $dataLvl = it.dataLevel;
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $data = 'data' + ($dataLvl || '');
          var $valid = 'valid' + $lvl;
          var $isData = it.opts.$data && $schema && $schema.$data,
              $schemaValue;

          if ($isData) {
            out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
            $schemaValue = 'schema' + $lvl;
          } else {
            $schemaValue = $schema;
          }

          if (!$isData) {
            out += ' var schema' + $lvl + ' = validate.schema' + $schemaPath + ';';
          }

          out += 'var ' + $valid + ' = equal(' + $data + ', schema' + $lvl + '); if (!' + $valid + ') {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = '';
          /* istanbul ignore else */

          if (it.createErrors !== false) {
            out += ' { keyword: \'' + 'const' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { allowedValue: schema' + $lvl + ' } ';

            if (it.opts.messages !== false) {
              out += ' , message: \'should be equal to constant\' ';
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

          out += ' }';

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
//# sourceMappingURL=0111627bb12e68644de620bf2bf5bdecd56cb35b.js.map