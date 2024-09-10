System.register([], function (_export, _context) {
  "use strict";

  /**
   * This method returns a new empty object.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Object} Returns the new empty object.
   * @example
   *
   * var objects = _.times(2, _.stubObject);
   *
   * console.log(objects);
   * // => [{}, {}]
   *
   * console.log(objects[0] === objects[1]);
   * // => false
   */
  function stubObject() {
    return {};
  }

  return {
    setters: [],
    execute: function () {
      _export("default", stubObject);
    }
  };
});
//# sourceMappingURL=425fa5466327f06910df4c6d7e794e35faafe272.js.map