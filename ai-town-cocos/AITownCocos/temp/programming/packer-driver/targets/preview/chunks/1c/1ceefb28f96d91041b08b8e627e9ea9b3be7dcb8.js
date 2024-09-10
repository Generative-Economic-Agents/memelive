System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseClone, CLONE_DEEP_FLAG, CLONE_SYMBOLS_FLAG;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  return {
    setters: [function (_unresolved_) {
      baseClone = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;
      CLONE_SYMBOLS_FLAG = 4;

      _export("default", cloneDeep);
    }
  };
});
//# sourceMappingURL=1ceefb28f96d91041b08b8e627e9ea9b3be7dcb8.js.map