System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  return {
    setters: [function (_unresolved_) {
      cloneArrayBuffer = _unresolved_.default;
    }],
    execute: function () {
      _export("default", cloneTypedArray);
    }
  };
});
//# sourceMappingURL=8608b8163d72f2315289d86eaa1898e28153e02c.js.map