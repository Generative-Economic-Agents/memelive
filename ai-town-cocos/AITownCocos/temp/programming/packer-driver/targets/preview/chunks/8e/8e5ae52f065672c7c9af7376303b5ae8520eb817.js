System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseClamp, baseToString, toInteger, toString;

  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = toString(string);
    position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
    target = baseToString(target);
    return string.slice(position, position + target.length) == target;
  }

  return {
    setters: [function (_unresolved_) {
      baseClamp = _unresolved_.default;
    }, function (_unresolved_2) {
      baseToString = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }, function (_unresolved_4) {
      toString = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", startsWith);
    }
  };
});
//# sourceMappingURL=8e5ae52f065672c7c9af7376303b5ae8520eb817.js.map