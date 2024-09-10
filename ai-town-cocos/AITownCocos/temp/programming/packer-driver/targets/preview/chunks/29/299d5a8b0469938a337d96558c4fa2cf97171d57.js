System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var nativeCreate, HASH_UNDEFINED;

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  return {
    setters: [function (_unresolved_) {
      nativeCreate = _unresolved_.default;
    }],
    execute: function () {
      /** Used to stand-in for `undefined` hash values. */
      HASH_UNDEFINED = '__lodash_hash_undefined__';

      _export("default", hashSet);
    }
  };
});
//# sourceMappingURL=299d5a8b0469938a337d96558c4fa2cf97171d57.js.map