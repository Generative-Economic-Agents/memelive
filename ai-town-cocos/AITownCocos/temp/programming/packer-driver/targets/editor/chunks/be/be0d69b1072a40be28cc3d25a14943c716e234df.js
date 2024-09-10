System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var isFunction, isMasked, isObject, toSource, reRegExpChar, reIsHostCtor, funcProto, objectProto, funcToString, hasOwnProperty, reIsNative;

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  return {
    setters: [function (_unresolved_) {
      isFunction = _unresolved_.default;
    }, function (_unresolved_2) {
      isMasked = _unresolved_2.default;
    }, function (_unresolved_3) {
      isObject = _unresolved_3.default;
    }, function (_unresolved_4) {
      toSource = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      /** Used to detect host constructors (Safari). */

      reIsHostCtor = /^\[object .+?Constructor\]$/;
      /** Used for built-in method references. */

      funcProto = Function.prototype;
      objectProto = Object.prototype;
      /** Used to resolve the decompiled source of functions. */

      funcToString = funcProto.toString;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /** Used to detect if a method is native. */

      reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

      _export("default", baseIsNative);
    }
  };
});
//# sourceMappingURL=be0d69b1072a40be28cc3d25a14943c716e234df.js.map