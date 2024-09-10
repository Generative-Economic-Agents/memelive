System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var memoizeCapped, rePropName, reEscapeChar, stringToPath;
  return {
    setters: [function (_unresolved_) {
      memoizeCapped = _unresolved_.default;
    }],
    execute: function () {
      /** Used to match property names within property paths. */
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      /** Used to match backslashes in property paths. */

      reEscapeChar = /\\(\\)?/g;
      /**
       * Converts `string` to a property path array.
       *
       * @private
       * @param {string} string The string to convert.
       * @returns {Array} Returns the property path array.
       */

      stringToPath = memoizeCapped(function (string) {
        var result = [];

        if (string.charCodeAt(0) === 46
        /* . */
        ) {
          result.push('');
        }

        string.replace(rePropName, function (match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
        });
        return result;
      });

      _export("default", stringToPath);
    }
  };
});
//# sourceMappingURL=dd2753fbd26e0801a25920a6cebf6e438775a5df.js.map