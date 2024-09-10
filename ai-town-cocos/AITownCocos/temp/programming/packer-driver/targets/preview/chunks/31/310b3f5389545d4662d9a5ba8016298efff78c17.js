System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

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
        var memoizedProperty = require('../util').memoizedProperty;

        function memoize(name, value, factory, nameTr) {
          memoizedProperty(this, nameTr(name), function () {
            return factory(name, value);
          });
        }

        function Collection(iterable, options, factory, nameTr, callback) {
          nameTr = nameTr || String;
          var self = this;

          for (var id in iterable) {
            if (Object.prototype.hasOwnProperty.call(iterable, id)) {
              memoize.call(self, id, iterable[id], factory, nameTr);
              if (callback) callback(id, iterable[id]);
            }
          }
        }
        /**
         * @api private
         */


        module.exports = Collection; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        '../util': _req
      }));
    }
  };
});
//# sourceMappingURL=310b3f5389545d4662d9a5ba8016298efff78c17.js.map