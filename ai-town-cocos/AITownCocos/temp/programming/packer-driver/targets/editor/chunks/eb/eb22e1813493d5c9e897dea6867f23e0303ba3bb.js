System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var copyObject, createAssigner, keysIn, assignIn;
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
       * This method is like `_.assign` except that it iterates over own and
       * inherited source properties.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias extend
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.assign
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
       * _.assignIn({ 'a': 0 }, new Foo, new Bar);
       * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
       */
      assignIn = createAssigner(function (object, source) {
        copyObject(source, keysIn(source), object);
      });

      _export("default", assignIn);
    }
  };
});
//# sourceMappingURL=eb22e1813493d5c9e897dea6867f23e0303ba3bb.js.map