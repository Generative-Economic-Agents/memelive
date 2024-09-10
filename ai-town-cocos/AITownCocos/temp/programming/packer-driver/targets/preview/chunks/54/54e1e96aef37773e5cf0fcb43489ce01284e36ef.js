System.register([], function (_export, _context) {
  "use strict";

  var reWrapComment;

  /**
   * Inserts wrapper `details` in a comment at the top of the `source` body.
   *
   * @private
   * @param {string} source The source to modify.
   * @returns {Array} details The details to insert.
   * @returns {string} Returns the modified source.
   */
  function insertWrapDetails(source, details) {
    var length = details.length;

    if (!length) {
      return source;
    }

    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
    details = details.join(length > 2 ? ', ' : ' ');
    return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
  }

  return {
    setters: [],
    execute: function () {
      /** Used to match wrap detail comments. */
      reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

      _export("default", insertWrapDetails);
    }
  };
});
//# sourceMappingURL=54e1e96aef37773e5cf0fcb43489ce01284e36ef.js.map