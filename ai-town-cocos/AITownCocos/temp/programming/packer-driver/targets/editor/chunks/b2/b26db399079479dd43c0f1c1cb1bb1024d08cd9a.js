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
//# sourceMappingURL=b26db399079479dd43c0f1c1cb1bb1024d08cd9a.js.map