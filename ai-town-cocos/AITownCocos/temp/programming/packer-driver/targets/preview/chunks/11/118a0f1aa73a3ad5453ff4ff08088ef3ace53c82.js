System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseMean, identity;

  /**
   * Computes the mean of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   * @example
   *
   * _.mean([4, 2, 8, 6]);
   * // => 5
   */
  function mean(array) {
    return baseMean(array, identity);
  }

  return {
    setters: [function (_unresolved_) {
      baseMean = _unresolved_.default;
    }, function (_unresolved_2) {
      identity = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", mean);
    }
  };
});
//# sourceMappingURL=118a0f1aa73a3ad5453ff4ff08088ef3ace53c82.js.map