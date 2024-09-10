System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseToNumber, baseToString;

  /**
   * Creates a function that performs a mathematical operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @param {number} [defaultValue] The value used for `undefined` arguments.
   * @returns {Function} Returns the new mathematical operation function.
   */
  function createMathOperation(operator, defaultValue) {
    return function (value, other) {
      var result;

      if (value === undefined && other === undefined) {
        return defaultValue;
      }

      if (value !== undefined) {
        result = value;
      }

      if (other !== undefined) {
        if (result === undefined) {
          return other;
        }

        if (typeof value == 'string' || typeof other == 'string') {
          value = baseToString(value);
          other = baseToString(other);
        } else {
          value = baseToNumber(value);
          other = baseToNumber(other);
        }

        result = operator(value, other);
      }

      return result;
    };
  }

  return {
    setters: [function (_unresolved_) {
      baseToNumber = _unresolved_.default;
    }, function (_unresolved_2) {
      baseToString = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", createMathOperation);
    }
  };
});
//# sourceMappingURL=9e82ca2ef264643bd581ea77d740d79a2e5072d3.js.map