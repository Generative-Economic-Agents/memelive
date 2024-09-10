System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arraySome, createOver, overSome;
  return {
    setters: [function (_unresolved_) {
      arraySome = _unresolved_.default;
    }, function (_unresolved_2) {
      createOver = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates a function that checks if **any** of the `predicates` return
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
       * var func = _.overSome([Boolean, isFinite]);
       *
       * func('1');
       * // => true
       *
       * func(null);
       * // => true
       *
       * func(NaN);
       * // => false
       *
       * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
       * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
       */
      overSome = createOver(arraySome);

      _export("default", overSome);
    }
  };
});
//# sourceMappingURL=05fa2dda050f33a608d5b0d9939ec8a7933b0359.js.map