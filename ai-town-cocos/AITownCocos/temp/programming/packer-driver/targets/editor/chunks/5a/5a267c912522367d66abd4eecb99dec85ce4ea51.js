System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  return {
    setters: [function (_unresolved_) {
      nativeCreate = _unresolved_.default;
    }],
    execute: function () {
      _export("default", hashClear);
    }
  };
});
//# sourceMappingURL=5a267c912522367d66abd4eecb99dec85ce4ea51.js.map