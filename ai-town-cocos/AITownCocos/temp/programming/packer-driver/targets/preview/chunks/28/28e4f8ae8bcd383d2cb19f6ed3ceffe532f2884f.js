System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseIsMatch, getMatchData, matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);

    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }

    return function (object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseIsMatch = _unresolved_.default;
    }, function (_unresolved_2) {
      getMatchData = _unresolved_2.default;
    }, function (_unresolved_3) {
      matchesStrictComparable = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseMatches);
    }
  };
});
//# sourceMappingURL=28e4f8ae8bcd383d2cb19f6ed3ceffe532f2884f.js.map