System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var assocIndexOf;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  return {
    setters: [function (_unresolved_) {
      assocIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", listCacheSet);
    }
  };
});
//# sourceMappingURL=7e962ae652a13ef477db816a4cede2d89e81805d.js.map