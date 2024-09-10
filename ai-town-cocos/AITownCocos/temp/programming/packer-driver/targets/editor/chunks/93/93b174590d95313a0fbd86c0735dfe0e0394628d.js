System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  return {
    setters: [function (_unresolved_) {
      isKeyable = _unresolved_.default;
    }],
    execute: function () {
      _export("default", getMapData);
    }
  };
});
//# sourceMappingURL=93b174590d95313a0fbd86c0735dfe0e0394628d.js.map