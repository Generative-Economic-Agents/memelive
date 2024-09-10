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
//# sourceMappingURL=366d1d567c693fe6306d486300363e0724ecd730.js.map