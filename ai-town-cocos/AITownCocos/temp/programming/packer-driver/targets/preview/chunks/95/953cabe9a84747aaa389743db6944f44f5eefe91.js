System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      Uint8Array = _unresolved_.default;
    }],
    execute: function () {
      _export("default", cloneArrayBuffer);
    }
  };
});
//# sourceMappingURL=953cabe9a84747aaa389743db6944f44f5eefe91.js.map