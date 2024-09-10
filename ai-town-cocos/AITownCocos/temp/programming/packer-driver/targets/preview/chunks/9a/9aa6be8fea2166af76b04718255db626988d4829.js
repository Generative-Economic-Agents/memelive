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
//# sourceMappingURL=9aa6be8fea2166af76b04718255db626988d4829.js.map