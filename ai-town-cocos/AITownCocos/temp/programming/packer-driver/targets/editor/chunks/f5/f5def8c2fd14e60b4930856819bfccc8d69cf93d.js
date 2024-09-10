System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var copyObject, createAssigner, keysIn, assignInWith;
  return {
    setters: [function (_unresolved_) {
      copyObject = _unresolved_.default;
    }, function (_unresolved_2) {
      createAssigner = _unresolved_2.default;
    }, function (_unresolved_3) {
      keysIn = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * This method is like `_.assignIn` except that it accepts `customizer`
       * which is invoked to produce the assigned values. If `customizer` returns
       * `undefined`, assignment is handled by the method instead. The `customizer`
       * is invoked with five arguments: (objValue, srcValue, key, object, source).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias extendWith
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @see _.assignWith
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   return _.isUndefined(objValue) ? srcValue : objValue;
       * }
       *
       * var defaults = _.partialRight(_.assignInWith, customizer);
       *
       * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */
      assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });

      _export("default", assignInWith);
    }
  };
});
//# sourceMappingURL=f5def8c2fd14e60b4930856819bfccc8d69cf93d.js.map