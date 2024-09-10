System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseGet;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function (object) {
      return baseGet(object, path);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseGet = _unresolved_.default;
    }],
    execute: function () {
      _export("default", basePropertyDeep);
    }
  };
});
//# sourceMappingURL=478e1f79165c03826b5f06c029406c5416d87910.js.map