System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var LodashWrapper;

  /**
   * Executes the chain sequence and returns the wrapped result.
   *
   * @name commit
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2];
   * var wrapped = _(array).push(3);
   *
   * console.log(array);
   * // => [1, 2]
   *
   * wrapped = wrapped.commit();
   * console.log(array);
   * // => [1, 2, 3]
   *
   * wrapped.last();
   * // => 3
   *
   * console.log(array);
   * // => [1, 2, 3]
   */
  function wrapperCommit() {
    return new LodashWrapper(this.value(), this.__chain__);
  }

  return {
    setters: [function (_unresolved_) {
      LodashWrapper = _unresolved_.default;
    }],
    execute: function () {
      _export("default", wrapperCommit);
    }
  };
});
//# sourceMappingURL=7f15cc1378d866f048642008f2eb6cbc1bb8c9af.js.map