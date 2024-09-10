System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRest, eq, isIterateeCall, keysIn, objectProto, hasOwnProperty, defaults;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      eq = _unresolved_2.default;
    }, function (_unresolved_3) {
      isIterateeCall = _unresolved_3.default;
    }, function (_unresolved_4) {
      keysIn = _unresolved_4.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Assigns own and inherited enumerable string keyed properties of source
       * objects to the destination object for all destination properties that
       * resolve to `undefined`. Source objects are applied from left to right.
       * Once a property is set, additional values of the same property are ignored.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.defaultsDeep
       * @example
       *
       * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */

      defaults = baseRest(function (object, sources) {
        object = Object(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }

        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;

          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];

            if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }

        return object;
      });

      _export("default", defaults);
    }
  };
});
//# sourceMappingURL=82fe5e1ad84c6385c268c13b949b12f36e0a358b.js.map