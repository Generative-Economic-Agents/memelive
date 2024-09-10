System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var eq, objectProto, hasOwnProperty;

  /**
   * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
   * of source objects to the destination object for all destination properties
   * that resolve to `undefined`.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to assign.
   * @param {Object} object The parent object of `objValue`.
   * @returns {*} Returns the value to assign.
   */
  function customDefaultsAssignIn(objValue, srcValue, key, object) {
    if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
      return srcValue;
    }

    return objValue;
  }

  return {
    setters: [function (_unresolved_) {
      eq = _unresolved_.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", customDefaultsAssignIn);
    }
  };
});
//# sourceMappingURL=0416c61238e6ad73ab983e3cd03f22b5c5fd3e73.js.map