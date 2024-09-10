System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseSlice, isIterateeCall, toInteger;

  /**
   * Creates a slice of `array` from `start` up to, but not including, `end`.
   *
   * **Note:** This method is used instead of
   * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
   * returned.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function slice(array, start, end) {
    var length = array == null ? 0 : array.length;

    if (!length) {
      return [];
    }

    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
      start = 0;
      end = length;
    } else {
      start = start == null ? 0 : toInteger(start);
      end = end === undefined ? length : toInteger(end);
    }

    return baseSlice(array, start, end);
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }, function (_unresolved_2) {
      isIterateeCall = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", slice);
    }
  };
});
//# sourceMappingURL=2a20d17ce4a741a527661d996c5b2c0c083bb043.js.map