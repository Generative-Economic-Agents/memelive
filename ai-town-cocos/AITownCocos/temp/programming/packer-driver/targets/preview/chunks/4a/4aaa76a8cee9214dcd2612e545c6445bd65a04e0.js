System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toNumber;

  /**
   * Creates a function that performs a relational operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @returns {Function} Returns the new relational operation function.
   */
  function createRelationalOperation(operator) {
    return function (value, other) {
      if (!(typeof value == 'string' && typeof other == 'string')) {
        value = toNumber(value);
        other = toNumber(other);
      }

      return operator(value, other);
    };
  }

  return {
    setters: [function (_unresolved_) {
      toNumber = _unresolved_.default;
    }],
    execute: function () {
      _export("default", createRelationalOperation);
    }
  };
});
//# sourceMappingURL=4aaa76a8cee9214dcd2612e545c6445bd65a04e0.js.map