System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseGetTag, isObjectLike, arrayBufferTag;

  /**
   * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   */
  function baseIsArrayBuffer(value) {
    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      isObjectLike = _unresolved_2.default;
    }],
    execute: function () {
      arrayBufferTag = '[object ArrayBuffer]';

      _export("default", baseIsArrayBuffer);
    }
  };
});
//# sourceMappingURL=32e09b3fc6294ab672ebf199a06035dada3a7886.js.map