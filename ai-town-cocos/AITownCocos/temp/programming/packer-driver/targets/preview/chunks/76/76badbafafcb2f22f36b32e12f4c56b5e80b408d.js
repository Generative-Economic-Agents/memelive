System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayPush, baseFlatten, copyArray, isArray;

  /**
   * Creates a new array concatenating `array` with any additional arrays
   * and/or values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  function concat() {
    var length = arguments.length;

    if (!length) {
      return [];
    }

    var args = Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
      args[index - 1] = arguments[index];
    }

    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
  }

  return {
    setters: [function (_unresolved_) {
      arrayPush = _unresolved_.default;
    }, function (_unresolved_2) {
      baseFlatten = _unresolved_2.default;
    }, function (_unresolved_3) {
      copyArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", concat);
    }
  };
});
//# sourceMappingURL=76badbafafcb2f22f36b32e12f4c56b5e80b408d.js.map