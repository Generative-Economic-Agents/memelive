System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayFilter, arrayMap, baseProperty, baseTimes, isArrayLikeObject, nativeMax;

  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @since 1.2.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   *
   * _.unzip(zipped);
   * // => [['a', 'b'], [1, 2], [true, false]]
   */
  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }

    var length = 0;
    array = arrayFilter(array, function (group) {
      if (isArrayLikeObject(group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    return baseTimes(length, function (index) {
      return arrayMap(array, baseProperty(index));
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseProperty = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseTimes = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArrayLikeObject = _unresolved_5.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMax = Math.max;

      _export("default", unzip);
    }
  };
});
//# sourceMappingURL=b0672bb6ec8cd4051c4f628c5e8c5c73a1c59711.js.map