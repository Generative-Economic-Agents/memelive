System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseCreate, baseLodash, MAX_ARRAY_LENGTH;

  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  } // Ensure `LazyWrapper` is an instance of `baseLodash`.


  return {
    setters: [function (_unresolved_) {
      baseCreate = _unresolved_.default;
    }, function (_unresolved_2) {
      baseLodash = _unresolved_2.default;
    }],
    execute: function () {
      /** Used as references for the maximum length and index of an array. */
      MAX_ARRAY_LENGTH = 4294967295;
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;

      _export("default", LazyWrapper);
    }
  };
});
//# sourceMappingURL=fdf8035aac00889563912af5e23df9279f5cc652.js.map