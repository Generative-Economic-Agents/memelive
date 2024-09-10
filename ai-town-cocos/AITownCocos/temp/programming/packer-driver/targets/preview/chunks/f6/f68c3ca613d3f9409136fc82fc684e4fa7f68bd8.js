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

        module.exports = function generate_allOf(it, $keyword, $ruleType) {
          var out = ' ';
          var $schema = it.schema[$keyword];
          var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $it = it.util.copy(it);
          var $closingBraces = '';
          $it.level++;
          var $nextValid = 'valid' + $it.level;
          var $currentBaseId = $it.baseId,
              $allSchemasEmpty = true;
          var arr1 = $schema;

          if (arr1) {
            var $sch,
                $i = -1,
                l1 = arr1.length - 1;

            while ($i < l1) {
              $sch = arr1[$i += 1];

              if (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
                $allSchemasEmpty = false;
                $it.schema = $sch;
                $it.schemaPath = $schemaPath + '[' + $i + ']';
                $it.errSchemaPath = $errSchemaPath + '/' + $i;
                out += '  ' + it.validate($it) + ' ';
                $it.baseId = $currentBaseId;

                if ($breakOnError) {
                  out += ' if (' + $nextValid + ') { ';
                  $closingBraces += '}';
                }
              }
            }
          }

          if ($breakOnError) {
            if ($allSchemasEmpty) {
              out += ' if (true) { ';
            } else {
              out += ' ' + $closingBraces.slice(0, -1) + ' ';
            }
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=f68c3ca613d3f9409136fc82fc684e4fa7f68bd8.js.map