System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var getWrapDetails, insertWrapDetails, setToString, updateWrapDetails;

  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */
  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + '';
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
  }

  return {
    setters: [function (_unresolved_) {
      getWrapDetails = _unresolved_.default;
    }, function (_unresolved_2) {
      insertWrapDetails = _unresolved_2.default;
    }, function (_unresolved_3) {
      setToString = _unresolved_3.default;
    }, function (_unresolved_4) {
      updateWrapDetails = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", setWrapToString);
    }
  };
});
//# sourceMappingURL=928918d4a1682cfe4ac3362b03a3eb9f41364ce7.js.map