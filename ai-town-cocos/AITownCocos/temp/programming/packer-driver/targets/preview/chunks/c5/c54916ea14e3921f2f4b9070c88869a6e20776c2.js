System.register([], function (_export, _context) {
  "use strict";

  var isArray;
  return {
    setters: [],
    execute: function () {
      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      isArray = Array.isArray;

      _export("default", isArray);
    }
  };
});
//# sourceMappingURL=c54916ea14e3921f2f4b9070c88869a6e20776c2.js.map