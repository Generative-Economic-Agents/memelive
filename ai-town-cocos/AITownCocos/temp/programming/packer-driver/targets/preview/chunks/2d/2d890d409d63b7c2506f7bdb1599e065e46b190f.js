System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetTag, getPrototype, isObjectLike, objectTag, funcProto, objectProto, funcToString, hasOwnProperty, objectCtorString;

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }

    var proto = getPrototype(value);

    if (proto === null) {
      return true;
    }

    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  return {
    setters: [function (_unresolved_) {
      baseGetTag = _unresolved_.default;
    }, function (_unresolved_2) {
      getPrototype = _unresolved_2.default;
    }, function (_unresolved_3) {
      isObjectLike = _unresolved_3.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      objectTag = '[object Object]';
      /** Used for built-in method references. */

      funcProto = Function.prototype;
      objectProto = Object.prototype;
      /** Used to resolve the decompiled source of functions. */

      funcToString = funcProto.toString;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /** Used to infer the `Object` constructor. */

      objectCtorString = funcToString.call(Object);

      _export("default", isPlainObject);
    }
  };
});
//# sourceMappingURL=2d890d409d63b7c2506f7bdb1599e065e46b190f.js.map