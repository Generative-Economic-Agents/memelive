System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var copyArray, isIndex, nativeMin;

  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = copyArray(array);

    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }

    return array;
  }

  return {
    setters: [function (_unresolved_) {
      copyArray = _unresolved_.default;
    }, function (_unresolved_2) {
      isIndex = _unresolved_2.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeMin = Math.min;

      _export("default", reorder);
    }
  };
});
//# sourceMappingURL=f4d0a8aedd7a51478540429bca303966ecdf760d.js.map