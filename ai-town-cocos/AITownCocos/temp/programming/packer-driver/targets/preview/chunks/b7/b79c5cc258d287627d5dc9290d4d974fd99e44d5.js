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
//# sourceMappingURL=b79c5cc258d287627d5dc9290d4d974fd99e44d5.js.map