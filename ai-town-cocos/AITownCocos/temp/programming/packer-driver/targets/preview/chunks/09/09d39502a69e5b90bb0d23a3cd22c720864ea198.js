System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", getHolder);
    }
  };
});
//# sourceMappingURL=09d39502a69e5b90bb0d23a3cd22c720864ea198.js.map