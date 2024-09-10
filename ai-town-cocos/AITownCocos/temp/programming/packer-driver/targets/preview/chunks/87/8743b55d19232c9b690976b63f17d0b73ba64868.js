System.register([], function (_export, _context) {
  "use strict";

  var reFlags;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  return {
    setters: [],
    execute: function () {
      /** Used to match `RegExp` flags from their coerced string values. */
      reFlags = /\w*$/;

      _export("default", cloneRegExp);
    }
  };
});
//# sourceMappingURL=8743b55d19232c9b690976b63f17d0b73ba64868.js.map