System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRound, floor;
  return {
    setters: [function (_unresolved_) {
      createRound = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Computes `number` rounded down to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round down.
       * @param {number} [precision=0] The precision to round down to.
       * @returns {number} Returns the rounded down number.
       * @example
       *
       * _.floor(4.006);
       * // => 4
       *
       * _.floor(0.046, 2);
       * // => 0.04
       *
       * _.floor(4060, -2);
       * // => 4000
       */
      floor = createRound('floor');

      _export("default", floor);
    }
  };
});
//# sourceMappingURL=534d9107a6dd929692dbcc30d1f34268774129aa.js.map