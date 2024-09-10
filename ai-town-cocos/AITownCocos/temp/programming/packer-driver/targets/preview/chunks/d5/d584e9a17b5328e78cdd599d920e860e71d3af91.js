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
//# sourceMappingURL=d584e9a17b5328e78cdd599d920e860e71d3af91.js.map