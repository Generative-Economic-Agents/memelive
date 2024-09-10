System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseNth, toInteger;

  /**
   * Gets the element at index `n` of `array`. If `n` is negative, the nth
   * element from the end is returned.
   *
   * @static
   * @memberOf _
   * @since 4.11.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=0] The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   *
   * _.nth(array, 1);
   * // => 'b'
   *
   * _.nth(array, -2);
   * // => 'c';
   */
  function nth(array, n) {
    return array && array.length ? baseNth(array, toInteger(n)) : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseNth = _unresolved_.default;
    }, function (_unresolved_2) {
      toInteger = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", nth);
    }
  };
});
//# sourceMappingURL=1aaab890960b9f736b929c6742fe128488e95429.js.map