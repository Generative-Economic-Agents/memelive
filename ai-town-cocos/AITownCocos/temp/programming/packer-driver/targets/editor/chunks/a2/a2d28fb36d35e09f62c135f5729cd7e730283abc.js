System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseCreate, getPrototype, isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  return {
    setters: [function (_unresolved_) {
      baseCreate = _unresolved_.default;
    }, function (_unresolved_2) {
      getPrototype = _unresolved_2.default;
    }, function (_unresolved_3) {
      isPrototype = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", initCloneObject);
    }
  };
});
//# sourceMappingURL=a2d28fb36d35e09f62c135f5729cd7e730283abc.js.map