System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseValues, keysIn;

  /**
   * Creates an array of the own and inherited enumerable string keyed property
   * values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.valuesIn(new Foo);
   * // => [1, 2, 3] (iteration order is not guaranteed)
   */
  function valuesIn(object) {
    return object == null ? [] : baseValues(object, keysIn(object));
  }

  return {
    setters: [function (_unresolved_) {
      baseValues = _unresolved_.default;
    }, function (_unresolved_2) {
      keysIn = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", valuesIn);
    }
  };
});
//# sourceMappingURL=7370781b3d8c00dcd3b736eeed9e34ea1036efb2.js.map