System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var LazyWrapper, copyArray;

  /**
   * Creates a clone of the lazy wrapper object.
   *
   * @private
   * @name clone
   * @memberOf LazyWrapper
   * @returns {Object} Returns the cloned `LazyWrapper` object.
   */
  function lazyClone() {
    var result = new LazyWrapper(this.__wrapped__);
    result.__actions__ = copyArray(this.__actions__);
    result.__dir__ = this.__dir__;
    result.__filtered__ = this.__filtered__;
    result.__iteratees__ = copyArray(this.__iteratees__);
    result.__takeCount__ = this.__takeCount__;
    result.__views__ = copyArray(this.__views__);
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      copyArray = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", lazyClone);
    }
  };
});
//# sourceMappingURL=865e188fc1de4609c3d634f52519ce85771797d9.js.map