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
//# sourceMappingURL=18309ef553a5356d04d886ed6dbd5d4a2c20ab64.js.map