System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseInverter;

  /**
   * Creates a function like `_.invertBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} toIteratee The function to resolve iteratees.
   * @returns {Function} Returns the new inverter function.
   */
  function createInverter(setter, toIteratee) {
    return function (object, iteratee) {
      return baseInverter(object, setter, toIteratee(iteratee), {});
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseInverter = _unresolved_.default;
    }],
    execute: function () {
      _export("default", createInverter);
    }
  };
});
//# sourceMappingURL=30b41f679c26c25e0efa08c24923e9819ba4d6ac.js.map