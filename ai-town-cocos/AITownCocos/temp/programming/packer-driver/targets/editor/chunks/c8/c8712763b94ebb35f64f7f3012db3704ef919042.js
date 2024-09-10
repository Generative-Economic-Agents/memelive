System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseToPairs, getTag, mapToArray, setToPairs, mapTag, setTag;

  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */
  function createToPairs(keysFunc) {
    return function (object) {
      var tag = getTag(object);

      if (tag == mapTag) {
        return mapToArray(object);
      }

      if (tag == setTag) {
        return setToPairs(object);
      }

      return baseToPairs(object, keysFunc(object));
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseToPairs = _unresolved_.default;
    }, function (_unresolved_2) {
      getTag = _unresolved_2.default;
    }, function (_unresolved_3) {
      mapToArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      setToPairs = _unresolved_4.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';
      setTag = '[object Set]';

      _export("default", createToPairs);
    }
  };
});
//# sourceMappingURL=c8712763b94ebb35f64f7f3012db3704ef919042.js.map