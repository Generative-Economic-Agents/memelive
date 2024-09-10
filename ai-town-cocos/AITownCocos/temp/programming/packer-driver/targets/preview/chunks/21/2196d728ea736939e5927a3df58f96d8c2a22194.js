System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var isLaziable, setData, setWrapToString, WRAP_BIND_FLAG, WRAP_BIND_KEY_FLAG, WRAP_CURRY_BOUND_FLAG, WRAP_CURRY_FLAG, WRAP_PARTIAL_FLAG, WRAP_PARTIAL_RIGHT_FLAG;

  /**
   * Creates a function that wraps `func` to continue currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {Function} wrapFunc The function to create the `func` wrapper.
   * @param {*} placeholder The placeholder value.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG,
        newHolders = isCurry ? holders : undefined,
        newHoldersRight = isCurry ? undefined : holders,
        newPartials = isCurry ? partials : undefined,
        newPartialsRight = isCurry ? undefined : partials;
    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
      bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
    }

    var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
    var result = wrapFunc.apply(undefined, newData);

    if (isLaziable(func)) {
      setData(result, newData);
    }

    result.placeholder = placeholder;
    return setWrapToString(result, func, bitmask);
  }

  return {
    setters: [function (_unresolved_) {
      isLaziable = _unresolved_.default;
    }, function (_unresolved_2) {
      setData = _unresolved_2.default;
    }, function (_unresolved_3) {
      setWrapToString = _unresolved_3.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_BIND_FLAG = 1;
      WRAP_BIND_KEY_FLAG = 2;
      WRAP_CURRY_BOUND_FLAG = 4;
      WRAP_CURRY_FLAG = 8;
      WRAP_PARTIAL_FLAG = 32;
      WRAP_PARTIAL_RIGHT_FLAG = 64;

      _export("default", createRecurry);
    }
  };
});
//# sourceMappingURL=2196d728ea736939e5927a3df58f96d8c2a22194.js.map