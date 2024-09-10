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
//# sourceMappingURL=b3c5dcac3819b6c4a7ea7704b21aa003fe414174.js.map