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
//# sourceMappingURL=a9827b3118e1fcd8140edb470119bedec7f3cf9f.js.map