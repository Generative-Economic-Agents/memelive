System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isSymbol, NAN;

  /**
   * The base implementation of `_.toNumber` which doesn't ensure correct
   * conversions of binary, hexadecimal, or octal string values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   */
  function baseToNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol(value)) {
      return NAN;
    }

    return +value;
  }

  return {
    setters: [function (_unresolved_) {
      isSymbol = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      NAN = 0 / 0;

      _export("default", baseToNumber);
    }
  };
});
//# sourceMappingURL=3eeb7922fea79df9093101453fd05433afc1b215.js.map