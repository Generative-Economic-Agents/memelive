System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toString, idCounter;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString(prefix) + id;
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }],
    execute: function () {
      /** Used to generate unique IDs. */
      idCounter = 0;

      _export("default", uniqueId);
    }
  };
});
//# sourceMappingURL=c7621921fa7889767c7ed9b15d641d5d9b3d3de8.js.map