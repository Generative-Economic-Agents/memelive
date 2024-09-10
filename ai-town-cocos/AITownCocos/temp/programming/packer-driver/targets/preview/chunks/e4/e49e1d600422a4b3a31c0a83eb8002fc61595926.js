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
//# sourceMappingURL=e49e1d600422a4b3a31c0a83eb8002fc61595926.js.map