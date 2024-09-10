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
        "use strict"; // global key for user preferred registration

        var REGISTRATION_KEY = '@@any-promise/REGISTRATION',
            // Prior registration (preferred or detected)
        registered = null;
        /**
         * Registers the given implementation.  An implementation must
         * be registered prior to any call to `require("any-promise")`,
         * typically on application load.
         *
         * If called with no arguments, will return registration in
         * following priority:
         *
         * For Node.js:
         *
         * 1. Previous registration
         * 2. global.Promise if node.js version >= 0.12
         * 3. Auto detected promise based on first sucessful require of
         *    known promise libraries. Note this is a last resort, as the
         *    loaded library is non-deterministic. node.js >= 0.12 will
         *    always use global.Promise over this priority list.
         * 4. Throws error.
         *
         * For Browser:
         *
         * 1. Previous registration
         * 2. window.Promise
         * 3. Throws error.
         *
         * Options:
         *
         * Promise: Desired Promise constructor
         * global: Boolean - Should the registration be cached in a global variable to
         * allow cross dependency/bundle registration?  (default true)
         */

        module.exports = function (root, loadImplementation) {
          return function register(implementation, opts) {
            implementation = implementation || null;
            opts = opts || {}; // global registration unless explicitly  {global: false} in options (default true)

            var registerGlobal = opts.global !== false; // load any previous global registration

            if (registered === null && registerGlobal) {
              registered = root[REGISTRATION_KEY] || null;
            }

            if (registered !== null && implementation !== null && registered.implementation !== implementation) {
              // Throw error if attempting to redefine implementation
              throw new Error('any-promise already defined as "' + registered.implementation + '".  You can only register an implementation before the first ' + ' call to require("any-promise") and an implementation cannot be changed');
            }

            if (registered === null) {
              // use provided implementation
              if (implementation !== null && typeof opts.Promise !== 'undefined') {
                registered = {
                  Promise: opts.Promise,
                  implementation: implementation
                };
              } else {
                // require implementation if implementation is specified but not provided
                registered = loadImplementation(implementation);
              }

              if (registerGlobal) {
                // register preference globally in case multiple installations
                root[REGISTRATION_KEY] = registered;
              }
            }

            return registered;
          };
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=27026c54b399cdf849d86908e4e4e8b95fa13dc0.js.map