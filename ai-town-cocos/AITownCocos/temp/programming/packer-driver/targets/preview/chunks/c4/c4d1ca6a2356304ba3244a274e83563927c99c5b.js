System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  return {
    setters: [function (_unresolved_) {
      cloneArrayBuffer = _unresolved_.default;
    }],
    execute: function () {
      _export("default", cloneDataView);
    }
  };
});
//# sourceMappingURL=c4d1ca6a2356304ba3244a274e83563927c99c5b.js.map