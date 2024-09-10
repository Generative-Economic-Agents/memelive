System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayEvery, createOver, overEvery;
  return {
    setters: [function (_unresolved_) {
      arrayEvery = _unresolved_.default;
    }, function (_unresolved_2) {
      createOver = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates a function that checks if **all** of the `predicates` return
       * truthy when invoked with the arguments it receives.
       *
       * Following shorthands are possible for providing predicates.
       * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
       * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {...(Function|Function[])} [predicates=[_.identity]]
       *  The predicates to check.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var func = _.overEvery([Boolean, isFinite]);
       *
       * func('1');
       * // => true
       *
       * func(null);
       * // => false
       *
       * func(NaN);
       * // => false
       */
      overEvery = createOver(arrayEvery);

      _export("default", overEvery);
    }
  };
});
//# sourceMappingURL=f59cf516a2258e739441576fc278ea25b364e8ee.js.map