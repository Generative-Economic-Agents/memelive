System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGet, baseSet;

  /**
   * The base implementation of `_.update`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to update.
   * @param {Function} updater The function to produce the updated value.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }

  return {
    setters: [function (_unresolved_) {
      baseGet = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSet = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseUpdate);
    }
  };
});
//# sourceMappingURL=c72f497db4f0f3e6e91b7c20e2d6de3ee6fe4c51.js.map