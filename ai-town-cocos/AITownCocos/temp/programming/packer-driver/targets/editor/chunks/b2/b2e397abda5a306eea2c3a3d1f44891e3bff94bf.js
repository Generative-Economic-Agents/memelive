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
//# sourceMappingURL=b2e397abda5a306eea2c3a3d1f44891e3bff94bf.js.map