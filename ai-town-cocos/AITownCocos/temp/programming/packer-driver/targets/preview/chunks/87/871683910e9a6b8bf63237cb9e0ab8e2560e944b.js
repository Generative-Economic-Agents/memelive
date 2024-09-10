System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var apply, baseRest, customDefaultsMerge, mergeWith, defaultsDeep;
  return {
    setters: [function (_unresolved_) {
      apply = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      customDefaultsMerge = _unresolved_3.default;
    }, function (_unresolved_4) {
      mergeWith = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * This method is like `_.defaults` except that it recursively assigns
       * default properties.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.defaults
       * @example
       *
       * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
       * // => { 'a': { 'b': 2, 'c': 3 } }
       */
      defaultsDeep = baseRest(function (args) {
        args.push(undefined, customDefaultsMerge);
        return apply(mergeWith, undefined, args);
      });

      _export("default", defaultsDeep);
    }
  };
});
//# sourceMappingURL=871683910e9a6b8bf63237cb9e0ab8e2560e944b.js.map