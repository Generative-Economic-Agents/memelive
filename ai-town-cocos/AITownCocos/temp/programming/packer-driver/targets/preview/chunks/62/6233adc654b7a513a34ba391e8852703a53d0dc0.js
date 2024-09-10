System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }

      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }

    return number;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseClamp);
    }
  };
});
//# sourceMappingURL=6233adc654b7a513a34ba391e8852703a53d0dc0.js.map