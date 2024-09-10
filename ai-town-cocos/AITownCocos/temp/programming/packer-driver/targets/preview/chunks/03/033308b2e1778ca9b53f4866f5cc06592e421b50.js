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
//# sourceMappingURL=033308b2e1778ca9b53f4866f5cc06592e421b50.js.map