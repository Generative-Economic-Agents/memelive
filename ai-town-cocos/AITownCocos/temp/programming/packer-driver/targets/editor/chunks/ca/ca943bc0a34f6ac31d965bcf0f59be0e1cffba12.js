System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var arrayMap, baseAt, basePullAt, compareAscending, flatRest, isIndex, pullAt;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseAt = _unresolved_2.default;
    }, function (_unresolved_3) {
      basePullAt = _unresolved_3.default;
    }, function (_unresolved_4) {
      compareAscending = _unresolved_4.default;
    }, function (_unresolved_5) {
      flatRest = _unresolved_5.default;
    }, function (_unresolved_6) {
      isIndex = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * Removes elements from `array` corresponding to `indexes` and returns an
       * array of removed elements.
       *
       * **Note:** Unlike `_.at`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...(number|number[])} [indexes] The indexes of elements to remove.
       * @returns {Array} Returns the new array of removed elements.
       * @example
       *
       * var array = ['a', 'b', 'c', 'd'];
       * var pulled = _.pullAt(array, [1, 3]);
       *
       * console.log(array);
       * // => ['a', 'c']
       *
       * console.log(pulled);
       * // => ['b', 'd']
       */
      pullAt = flatRest(function (array, indexes) {
        var length = array == null ? 0 : array.length,
            result = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function (index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result;
      });

      _export("default", pullAt);
    }
  };
});
//# sourceMappingURL=ca943bc0a34f6ac31d965bcf0f59be0e1cffba12.js.map