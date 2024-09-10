System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var root, freeExports, freeModule, moduleExports, Buffer, allocUnsafe;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }

    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      root = _unresolved_.default;
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
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

      _export("default", cloneBuffer);
    }
  };
});
//# sourceMappingURL=9d560bd504b19232ce700e57195be533a6917941.js.map