System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRest, createWrap, getHolder, replaceHolders, WRAP_BIND_FLAG, WRAP_PARTIAL_FLAG, bind;
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
      WRAP_BIND_FLAG = 1;
      WRAP_PARTIAL_FLAG = 32;
      /**
       * Creates a function that invokes `func` with the `this` binding of `thisArg`
       * and `partials` prepended to the arguments it receives.
       *
       * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
       * may be used as a placeholder for partially applied arguments.
       *
       * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
       * property of bound functions.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to bind.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * function greet(greeting, punctuation) {
       *   return greeting + ' ' + this.user + punctuation;
       * }
       *
       * var object = { 'user': 'fred' };
       *
       * var bound = _.bind(greet, object, 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * // Bound with placeholders.
       * var bound = _.bind(greet, object, _, '!');
       * bound('hi');
       * // => 'hi fred!'
       */

      bind = baseRest(function (func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;

        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }

        return createWrap(func, bitmask, thisArg, partials, holders);
      }); // Assign default placeholders.

      bind.placeholder = {};

      _export("default", bind);
    }
  };
});
//# sourceMappingURL=3f23b119c132a11e7c01c36d60a7e6712a9f8e39.js.map