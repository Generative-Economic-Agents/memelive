System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseRange, isIterateeCall, toFinite;

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange(fromRight) {
    return function (start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      } // Ensure the sign of `-0` is preserved.


      start = toFinite(start);

      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }

      step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseRange = _unresolved_.default;
    }, function (_unresolved_2) {
      isIterateeCall = _unresolved_2.default;
    }, function (_unresolved_3) {
      toFinite = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", createRange);
    }
  };
});
//# sourceMappingURL=dae9457fa2635b242dea135688804d0d1bcf2d3b.js.map