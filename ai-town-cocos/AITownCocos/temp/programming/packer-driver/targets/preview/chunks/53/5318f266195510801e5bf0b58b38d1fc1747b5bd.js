System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isArray, isSymbol, reIsDeepProp, reIsPlainProp;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }

    var type = typeof value;

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  return {
    setters: [function (_unresolved_) {
      isArray = _unresolved_.default;
    }, function (_unresolved_2) {
      isSymbol = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to match property names within property paths. */
      reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      reIsPlainProp = /^\w*$/;

      _export("default", isKey);
    }
  };
});
//# sourceMappingURL=5318f266195510801e5bf0b58b38d1fc1747b5bd.js.map