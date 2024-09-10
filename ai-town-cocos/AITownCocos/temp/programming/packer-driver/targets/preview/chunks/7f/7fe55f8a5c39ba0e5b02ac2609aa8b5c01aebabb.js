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

        var test = {
          __proto__: null,
          foo: {}
        };
        var $Object = Object;
        /** @type {import('.')} */

        module.exports = function hasProto() {
          // @ts-expect-error: TS errors on an inherited property for some reason
          return {
            __proto__: test
          }.foo === test.foo && !(test instanceof $Object);
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=7fe55f8a5c39ba0e5b02ac2609aa8b5c01aebabb.js.map