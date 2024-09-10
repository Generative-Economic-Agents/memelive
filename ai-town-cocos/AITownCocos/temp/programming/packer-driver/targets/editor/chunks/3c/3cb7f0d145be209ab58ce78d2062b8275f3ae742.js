System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseProperty);
    }
  };
});
//# sourceMappingURL=3cb7f0d145be209ab58ce78d2062b8275f3ae742.js.map