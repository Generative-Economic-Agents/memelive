System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var getTag, isObjectLike, weakMapTag;

  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }

  return {
    setters: [function (_unresolved_) {
      getTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      weakMapTag = '[object WeakMap]';

      _export("default", isWeakMap);
    }
  };
});
//# sourceMappingURL=66d235b047b4d065233eefbd6ab549c36b18fdb5.js.map