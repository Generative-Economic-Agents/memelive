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
//# sourceMappingURL=9ab4e79bbd17a08d4820152b0977223f7e33e887.js.map