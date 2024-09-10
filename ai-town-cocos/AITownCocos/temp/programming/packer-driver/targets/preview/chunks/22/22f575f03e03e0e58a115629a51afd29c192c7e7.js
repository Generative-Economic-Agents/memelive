System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _getSerialize, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        exports = module.exports = stringify;
        exports.getSerialize = serializer;

        function stringify(obj, replacer, spaces, cycleReplacer) {
          return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
        }

        function serializer(replacer, cycleReplacer) {
          var stack = [],
              keys = [];
          if (cycleReplacer == null) cycleReplacer = function cycleReplacer(key, value) {
            if (stack[0] === value) return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
          };
          return function (key, value) {
            if (stack.length > 0) {
              var thisPos = stack.indexOf(this);
              ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
              ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
              if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value);
            } else stack.push(value);

            return replacer == null ? value : replacer.call(this, key, value);
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        _getSerialize = module.exports.getSerialize;
      }, {});
    }
  };
});
//# sourceMappingURL=22f575f03e03e0e58a115629a51afd29c192c7e7.js.map