System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseMerge, createAssigner, mergeWith;
  return {
    setters: [function (_unresolved_) {
      baseMerge = _unresolved_.default;
    }, function (_unresolved_2) {
      createAssigner = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * This method is like `_.merge` except that it accepts `customizer` which
       * is invoked to produce the merged values of the destination and source
       * properties. If `customizer` returns `undefined`, merging is handled by the
       * method instead. The `customizer` is invoked with six arguments:
       * (objValue, srcValue, key, object, source, stack).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} customizer The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   if (_.isArray(objValue)) {
       *     return objValue.concat(srcValue);
       *   }
       * }
       *
       * var object = { 'a': [1], 'b': [2] };
       * var other = { 'a': [3], 'b': [4] };
       *
       * _.mergeWith(object, other, customizer);
       * // => { 'a': [1, 3], 'b': [2, 4] }
       */
      mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });

      _export("default", mergeWith);
    }
  };
});
//# sourceMappingURL=510fb3819f5d5e2ca8f581356d19d0a844ba7d50.js.map