System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var assocIndexOf, arrayProto, splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  return {
    setters: [function (_unresolved_) {
      assocIndexOf = _unresolved_.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      arrayProto = Array.prototype;
      /** Built-in value references. */

      splice = arrayProto.splice;

      _export("default", listCacheDelete);
    }
  };
});
//# sourceMappingURL=e6dfadad51aa64d4bee3a600c0aa9a8b5a0d25da.js.map