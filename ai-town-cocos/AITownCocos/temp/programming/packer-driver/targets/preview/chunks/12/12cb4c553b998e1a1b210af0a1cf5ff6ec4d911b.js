System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createWrap, WRAP_CURRY_FLAG;

  /**
   * Creates a function that accepts arguments of `func` and either invokes
   * `func` returning its result, if at least `arity` number of arguments have
   * been provided, or returns a function that accepts the remaining `func`
   * arguments, and so on. The arity of `func` may be specified if `func.length`
   * is not sufficient.
   *
   * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for provided arguments.
   *
   * **Note:** This method doesn't set the "length" property of curried functions.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Function
   * @param {Function} func The function to curry.
   * @param {number} [arity=func.length] The arity of `func`.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the new curried function.
   * @example
   *
   * var abc = function(a, b, c) {
   *   return [a, b, c];
   * };
   *
   * var curried = _.curry(abc);
   *
   * curried(1)(2)(3);
   * // => [1, 2, 3]
   *
   * curried(1, 2)(3);
   * // => [1, 2, 3]
   *
   * curried(1, 2, 3);
   * // => [1, 2, 3]
   *
   * // Curried with placeholders.
   * curried(1)(_, 3)(2);
   * // => [1, 2, 3]
   */
  function curry(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curry.placeholder;
    return result;
  } // Assign default placeholders.


  return {
    setters: [function (_unresolved_) {
      createWrap = _unresolved_.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_CURRY_FLAG = 8;
      curry.placeholder = {};

      _export("default", curry);
    }
  };
});
//# sourceMappingURL=12cb4c553b998e1a1b210af0a1cf5ff6ec4d911b.js.map