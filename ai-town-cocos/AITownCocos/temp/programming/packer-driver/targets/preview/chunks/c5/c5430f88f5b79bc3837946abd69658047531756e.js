System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var LazyWrapper, arrayPush, arrayReduce;

  /**
   * The base implementation of `wrapperValue` which returns the result of
   * performing a sequence of actions on the unwrapped `value`, where each
   * successive action is supplied the return value of the previous.
   *
   * @private
   * @param {*} value The unwrapped value.
   * @param {Array} actions Actions to perform to resolve the unwrapped value.
   * @returns {*} Returns the resolved value.
   */
  function baseWrapperValue(value, actions) {
    var result = value;

    if (result instanceof LazyWrapper) {
      result = result.value();
    }

    return arrayReduce(actions, function (result, action) {
      return action.func.apply(action.thisArg, arrayPush([result], action.args));
    }, result);
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayPush = _unresolved_2.default;
    }, function (_unresolved_3) {
      arrayReduce = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseWrapperValue);
    }
  };
});
//# sourceMappingURL=c5430f88f5b79bc3837946abd69658047531756e.js.map