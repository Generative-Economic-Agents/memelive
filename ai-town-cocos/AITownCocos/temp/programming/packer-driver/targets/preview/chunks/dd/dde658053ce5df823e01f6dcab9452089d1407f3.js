System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayEach, arrayIncludes, WRAP_BIND_FLAG, WRAP_BIND_KEY_FLAG, WRAP_CURRY_FLAG, WRAP_CURRY_RIGHT_FLAG, WRAP_PARTIAL_FLAG, WRAP_PARTIAL_RIGHT_FLAG, WRAP_ARY_FLAG, WRAP_REARG_FLAG, WRAP_FLIP_FLAG, wrapFlags;

  /**
   * Updates wrapper `details` based on `bitmask` flags.
   *
   * @private
   * @returns {Array} details The details to modify.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Array} Returns `details`.
   */
  function updateWrapDetails(details, bitmask) {
    arrayEach(wrapFlags, function (pair) {
      var value = '_.' + pair[0];

      if (bitmask & pair[1] && !arrayIncludes(details, value)) {
        details.push(value);
      }
    });
    return details.sort();
  }

  return {
    setters: [function (_unresolved_) {
      arrayEach = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayIncludes = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_BIND_FLAG = 1;
      WRAP_BIND_KEY_FLAG = 2;
      WRAP_CURRY_FLAG = 8;
      WRAP_CURRY_RIGHT_FLAG = 16;
      WRAP_PARTIAL_FLAG = 32;
      WRAP_PARTIAL_RIGHT_FLAG = 64;
      WRAP_ARY_FLAG = 128;
      WRAP_REARG_FLAG = 256;
      WRAP_FLIP_FLAG = 512;
      /** Used to associate wrap methods with their bit flags. */

      wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];

      _export("default", updateWrapDetails);
    }
  };
});
//# sourceMappingURL=dde658053ce5df823e01f6dcab9452089d1407f3.js.map