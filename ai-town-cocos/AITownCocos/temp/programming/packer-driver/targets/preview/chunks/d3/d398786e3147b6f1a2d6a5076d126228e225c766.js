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
//# sourceMappingURL=d398786e3147b6f1a2d6a5076d126228e225c766.js.map