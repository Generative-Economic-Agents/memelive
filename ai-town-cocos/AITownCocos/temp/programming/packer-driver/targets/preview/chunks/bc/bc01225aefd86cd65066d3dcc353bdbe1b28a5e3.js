System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSetData, shortOut, setData;
  return {
    setters: [function (_unresolved_) {
      baseSetData = _unresolved_.default;
    }, function (_unresolved_2) {
      shortOut = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Sets metadata for `func`.
       *
       * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
       * period of time, it will trip its breaker and transition to an identity
       * function to avoid garbage collection pauses in V8. See
       * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
       * for more details.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */
      setData = shortOut(baseSetData);

      _export("default", setData);
    }
  };
});
//# sourceMappingURL=bc01225aefd86cd65066d3dcc353bdbe1b28a5e3.js.map