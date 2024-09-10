System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toArray;

  /**
   * Gets the next value on a wrapped object following the
   * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
   *
   * @name next
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the next iterator value.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 1 }
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 2 }
   *
   * wrapped.next();
   * // => { 'done': true, 'value': undefined }
   */
  function wrapperNext() {
    if (this.__values__ === undefined) {
      this.__values__ = toArray(this.value());
    }

    var done = this.__index__ >= this.__values__.length,
        value = done ? undefined : this.__values__[this.__index__++];
    return {
      'done': done,
      'value': value
    };
  }

  return {
    setters: [function (_unresolved_) {
      toArray = _unresolved_.default;
    }],
    execute: function () {
      _export("default", wrapperNext);
    }
  };
});
//# sourceMappingURL=ac7932db07bcc22a0589c58e3e460524792d6d01.js.map