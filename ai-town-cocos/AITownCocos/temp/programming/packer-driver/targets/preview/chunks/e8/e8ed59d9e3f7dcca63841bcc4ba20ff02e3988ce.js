System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var baseSetData, createBind, createCurry, createHybrid, createPartial, getData, mergeData, setData, setWrapToString, toInteger, FUNC_ERROR_TEXT, WRAP_BIND_FLAG, WRAP_BIND_KEY_FLAG, WRAP_CURRY_FLAG, WRAP_CURRY_RIGHT_FLAG, WRAP_PARTIAL_FLAG, WRAP_PARTIAL_RIGHT_FLAG, nativeMax;

  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags.
   *    1 - `_.bind`
   *    2 - `_.bindKey`
   *    4 - `_.curry` or `_.curryRight` of a bound function
   *    8 - `_.curry`
   *   16 - `_.curryRight`
   *   32 - `_.partial`
   *   64 - `_.partialRight`
   *  128 - `_.rearg`
   *  256 - `_.ary`
   *  512 - `_.flip`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;

    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var length = partials ? partials.length : 0;

    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
      partials = holders = undefined;
    }

    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;

    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials,
          holdersRight = holders;
      partials = holders = undefined;
    }

    var data = isBindKey ? undefined : getData(func);
    var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

    if (data) {
      mergeData(newData, data);
    }

    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
      bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    }

    if (!bitmask || bitmask == WRAP_BIND_FLAG) {
      var result = createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
      result = createCurry(func, bitmask, arity);
    } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
      result = createPartial(func, bitmask, thisArg, partials);
    } else {
      result = createHybrid.apply(undefined, newData);
    }

    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
  }

  return {
    setters: [function (_unresolved_) {
      baseSetData = _unresolved_.default;
    }, function (_unresolved_2) {
      createBind = _unresolved_2.default;
    }, function (_unresolved_3) {
      createCurry = _unresolved_3.default;
    }, function (_unresolved_4) {
      createHybrid = _unresolved_4.default;
    }, function (_unresolved_5) {
      createPartial = _unresolved_5.default;
    }, function (_unresolved_6) {
      getData = _unresolved_6.default;
    }, function (_unresolved_7) {
      mergeData = _unresolved_7.default;
    }, function (_unresolved_8) {
      setData = _unresolved_8.default;
    }, function (_unresolved_9) {
      setWrapToString = _unresolved_9.default;
    }, function (_unresolved_10) {
      toInteger = _unresolved_10.default;
    }],
    execute: function () {
      /** Error message constants. */
      FUNC_ERROR_TEXT = 'Expected a function';
      /** Used to compose bitmasks for function metadata. */

      WRAP_BIND_FLAG = 1;
      WRAP_BIND_KEY_FLAG = 2;
      WRAP_CURRY_FLAG = 8;
      WRAP_CURRY_RIGHT_FLAG = 16;
      WRAP_PARTIAL_FLAG = 32;
      WRAP_PARTIAL_RIGHT_FLAG = 64;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeMax = Math.max;

      _export("default", createWrap);
    }
  };
});
//# sourceMappingURL=e8ed59d9e3f7dcca63841bcc4ba20ff02e3988ce.js.map