System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseRandom, isIterateeCall, toFinite, freeParseFloat, nativeMin, nativeRandom;

  /**
   * Produces a random number between the inclusive `lower` and `upper` bounds.
   * If only one argument is provided a number between `0` and the given number
   * is returned. If `floating` is `true`, or either `lower` or `upper` are
   * floats, a floating-point number is returned instead of an integer.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @memberOf _
   * @since 0.7.0
   * @category Number
   * @param {number} [lower=0] The lower bound.
   * @param {number} [upper=1] The upper bound.
   * @param {boolean} [floating] Specify returning a floating-point number.
   * @returns {number} Returns the random number.
   * @example
   *
   * _.random(0, 5);
   * // => an integer between 0 and 5
   *
   * _.random(5);
   * // => also an integer between 0 and 5
   *
   * _.random(5, true);
   * // => a floating-point number between 0 and 5
   *
   * _.random(1.2, 5.2);
   * // => a floating-point number between 1.2 and 5.2
   */
  function random(lower, upper, floating) {
    if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
      upper = floating = undefined;
    }

    if (floating === undefined) {
      if (typeof upper == 'boolean') {
        floating = upper;
        upper = undefined;
      } else if (typeof lower == 'boolean') {
        floating = lower;
        lower = undefined;
      }
    }

    if (lower === undefined && upper === undefined) {
      lower = 0;
      upper = 1;
    } else {
      lower = toFinite(lower);

      if (upper === undefined) {
        upper = lower;
        lower = 0;
      } else {
        upper = toFinite(upper);
      }
    }

    if (lower > upper) {
      var temp = lower;
      lower = upper;
      upper = temp;
    }

    if (floating || lower % 1 || upper % 1) {
      var rand = nativeRandom();
      return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
    }

    return baseRandom(lower, upper);
  }

  return {
    setters: [function (_unresolved_) {
      baseRandom = _unresolved_.default;
    }, function (_unresolved_2) {
      isIterateeCall = _unresolved_2.default;
    }, function (_unresolved_3) {
      toFinite = _unresolved_3.default;
    }],
    execute: function () {
      /** Built-in method references without a dependency on `root`. */
      freeParseFloat = parseFloat;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeMin = Math.min;
      nativeRandom = Math.random;

      _export("default", random);
    }
  };
});
//# sourceMappingURL=10a2dc9cfba66e2f73b8d3ef5b0d0141eaaab1ee.js.map