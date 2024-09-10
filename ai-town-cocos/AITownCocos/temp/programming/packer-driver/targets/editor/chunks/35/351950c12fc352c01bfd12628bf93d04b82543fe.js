System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Set, noop, setToArray, INFINITY, createSet;
  return {
    setters: [function (_unresolved_) {
      Set = _unresolved_.default;
    }, function (_unresolved_2) {
      noop = _unresolved_2.default;
    }, function (_unresolved_3) {
      setToArray = _unresolved_3.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      INFINITY = 1 / 0;
      /**
       * Creates a set object of `values`.
       *
       * @private
       * @param {Array} values The values to add to the set.
       * @returns {Object} Returns the new set.
       */

      createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
        return new Set(values);
      };

      _export("default", createSet);
    }
  };
});
//# sourceMappingURL=351950c12fc352c01bfd12628bf93d04b82543fe.js.map