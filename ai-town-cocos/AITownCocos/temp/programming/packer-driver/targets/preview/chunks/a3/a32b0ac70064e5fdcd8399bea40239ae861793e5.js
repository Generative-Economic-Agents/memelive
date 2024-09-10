System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayMap, createOver, over;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      createOver = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates a function that invokes `iteratees` with the arguments it receives
       * and returns their results.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {...(Function|Function[])} [iteratees=[_.identity]]
       *  The iteratees to invoke.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var func = _.over([Math.max, Math.min]);
       *
       * func(1, 2, 3, 4);
       * // => [4, 1]
       */
      over = createOver(arrayMap);

      _export("default", over);
    }
  };
});
//# sourceMappingURL=a32b0ac70064e5fdcd8399bea40239ae861793e5.js.map