System.register([], function (_export, _context) {
  "use strict";

  var objectProto;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;

      _export("default", isPrototype);
    }
  };
});
//# sourceMappingURL=ef199b9dc42320066be9c9a98e2309a177665652.js.map