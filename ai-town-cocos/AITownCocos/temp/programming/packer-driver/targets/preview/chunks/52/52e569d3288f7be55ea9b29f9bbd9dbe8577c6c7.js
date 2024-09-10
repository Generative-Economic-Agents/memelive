System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayMap, baseIteratee, basePickBy, getAllKeysIn;

  /**
   * Creates an object composed of the `object` properties `predicate` returns
   * truthy for. The predicate is invoked with two arguments: (value, key).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The source object.
   * @param {Function} [predicate=_.identity] The function invoked per property.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pickBy(object, _.isNumber);
   * // => { 'a': 1, 'c': 3 }
   */
  function pickBy(object, predicate) {
    if (object == null) {
      return {};
    }

    var props = arrayMap(getAllKeysIn(object), function (prop) {
      return [prop];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function (value, path) {
      return predicate(value, path[0]);
    });
  }

  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIteratee = _unresolved_2.default;
    }, function (_unresolved_3) {
      basePickBy = _unresolved_3.default;
    }, function (_unresolved_4) {
      getAllKeysIn = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", pickBy);
    }
  };
});
//# sourceMappingURL=52e569d3288f7be55ea9b29f9bbd9dbe8577c6c7.js.map