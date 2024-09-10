System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isArrayLikeObject;

  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array|Object} Returns the cast array-like object.
   */
  function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }

  return {
    setters: [function (_unresolved_) {
      isArrayLikeObject = _unresolved_.default;
    }],
    execute: function () {
      _export("default", castArrayLikeObject);
    }
  };
});
//# sourceMappingURL=8812ca00addcf4a6c86ab30c41d32bb06aa17e0c.js.map