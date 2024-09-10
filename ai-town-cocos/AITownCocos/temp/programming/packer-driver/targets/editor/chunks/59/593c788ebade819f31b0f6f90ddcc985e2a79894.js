System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseInRange, toFinite, toNumber;

  /**
   * Checks if `n` is between `start` and up to, but not including, `end`. If
   * `end` is not specified, it's set to `start` with `start` then set to `0`.
   * If `start` is greater than `end` the params are swapped to support
   * negative ranges.
   *
   * @static
   * @memberOf _
   * @since 3.3.0
   * @category Number
   * @param {number} number The number to check.
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   * @see _.range, _.rangeRight
   * @example
   *
   * _.inRange(3, 2, 4);
   * // => true
   *
   * _.inRange(4, 8);
   * // => true
   *
   * _.inRange(4, 2);
   * // => false
   *
   * _.inRange(2, 2);
   * // => false
   *
   * _.inRange(1.2, 2);
   * // => true
   *
   * _.inRange(5.2, 4);
   * // => false
   *
   * _.inRange(-3, -2, -6);
   * // => true
   */
  function inRange(number, start, end) {
    start = toFinite(start);

    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }

    number = toNumber(number);
    return baseInRange(number, start, end);
  }

  return {
    setters: [function (_unresolved_) {
      baseInRange = _unresolved_.default;
    }, function (_unresolved_2) {
      toFinite = _unresolved_2.default;
    }, function (_unresolved_3) {
      toNumber = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", inRange);
    }
  };
});
//# sourceMappingURL=593c788ebade819f31b0f6f90ddcc985e2a79894.js.map