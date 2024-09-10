System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRound, round;
  return {
    setters: [function (_unresolved_) {
      createRound = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Computes `number` rounded to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round.
       * @param {number} [precision=0] The precision to round to.
       * @returns {number} Returns the rounded number.
       * @example
       *
       * _.round(4.006);
       * // => 4
       *
       * _.round(4.006, 2);
       * // => 4.01
       *
       * _.round(4060, -2);
       * // => 4100
       */
      round = createRound('round');

      _export("default", round);
    }
  };
});
//# sourceMappingURL=0f13d642bc9c2e94a58c69bd385e4a8b0ad56371.js.map