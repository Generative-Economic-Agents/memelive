System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var root, stubFalse, freeExports, freeModule, moduleExports, Buffer, nativeIsBuffer, isBuffer;
  return {
    setters: [function (_unresolved_) {
      root = _unresolved_.default;
    }, function (_unresolved_2) {
      stubFalse = _unresolved_2.default;
    }],
    execute: function () {
      /** Detect free variable `exports`. */
      freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
      /** Detect free variable `module`. */

      freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
      /** Detect the popular CommonJS extension `module.exports`. */

      moduleExports = freeModule && freeModule.exports === freeExports;
      /** Built-in value references. */

      Buffer = moduleExports ? root.Buffer : undefined;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
      /**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */

      isBuffer = nativeIsBuffer || stubFalse;

      _export("default", isBuffer);
    }
  };
});
//# sourceMappingURL=db1eb8f53994db91359e6be59e32e523e8d7c742.js.map