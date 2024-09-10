System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var apply, arrayMap, baseIteratee, baseRest, baseUnary, flatRest;

  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new over function.
   */
  function createOver(arrayFunc) {
    return flatRest(function (iteratees) {
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      return baseRest(function (args) {
        var thisArg = this;
        return arrayFunc(iteratees, function (iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }

  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseRest = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseUnary = _unresolved_5.default;
    }, function (_unresolved_6) {
      flatRest = _unresolved_6.default;
    }],
    execute: function () {
      _export("default", createOver);
    }
  };
});
//# sourceMappingURL=bf61f38ed6f2e662b66fb28f5803831daa1280c9.js.map