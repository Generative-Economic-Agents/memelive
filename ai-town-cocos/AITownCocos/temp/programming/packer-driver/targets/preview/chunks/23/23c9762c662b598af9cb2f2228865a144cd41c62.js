System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseMerge, createAssigner, merge;
  return {
    setters: [function (_unresolved_) {
      baseMerge = _unresolved_.default;
    }, function (_unresolved_2) {
      createAssigner = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * This method is like `_.assign` except that it recursively merges own and
       * inherited enumerable string keyed properties of source objects into the
       * destination object. Source properties that resolve to `undefined` are
       * skipped if a destination value exists. Array and plain object properties
       * are merged recursively. Other objects and value types are overridden by
       * assignment. Source objects are applied from left to right. Subsequent
       * sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {
       *   'a': [{ 'b': 2 }, { 'd': 4 }]
       * };
       *
       * var other = {
       *   'a': [{ 'c': 3 }, { 'e': 5 }]
       * };
       *
       * _.merge(object, other);
       * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
       */
      merge = createAssigner(function (object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });

      _export("default", merge);
    }
  };
});
//# sourceMappingURL=23c9762c662b598af9cb2f2228865a144cd41c62.js.map