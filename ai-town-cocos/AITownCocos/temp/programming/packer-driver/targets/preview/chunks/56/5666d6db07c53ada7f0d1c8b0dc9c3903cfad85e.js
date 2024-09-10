System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseClone, CLONE_SYMBOLS_FLAG;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_SYMBOLS_FLAG = 4;

      _export("default", clone);
    }
  };
});
//# sourceMappingURL=5666d6db07c53ada7f0d1c8b0dc9c3903cfad85e.js.map