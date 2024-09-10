System.register([], function (_export, _context) {
  "use strict";

  var arrayProto, nativeReverse;

  /**
   * Reverses `array` so that the first element becomes the last, the second
   * element becomes the second to last, and so on.
   *
   * **Note:** This method mutates `array` and is based on
   * [`Array#reverse`](https://mdn.io/Array/reverse).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _.reverse(array);
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function reverse(array) {
    return array == null ? array : nativeReverse.call(array);
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      arrayProto = Array.prototype;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeReverse = arrayProto.reverse;

      _export("default", reverse);
    }
  };
});
//# sourceMappingURL=b86dafeb781f745d5651f032990f94b4b66c7868.js.map