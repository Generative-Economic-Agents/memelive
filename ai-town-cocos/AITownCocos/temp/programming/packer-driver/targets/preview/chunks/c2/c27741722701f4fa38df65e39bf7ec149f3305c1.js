System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  return {
    setters: [],
    execute: function () {
      _export("default", safeGet);
    }
  };
});
//# sourceMappingURL=c27741722701f4fa38df65e39bf7ec149f3305c1.js.map