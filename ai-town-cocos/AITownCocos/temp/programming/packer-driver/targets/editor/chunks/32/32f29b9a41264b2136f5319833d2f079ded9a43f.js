System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseFunctions, keys;

  /**
   * Creates an array of function property names from own enumerable properties
   * of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functionsIn
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functions(new Foo);
   * // => ['a', 'b']
   */
  function functions(object) {
    return object == null ? [] : baseFunctions(object, keys(object));
  }

  return {
    setters: [function (_unresolved_) {
      baseFunctions = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", functions);
    }
  };
});
//# sourceMappingURL=32f29b9a41264b2136f5319833d2f079ded9a43f.js.map