System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var getTag, isObjectLike, mapTag;

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }

  return {
    setters: [function (_unresolved_) {
      getTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';

      _export("default", baseIsMap);
    }
  };
});
//# sourceMappingURL=f22c1c9d6b918416b3379b9bb44e5d6d8427651a.js.map