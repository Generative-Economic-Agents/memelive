System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var composeArgs, composeArgsRight, countHolders, createCtor, createRecurry, getHolder, reorder, replaceHolders, root, WRAP_BIND_FLAG, WRAP_BIND_KEY_FLAG, WRAP_CURRY_FLAG, WRAP_CURRY_RIGHT_FLAG, WRAP_ARY_FLAG, WRAP_FLIP_FLAG;

  /**
   * Creates a function that wraps `func` to invoke it with optional `this`
   * binding of `thisArg`, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided
   *  to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG,
        isBind = bitmask & WRAP_BIND_FLAG,
        isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
        isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
        isFlip = bitmask & WRAP_FLIP_FLAG,
        Ctor = isBindKey ? undefined : createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length;

      while (index--) {
        args[index] = arguments[index];
      }

      if (isCurried) {
        var placeholder = getHolder(wrapper),
            holdersCount = countHolders(args, placeholder);
      }

      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }

      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }

      length -= holdersCount;

      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
      }

      var thisBinding = isBind ? thisArg : this,
          fn = isBindKey ? thisBinding[func] : func;
      length = args.length;

      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }

      if (isAry && ary < length) {
        args.length = ary;
      }

      if (this && this !== root && this instanceof wrapper) {
        fn = Ctor || createCtor(fn);
      }

      return fn.apply(thisBinding, args);
    }

    return wrapper;
  }

  return {
    setters: [function (_unresolved_) {
      composeArgs = _unresolved_.default;
    }, function (_unresolved_2) {
      composeArgsRight = _unresolved_2.default;
    }, function (_unresolved_3) {
      countHolders = _unresolved_3.default;
    }, function (_unresolved_4) {
      createCtor = _unresolved_4.default;
    }, function (_unresolved_5) {
      createRecurry = _unresolved_5.default;
    }, function (_unresolved_6) {
      getHolder = _unresolved_6.default;
    }, function (_unresolved_7) {
      reorder = _unresolved_7.default;
    }, function (_unresolved_8) {
      replaceHolders = _unresolved_8.default;
    }, function (_unresolved_9) {
      root = _unresolved_9.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_BIND_FLAG = 1;
      WRAP_BIND_KEY_FLAG = 2;
      WRAP_CURRY_FLAG = 8;
      WRAP_CURRY_RIGHT_FLAG = 16;
      WRAP_ARY_FLAG = 128;
      WRAP_FLIP_FLAG = 512;

      _export("default", createHybrid);
    }
  };
});
//# sourceMappingURL=759c39500a302b5b10bfae057538e694d2a4a6ce.js.map