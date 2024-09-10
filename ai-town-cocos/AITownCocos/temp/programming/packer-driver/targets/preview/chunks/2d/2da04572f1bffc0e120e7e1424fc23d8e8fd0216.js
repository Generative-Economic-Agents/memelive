System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseClone, baseConforms, CLONE_DEEP_FLAG;

  /**
   * Creates a function that invokes the predicate properties of `source` with
   * the corresponding property values of a given object, returning `true` if
   * all predicates return truthy, else `false`.
   *
   * **Note:** The created function is equivalent to `_.conformsTo` with
   * `source` partially applied.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   * @example
   *
   * var objects = [
   *   { 'a': 2, 'b': 1 },
   *   { 'a': 1, 'b': 2 }
   * ];
   *
   * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
   * // => [{ 'a': 1, 'b': 2 }]
   */
  function conforms(source) {
    return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }, function (_unresolved_2) {
      baseConforms = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;

      _export("default", conforms);
    }
  };
});
//# sourceMappingURL=2da04572f1bffc0e120e7e1424fc23d8e8fd0216.js.map