System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var assignValue, copyObject, createAssigner, isArrayLike, isPrototype, keys, objectProto, hasOwnProperty, assign;
  return {
    setters: [function (_unresolved_) {
      assignValue = _unresolved_.default;
    }, function (_unresolved_2) {
      copyObject = _unresolved_2.default;
    }, function (_unresolved_3) {
      createAssigner = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLike = _unresolved_4.default;
    }, function (_unresolved_5) {
      isPrototype = _unresolved_5.default;
    }, function (_unresolved_6) {
      keys = _unresolved_6.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Assigns own enumerable string keyed properties of source objects to the
       * destination object. Source objects are applied from left to right.
       * Subsequent sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object` and is loosely based on
       * [`Object.assign`](https://mdn.io/Object/assign).
       *
       * @static
       * @memberOf _
       * @since 0.10.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.assignIn
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * function Bar() {
       *   this.c = 3;
       * }
       *
       * Foo.prototype.b = 2;
       * Bar.prototype.d = 4;
       *
       * _.assign({ 'a': 0 }, new Foo, new Bar);
       * // => { 'a': 1, 'c': 3 }
       */

      assign = createAssigner(function (object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }

        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });

      _export("default", assign);
    }
  };
});
//# sourceMappingURL=93987460cc50ad3a11eb020e288b155f4c094cfa.js.map