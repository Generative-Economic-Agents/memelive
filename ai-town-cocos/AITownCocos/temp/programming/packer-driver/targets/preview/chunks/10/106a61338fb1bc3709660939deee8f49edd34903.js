System.register([], function (_export, _context) {
  "use strict";

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", identity);
    }
  };
});
//# sourceMappingURL=106a61338fb1bc3709660939deee8f49edd34903.js.map