System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var identity, overRest, setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  return {
    setters: [function (_unresolved_) {
      identity = _unresolved_.default;
    }, function (_unresolved_2) {
      overRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      setToString = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseRest);
    }
  };
});
//# sourceMappingURL=43a908ca68580f1c2a2e03be23164cfd350f9d2c.js.map