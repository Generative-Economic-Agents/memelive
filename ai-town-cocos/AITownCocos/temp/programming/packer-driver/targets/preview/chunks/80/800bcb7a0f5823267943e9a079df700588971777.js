System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseLodash, wrapperClone;

  /**
   * Creates a clone of the chain sequence planting `value` as the wrapped value.
   *
   * @name plant
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @param {*} value The value to plant.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2]).map(square);
   * var other = wrapped.plant([3, 4]);
   *
   * other.value();
   * // => [9, 16]
   *
   * wrapped.value();
   * // => [1, 4]
   */
  function wrapperPlant(value) {
    var result,
        parent = this;

    while (parent instanceof baseLodash) {
      var clone = wrapperClone(parent);
      clone.__index__ = 0;
      clone.__values__ = undefined;

      if (result) {
        previous.__wrapped__ = clone;
      } else {
        result = clone;
      }

      var previous = clone;
      parent = parent.__wrapped__;
    }

    previous.__wrapped__ = value;
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseLodash = _unresolved_.default;
    }, function (_unresolved_2) {
      wrapperClone = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", wrapperPlant);
    }
  };
});
//# sourceMappingURL=800bcb7a0f5823267943e9a079df700588971777.js.map