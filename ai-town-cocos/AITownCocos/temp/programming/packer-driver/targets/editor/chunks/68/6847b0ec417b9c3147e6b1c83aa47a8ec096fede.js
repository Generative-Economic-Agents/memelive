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
//# sourceMappingURL=6847b0ec417b9c3147e6b1c83aa47a8ec096fede.js.map