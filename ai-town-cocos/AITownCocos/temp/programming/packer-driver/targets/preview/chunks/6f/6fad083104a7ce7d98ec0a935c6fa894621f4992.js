System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var copyObject, keys;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  return {
    setters: [function (_unresolved_) {
      copyObject = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseAssign);
    }
  };
});
//# sourceMappingURL=6fad083104a7ce7d98ec0a935c6fa894621f4992.js.map