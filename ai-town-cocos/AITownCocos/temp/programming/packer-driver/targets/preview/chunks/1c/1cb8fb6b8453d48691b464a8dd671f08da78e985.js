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
//# sourceMappingURL=1cb8fb6b8453d48691b464a8dd671f08da78e985.js.map