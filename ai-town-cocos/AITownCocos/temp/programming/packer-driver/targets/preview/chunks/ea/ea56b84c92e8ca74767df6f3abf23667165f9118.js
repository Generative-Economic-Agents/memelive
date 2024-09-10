System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var coreJsData, maskSrcKey;

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  return {
    setters: [function (_unresolved_) {
      coreJsData = _unresolved_.default;
    }],
    execute: function () {
      /** Used to detect methods masquerading as native. */
      maskSrcKey = function () {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
        return uid ? 'Symbol(src)_1.' + uid : '';
      }();

      _export("default", isMasked);
    }
  };
});
//# sourceMappingURL=ea56b84c92e8ca74767df6f3abf23667165f9118.js.map