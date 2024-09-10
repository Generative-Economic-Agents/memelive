System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseIsEqual;

  /**
   * This method is like `_.isEqual` except that it accepts `customizer` which
   * is invoked to compare values. If `customizer` returns `undefined`, comparisons
   * are handled by the method instead. The `customizer` is invoked with up to
   * six arguments: (objValue, othValue [, index|key, object, other, stack]).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * function isGreeting(value) {
   *   return /^h(?:i|ello)$/.test(value);
   * }
   *
   * function customizer(objValue, othValue) {
   *   if (isGreeting(objValue) && isGreeting(othValue)) {
   *     return true;
   *   }
   * }
   *
   * var array = ['hello', 'goodbye'];
   * var other = ['hi', 'goodbye'];
   *
   * _.isEqualWith(array, other, customizer);
   * // => true
   */
  function isEqualWith(value, other, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    var result = customizer ? customizer(value, other) : undefined;
    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
  }

  return {
    setters: [function (_unresolved_) {
      baseIsEqual = _unresolved_.default;
    }],
    execute: function () {
      _export("default", isEqualWith);
    }
  };
});
//# sourceMappingURL=eef2a21519cf7ced2d6cafa541d6d6ae99814f5d.js.map