System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var flatten, overRest, setToString;

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }

  return {
    setters: [function (_unresolved_) {
      flatten = _unresolved_.default;
    }, function (_unresolved_2) {
      overRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      setToString = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", flatRest);
    }
  };
});
//# sourceMappingURL=ac837c89ad3b875b637a35b18bf99738309ccea5.js.map