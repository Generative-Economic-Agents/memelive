System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createCtor, root, WRAP_BIND_FLAG;

  /**
   * Creates a function that wraps `func` to invoke it with the optional `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG,
        Ctor = createCtor(func);

    function wrapper() {
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }

    return wrapper;
  }

  return {
    setters: [function (_unresolved_) {
      createCtor = _unresolved_.default;
    }, function (_unresolved_2) {
      root = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_BIND_FLAG = 1;

      _export("default", createBind);
    }
  };
});
//# sourceMappingURL=fa8af33bb605cace5971b7ebb7c83b2b7d6a6edc.js.map