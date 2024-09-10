System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var arraySample, baseSample, isArray;

  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */
  function sample(collection) {
    var func = isArray(collection) ? arraySample : baseSample;
    return func(collection);
  }

  return {
    setters: [function (_unresolved_) {
      arraySample = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSample = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", sample);
    }
  };
});
//# sourceMappingURL=65046e395fb691b2c607d7f310f8796d0d8ade92.js.map