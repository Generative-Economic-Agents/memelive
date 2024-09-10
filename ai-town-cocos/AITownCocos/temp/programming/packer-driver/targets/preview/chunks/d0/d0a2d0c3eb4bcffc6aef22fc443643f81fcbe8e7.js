System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var identity;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  return {
    setters: [function (_unresolved_) {
      identity = _unresolved_.default;
    }],
    execute: function () {
      _export("default", castFunction);
    }
  };
});
//# sourceMappingURL=d0a2d0c3eb4bcffc6aef22fc443643f81fcbe8e7.js.map