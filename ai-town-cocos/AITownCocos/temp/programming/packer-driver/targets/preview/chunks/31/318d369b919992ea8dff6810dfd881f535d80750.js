System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var apply, createCtor, createHybrid, createRecurry, getHolder, replaceHolders, root;

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = getHolder(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }

      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
      length -= holders.length;

      if (length < arity) {
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }

      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return apply(fn, this, args);
    }

    return wrapper;
  }

  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      createCtor = _unresolved_2.default;
    }, function (_unresolved_3) {
      createHybrid = _unresolved_3.default;
    }, function (_unresolved_4) {
      createRecurry = _unresolved_4.default;
    }, function (_unresolved_5) {
      getHolder = _unresolved_5.default;
    }, function (_unresolved_6) {
      replaceHolders = _unresolved_6.default;
    }, function (_unresolved_7) {
      root = _unresolved_7.default;
    }],
    execute: function () {
      _export("default", createCurry);
    }
  };
});
//# sourceMappingURL=318d369b919992ea8dff6810dfd881f535d80750.js.map