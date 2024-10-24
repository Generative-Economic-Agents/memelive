System.register([], function (_export, _context) {
  "use strict";

  var FUNC_ERROR_TEXT;

  /**
   * The base implementation of `_.delay` and `_.defer` which accepts `args`
   * to provide to `func`.
   *
   * @private
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {Array} args The arguments to provide to `func`.
   * @returns {number|Object} Returns the timer id or timeout object.
   */
  function baseDelay(func, wait, args) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    return setTimeout(function () {
      func.apply(undefined, args);
    }, wait);
  }

  return {
    setters: [],
    execute: function () {
      /** Error message constants. */
      FUNC_ERROR_TEXT = 'Expected a function';

      _export("default", baseDelay);
    }
  };
});
//# sourceMappingURL=f78f61c02a1091a089748d2c033ef4ff110394ea.js.map