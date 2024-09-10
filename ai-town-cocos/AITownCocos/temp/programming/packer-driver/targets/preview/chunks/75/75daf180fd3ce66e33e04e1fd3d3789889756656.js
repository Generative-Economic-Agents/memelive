System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  return {
    setters: [function (_unresolved_) {
      ListCache = _unresolved_.default;
    }],
    execute: function () {
      _export("default", stackClear);
    }
  };
});
//# sourceMappingURL=75daf180fd3ce66e33e04e1fd3d3789889756656.js.map