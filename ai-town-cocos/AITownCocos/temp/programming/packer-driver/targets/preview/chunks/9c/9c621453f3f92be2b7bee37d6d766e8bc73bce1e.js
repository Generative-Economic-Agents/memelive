System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var LazyWrapper, getData, getFuncName, lodash;

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */
  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];

    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }

    if (func === other) {
      return true;
    }

    var data = getData(other);
    return !!data && func === data[0];
  }

  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      getData = _unresolved_2.default;
    }, function (_unresolved_3) {
      getFuncName = _unresolved_3.default;
    }, function (_unresolved_4) {
      lodash = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", isLaziable);
    }
  };
});
//# sourceMappingURL=9c621453f3f92be2b7bee37d6d766e8bc73bce1e.js.map