System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var realNames, objectProto, hasOwnProperty;

  /**
   * Gets the name of `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {string} Returns the function name.
   */
  function getFuncName(func) {
    var result = func.name + '',
        array = realNames[result],
        length = hasOwnProperty.call(realNames, result) ? array.length : 0;

    while (length--) {
      var data = array[length],
          otherFunc = data.func;

      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      realNames = _unresolved_.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", getFuncName);
    }
  };
});
//# sourceMappingURL=df699588c89934ccd614e1f10c666208c8657bda.js.map