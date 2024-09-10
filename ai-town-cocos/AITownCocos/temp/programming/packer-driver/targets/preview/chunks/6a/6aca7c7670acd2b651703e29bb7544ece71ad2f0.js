System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseUnset;

  /**
   * Removes the property at `path` of `object`.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 7 } }] };
   * _.unset(object, 'a[0].b.c');
   * // => true
   *
   * console.log(object);
   * // => { 'a': [{ 'b': {} }] };
   *
   * _.unset(object, ['a', '0', 'b', 'c']);
   * // => true
   *
   * console.log(object);
   * // => { 'a': [{ 'b': {} }] };
   */
  function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
  }

  return {
    setters: [function (_unresolved_) {
      baseUnset = _unresolved_.default;
    }],
    execute: function () {
      _export("default", unset);
    }
  };
});
//# sourceMappingURL=6aca7c7670acd2b651703e29bb7544ece71ad2f0.js.map