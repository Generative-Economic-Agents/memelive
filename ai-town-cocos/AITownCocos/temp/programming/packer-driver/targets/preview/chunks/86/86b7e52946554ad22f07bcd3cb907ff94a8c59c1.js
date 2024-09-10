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
//# sourceMappingURL=86b7e52946554ad22f07bcd3cb907ff94a8c59c1.js.map