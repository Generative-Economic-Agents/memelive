System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRest, createWrap, getHolder, replaceHolders, WRAP_PARTIAL_FLAG, partial;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      createWrap = _unresolved_2.default;
    }, function (_unresolved_3) {
      getHolder = _unresolved_3.default;
    }, function (_unresolved_4) {
      replaceHolders = _unresolved_4.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_PARTIAL_FLAG = 32;
      /**
       * Creates a function that invokes `func` with `partials` prepended to the
       * arguments it receives. This method is like `_.bind` except it does **not**
       * alter the `this` binding.
       *
       * The `_.partial.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method doesn't set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @since 0.2.0
       * @category Function
       * @param {Function} func The function to partially apply arguments to.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new partially applied function.
       * @example
       *
       * function greet(greeting, name) {
       *   return greeting + ' ' + name;
       * }
       *
       * var sayHelloTo = _.partial(greet, 'hello');
       * sayHelloTo('fred');
       * // => 'hello fred'
       *
       * // Partially applied with placeholders.
       * var greetFred = _.partial(greet, _, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       */

      partial = baseRest(function (func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
      }); // Assign default placeholders.

      partial.placeholder = {};

      _export("default", partial);
    }
  };
});
//# sourceMappingURL=470472dbf38a7b35560ff5b0720830ab6394d61a.js.map