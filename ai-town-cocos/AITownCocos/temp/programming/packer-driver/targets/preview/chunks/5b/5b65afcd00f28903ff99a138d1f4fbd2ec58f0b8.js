System.register([], function (_export, _context) {
  "use strict";

  var objectProto, hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty.call(object, key);
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", baseHas);
    }
  };
});
//# sourceMappingURL=5b65afcd00f28903ff99a138d1f4fbd2ec58f0b8.js.map