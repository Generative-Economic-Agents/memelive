System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseIndexOf;

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  return {
    setters: [function (_unresolved_) {
      baseIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", arrayIncludes);
    }
  };
});
//# sourceMappingURL=0480547829cccb5f62d4c9f3d2a7fd2e31fa9257.js.map