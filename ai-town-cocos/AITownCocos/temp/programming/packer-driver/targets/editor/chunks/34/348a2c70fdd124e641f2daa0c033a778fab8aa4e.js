System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var castPath, isFunction, toKey;

  /**
   * This method is like `_.get` except that if the resolved value is a
   * function it's invoked with the `this` binding of its parent object and
   * its result is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to resolve.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
   *
   * _.result(object, 'a[0].b.c1');
   * // => 3
   *
   * _.result(object, 'a[0].b.c2');
   * // => 4
   *
   * _.result(object, 'a[0].b.c3', 'default');
   * // => 'default'
   *
   * _.result(object, 'a[0].b.c3', _.constant('default'));
   * // => 'default'
   */
  function result(object, path, defaultValue) {
    path = castPath(path, object);
    var index = -1,
        length = path.length; // Ensure the loop is entered when path is empty.

    if (!length) {
      length = 1;
      object = undefined;
    }

    while (++index < length) {
      var value = object == null ? undefined : object[toKey(path[index])];

      if (value === undefined) {
        index = length;
        value = defaultValue;
      }

      object = isFunction(value) ? value.call(object) : value;
    }

    return object;
  }

  return {
    setters: [function (_unresolved_) {
      castPath = _unresolved_.default;
    }, function (_unresolved_2) {
      isFunction = _unresolved_2.default;
    }, function (_unresolved_3) {
      toKey = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", result);
    }
  };
});
//# sourceMappingURL=348a2c70fdd124e641f2daa0c033a778fab8aa4e.js.map