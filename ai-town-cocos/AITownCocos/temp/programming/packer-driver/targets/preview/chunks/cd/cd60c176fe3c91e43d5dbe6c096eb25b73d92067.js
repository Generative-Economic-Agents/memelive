System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var LazyWrapper, LodashWrapper, copyArray;

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }

    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      LodashWrapper = _unresolved_2.default;
    }, function (_unresolved_3) {
      copyArray = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", wrapperClone);
    }
  };
});
//# sourceMappingURL=cd60c176fe3c91e43d5dbe6c096eb25b73d92067.js.map