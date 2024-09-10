System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createWrap, flatRest, WRAP_REARG_FLAG, rearg;
  return {
    setters: [function (_unresolved_) {
      createWrap = _unresolved_.default;
    }, function (_unresolved_2) {
      flatRest = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_REARG_FLAG = 256;
      /**
       * Creates a function that invokes `func` with arguments arranged according
       * to the specified `indexes` where the argument value at the first index is
       * provided as the first argument, the argument value at the second index is
       * provided as the second argument, and so on.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {Function} func The function to rearrange arguments for.
       * @param {...(number|number[])} indexes The arranged argument indexes.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var rearged = _.rearg(function(a, b, c) {
       *   return [a, b, c];
       * }, [2, 0, 1]);
       *
       * rearged('b', 'c', 'a')
       * // => ['a', 'b', 'c']
       */

      rearg = flatRest(function (func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
      });

      _export("default", rearg);
    }
  };
});
//# sourceMappingURL=776e61e9a9ee0e4763f92d23b786178efdff75c5.js.map