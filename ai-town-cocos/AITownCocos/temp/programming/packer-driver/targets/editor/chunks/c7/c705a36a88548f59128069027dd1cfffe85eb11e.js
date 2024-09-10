System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = applyDecorators;
        var defineProperty = Object.defineProperty,
            getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        function applyDecorators(Class, props) {
          var prototype = Class.prototype;

          for (var key in props) {
            var decorators = props[key];

            for (var i = 0, l = decorators.length; i < l; i++) {
              var decorator = decorators[i];
              defineProperty(prototype, key, decorator(prototype, key, getOwnPropertyDescriptor(prototype, key)));
            }
          }

          return Class;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=c705a36a88548f59128069027dd1cfffe85eb11e.js.map