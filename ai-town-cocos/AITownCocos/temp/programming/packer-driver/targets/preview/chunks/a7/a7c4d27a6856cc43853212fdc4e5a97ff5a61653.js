System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var basePullAll;

  /**
   * This method is like `_.pull` except that it accepts an array of values to remove.
   *
   * **Note:** Unlike `_.difference`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pullAll(array, ['a', 'c']);
   * console.log(array);
   * // => ['b', 'b']
   */
  function pullAll(array, values) {
    return array && array.length && values && values.length ? basePullAll(array, values) : array;
  }

  return {
    setters: [function (_unresolved_) {
      basePullAll = _unresolved_.default;
    }],
    execute: function () {
      _export("default", pullAll);
    }
  };
});
//# sourceMappingURL=a7c4d27a6856cc43853212fdc4e5a97ff5a61653.js.map