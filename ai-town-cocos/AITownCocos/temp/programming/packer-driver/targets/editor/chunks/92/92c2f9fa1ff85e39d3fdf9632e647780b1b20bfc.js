System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var constant, createInverter, identity, objectProto, nativeObjectToString, invert;
  return {
    setters: [function (_unresolved_) {
      constant = _unresolved_.default;
    }, function (_unresolved_2) {
      createInverter = _unresolved_2.default;
    }, function (_unresolved_3) {
      identity = _unresolved_3.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      nativeObjectToString = objectProto.toString;
      /**
       * Creates an object composed of the inverted keys and values of `object`.
       * If `object` contains duplicate values, subsequent values overwrite
       * property assignments of previous values.
       *
       * @static
       * @memberOf _
       * @since 0.7.0
       * @category Object
       * @param {Object} object The object to invert.
       * @returns {Object} Returns the new inverted object.
       * @example
       *
       * var object = { 'a': 1, 'b': 2, 'c': 1 };
       *
       * _.invert(object);
       * // => { '1': 'c', '2': 'b' }
       */

      invert = createInverter(function (result, value, key) {
        if (value != null && typeof value.toString != 'function') {
          value = nativeObjectToString.call(value);
        }

        result[value] = key;
      }, constant(identity));

      _export("default", invert);
    }
  };
});
//# sourceMappingURL=92c2f9fa1ff85e39d3fdf9632e647780b1b20bfc.js.map