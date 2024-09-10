System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRest, createWrap, getHolder, replaceHolders, WRAP_PARTIAL_RIGHT_FLAG, partialRight;
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
      WRAP_PARTIAL_RIGHT_FLAG = 64;
      /**
       * This method is like `_.partial` except that partially applied arguments
       * are appended to the arguments it receives.
       *
       * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method doesn't set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
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
       * var greetFred = _.partialRight(greet, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       *
       * // Partially applied with placeholders.
       * var sayHelloTo = _.partialRight(greet, 'hello', _);
       * sayHelloTo('fred');
       * // => 'hello fred'
       */

      partialRight = baseRest(function (func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
      }); // Assign default placeholders.

      partialRight.placeholder = {};

      _export("default", partialRight);
    }
  };
});
//# sourceMappingURL=a0d34f82b28b65f9ba5c37accc82a41b3d0fa83a.js.map