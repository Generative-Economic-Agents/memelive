System.register([], function (_export, _context) {
  "use strict";

  var funcProto, funcToString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  return {
    setters: [],
    execute: function () {
      /** Used for built-in method references. */
      funcProto = Function.prototype;
      /** Used to resolve the decompiled source of functions. */

      funcToString = funcProto.toString;

      _export("default", toSource);
    }
  };
});
//# sourceMappingURL=d71bb312fb47d2b8e453a3c678b012bf593b5921.js.map