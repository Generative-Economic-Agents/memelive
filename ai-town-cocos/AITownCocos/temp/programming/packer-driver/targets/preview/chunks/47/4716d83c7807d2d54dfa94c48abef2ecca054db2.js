System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRound, ceil;
  return {
    setters: [function (_unresolved_) {
      createRound = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Computes `number` rounded up to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round up.
       * @param {number} [precision=0] The precision to round up to.
       * @returns {number} Returns the rounded up number.
       * @example
       *
       * _.ceil(4.006);
       * // => 5
       *
       * _.ceil(6.004, 2);
       * // => 6.01
       *
       * _.ceil(6040, -2);
       * // => 6100
       */
      ceil = createRound('ceil');

      _export("default", ceil);
    }
  };
});
//# sourceMappingURL=4716d83c7807d2d54dfa94c48abef2ecca054db2.js.map