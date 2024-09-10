System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var toInteger, toLength;

  /**
   * The base implementation of `_.fill` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   */
  function baseFill(array, value, start, end) {
    var length = array.length;
    start = toInteger(start);

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end === undefined || end > length ? length : toInteger(end);

    if (end < 0) {
      end += length;
    }

    end = start > end ? 0 : toLength(end);

    while (start < end) {
      array[start++] = value;
    }

    return array;
  }

  return {
    setters: [function (_unresolved_) {
      toInteger = _unresolved_.default;
    }, function (_unresolved_2) {
      toLength = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseFill);
    }
  };
});
//# sourceMappingURL=c951768bd01c90be506aed49f212588f7bef9057.js.map