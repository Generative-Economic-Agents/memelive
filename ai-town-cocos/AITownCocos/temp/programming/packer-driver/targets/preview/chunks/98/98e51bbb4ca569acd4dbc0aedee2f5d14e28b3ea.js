System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createBaseFor, baseForRight;
  return {
    setters: [function (_unresolved_) {
      createBaseFor = _unresolved_.default;
    }],
    execute: function () {
      /**
       * This function is like `baseFor` except that it iterates over properties
       * in the opposite order.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */
      baseForRight = createBaseFor(true);

      _export("default", baseForRight);
    }
  };
});
//# sourceMappingURL=98e51bbb4ca569acd4dbc0aedee2f5d14e28b3ea.js.map