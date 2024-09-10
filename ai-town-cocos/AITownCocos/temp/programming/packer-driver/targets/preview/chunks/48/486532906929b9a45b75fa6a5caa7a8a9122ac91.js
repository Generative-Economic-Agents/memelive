System.register([], function (_export, _context) {
  "use strict";

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }

    return false;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayIncludesWith);
    }
  };
});
//# sourceMappingURL=486532906929b9a45b75fa6a5caa7a8a9122ac91.js.map