System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createBaseFor, baseFor;
  return {
    setters: [function (_unresolved_) {
      createBaseFor = _unresolved_.default;
    }],
    execute: function () {
      /**
       * The base implementation of `baseForOwn` which iterates over `object`
       * properties returned by `keysFunc` and invokes `iteratee` for each property.
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */
      baseFor = createBaseFor();

      _export("default", baseFor);
    }
  };
});
//# sourceMappingURL=9825b641c91fe00ac7bfd25f1ce623309bf21f57.js.map