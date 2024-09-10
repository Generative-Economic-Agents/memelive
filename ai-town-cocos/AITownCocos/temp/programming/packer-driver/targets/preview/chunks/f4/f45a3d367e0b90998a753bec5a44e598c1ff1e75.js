System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var apply, arrayMap, unzip;

  /**
   * This method is like `_.unzip` except that it accepts `iteratee` to specify
   * how regrouped values should be combined. The iteratee is invoked with the
   * elements of each group: (...group).
   *
   * @static
   * @memberOf _
   * @since 3.8.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @param {Function} [iteratee=_.identity] The function to combine
   *  regrouped values.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
   * // => [[1, 10, 100], [2, 20, 200]]
   *
   * _.unzipWith(zipped, _.add);
   * // => [3, 30, 300]
   */
  function unzipWith(array, iteratee) {
    if (!(array && array.length)) {
      return [];
    }

    var result = unzip(array);

    if (iteratee == null) {
      return result;
    }

    return arrayMap(result, function (group) {
      return apply(iteratee, undefined, group);
    });
  }

  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayMap = _unresolved_2.default;
    }, function (_unresolved_3) {
      unzip = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", unzipWith);
    }
  };
});
//# sourceMappingURL=f45a3d367e0b90998a753bec5a44e598c1ff1e75.js.map