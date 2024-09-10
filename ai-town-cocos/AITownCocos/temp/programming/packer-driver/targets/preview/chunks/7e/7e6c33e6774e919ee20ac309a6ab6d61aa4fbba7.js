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

        module.exports = function generate_comment(it, $keyword, $ruleType) {
          var out = ' ';
          var $schema = it.schema[$keyword];
          var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
          var $breakOnError = !it.opts.allErrors;
          var $comment = it.util.toQuotedString($schema);

          if (it.opts.$comment === true) {
            out += ' console.log(' + $comment + ');';
          } else if (typeof it.opts.$comment == 'function') {
            out += ' self._opts.$comment(' + $comment + ', ' + it.util.toQuotedString($errSchemaPath) + ', validate.root.schema);';
          }

          return out;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=7e6c33e6774e919ee20ac309a6ab6d61aa4fbba7.js.map