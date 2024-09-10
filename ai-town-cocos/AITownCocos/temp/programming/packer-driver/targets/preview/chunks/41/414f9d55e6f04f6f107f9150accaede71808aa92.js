System.register([], function (_export, _context) {
  "use strict";

  var reWrapDetails, reSplitDetails;

  /**
   * Extracts wrapper details from the `source` body comment.
   *
   * @private
   * @param {string} source The source to inspect.
   * @returns {Array} Returns the wrapper details.
   */
  function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
  }

  return {
    setters: [],
    execute: function () {
      /** Used to match wrap detail comments. */
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
      reSplitDetails = /,? & /;

      _export("default", getWrapDetails);
    }
  };
});
//# sourceMappingURL=414f9d55e6f04f6f107f9150accaede71808aa92.js.map