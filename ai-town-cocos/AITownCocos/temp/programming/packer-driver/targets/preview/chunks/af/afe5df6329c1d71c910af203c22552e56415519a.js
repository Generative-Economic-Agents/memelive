System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseRandom;

  /**
   * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @param {number} [size=array.length] The size of `array`.
   * @returns {Array} Returns `array`.
   */
  function shuffleSelf(array, size) {
    var index = -1,
        length = array.length,
        lastIndex = length - 1;
    size = size === undefined ? length : size;

    while (++index < size) {
      var rand = baseRandom(index, lastIndex),
          value = array[rand];
      array[rand] = array[index];
      array[index] = value;
    }

    array.length = size;
    return array;
  }

  return {
    setters: [function (_unresolved_) {
      baseRandom = _unresolved_.default;
    }],
    execute: function () {
      _export("default", shuffleSelf);
    }
  };
});
//# sourceMappingURL=afe5df6329c1d71c910af203c22552e56415519a.js.map