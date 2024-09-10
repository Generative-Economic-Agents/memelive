System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var LazyWrapper, LodashWrapper, reverse, thru;

  /**
   * This method is the wrapper version of `_.reverse`.
   *
   * **Note:** This method mutates the wrapped array.
   *
   * @name reverse
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _(array).reverse().value()
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */
  function wrapperReverse() {
    var value = this.__wrapped__;

    if (value instanceof LazyWrapper) {
      var wrapped = value;

      if (this.__actions__.length) {
        wrapped = new LazyWrapper(this);
      }

      wrapped = wrapped.reverse();

      wrapped.__actions__.push({
        'func': thru,
        'args': [reverse],
        'thisArg': undefined
      });

      return new LodashWrapper(wrapped, this.__chain__);
    }

    return this.thru(reverse);
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      LodashWrapper = _unresolved_2.default;
    }, function (_unresolved_3) {
      reverse = _unresolved_3.default;
    }, function (_unresolved_4) {
      thru = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", wrapperReverse);
    }
  };
});
//# sourceMappingURL=7ad0f57debbccea13c812de35885f25827b38a5f.js.map