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
//# sourceMappingURL=a8dfcb3733264cecfa02f750833249340513034a.js.map