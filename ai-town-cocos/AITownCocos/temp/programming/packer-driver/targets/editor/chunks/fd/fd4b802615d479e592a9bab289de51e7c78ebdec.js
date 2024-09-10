System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, _Validation, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        var resolve = require('./resolve');

        module.exports = {
          Validation: errorSubclass(ValidationError),
          MissingRef: errorSubclass(MissingRefError)
        };

        function ValidationError(errors) {
          this.message = 'validation failed';
          this.errors = errors;
          this.ajv = this.validation = true;
        }

        MissingRefError.message = function (baseId, ref) {
          return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
        };

        function MissingRefError(baseId, ref, message) {
          this.message = message || MissingRefError.message(baseId, ref);
          this.missingRef = resolve.url(baseId, ref);
          this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
        }

        function errorSubclass(Subclass) {
          Subclass.prototype = Object.create(Error.prototype);
          Subclass.prototype.constructor = Subclass;
          return Subclass;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _Validation = module.exports.Validation;
      }, () => ({
        './resolve': _req
      }));
    }
  };
});
//# sourceMappingURL=fd4b802615d479e592a9bab289de51e7c78ebdec.js.map