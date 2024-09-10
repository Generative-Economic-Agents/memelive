System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var copyObject, createAssigner, keys, assignWith;
  return {
    setters: [function (_unresolved_) {
      copyObject = _unresolved_.default;
    }, function (_unresolved_2) {
      createAssigner = _unresolved_2.default;
    }, function (_unresolved_3) {
      keys = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * This method is like `_.assign` except that it accepts `customizer`
       * which is invoked to produce the assigned values. If `customizer` returns
       * `undefined`, assignment is handled by the method instead. The `customizer`
       * is invoked with five arguments: (objValue, srcValue, key, object, source).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @see _.assignInWith
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   return _.isUndefined(objValue) ? srcValue : objValue;
       * }
       *
       * var defaults = _.partialRight(_.assignWith, customizer);
       *
       * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */
      assignWith = createAssigner(function (object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });

      _export("default", assignWith);
    }
  };
});
//# sourceMappingURL=3bc9e3d2e348a66730aedb2bfff721e9eaef5637.js.map