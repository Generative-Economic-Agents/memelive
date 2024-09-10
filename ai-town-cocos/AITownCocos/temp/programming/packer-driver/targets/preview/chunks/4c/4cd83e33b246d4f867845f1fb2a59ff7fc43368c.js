System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseUnset, isIndex, arrayProto, splice;

  /**
   * The base implementation of `_.pullAt` without support for individual
   * indexes or capturing the removed elements.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {number[]} indexes The indexes of elements to remove.
   * @returns {Array} Returns `array`.
   */
  function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0,
        lastIndex = length - 1;

    while (length--) {
      var index = indexes[length];

      if (length == lastIndex || index !== previous) {
        var previous = index;

        if (isIndex(index)) {
          splice.call(array, index, 1);
        } else {
          baseUnset(array, index);
        }
      }
    }

    return array;
  }

  return {
    setters: [function (_unresolved_) {
      baseUnset = _unresolved_.default;
    }, function (_unresolved_2) {
      isIndex = _unresolved_2.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      arrayProto = Array.prototype;
      /** Built-in value references. */

      splice = arrayProto.splice;

      _export("default", basePullAt);
    }
  };
});
//# sourceMappingURL=4cd83e33b246d4f867845f1fb2a59ff7fc43368c.js.map