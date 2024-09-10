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
//# sourceMappingURL=d37f30bd5f5d51377fa57d569e46867515633760.js.map