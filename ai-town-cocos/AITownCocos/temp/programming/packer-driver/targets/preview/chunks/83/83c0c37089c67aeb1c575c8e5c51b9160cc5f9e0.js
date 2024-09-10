System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isArray;

  /**
   * Casts `value` as an array if it's not one.
   *
   * @static
   * @memberOf _
   * @since 4.4.0
   * @category Lang
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast array.
   * @example
   *
   * _.castArray(1);
   * // => [1]
   *
   * _.castArray({ 'a': 1 });
   * // => [{ 'a': 1 }]
   *
   * _.castArray('abc');
   * // => ['abc']
   *
   * _.castArray(null);
   * // => [null]
   *
   * _.castArray(undefined);
   * // => [undefined]
   *
   * _.castArray();
   * // => []
   *
   * var array = [1, 2, 3];
   * console.log(_.castArray(array) === array);
   * // => true
   */
  function castArray() {
    if (!arguments.length) {
      return [];
    }

    var value = arguments[0];
    return isArray(value) ? value : [value];
  }

  return {
    setters: [function (_unresolved_) {
      isArray = _unresolved_.default;
    }],
    execute: function () {
      _export("default", castArray);
    }
  };
});
//# sourceMappingURL=83c0c37089c67aeb1c575c8e5c51b9160cc5f9e0.js.map