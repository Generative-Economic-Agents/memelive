System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseRest, castRest;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }],
    execute: function () {
      /**
       * A `baseRest` alias which can be replaced with `identity` by module
       * replacement plugins.
       *
       * @private
       * @type {Function}
       * @param {Function} func The function to apply a rest parameter to.
       * @returns {Function} Returns the new function.
       */
      castRest = baseRest;

      _export("default", castRest);
    }
  };
});
//# sourceMappingURL=d038ea98562a134429abc0d5311a66125b9e7846.js.map