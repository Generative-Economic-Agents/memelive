System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var arrayEach, baseCreate, baseForOwn, baseIteratee, getPrototype, isArray, isBuffer, isFunction, isObject, isTypedArray;

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
        isArrLike = isArr || isBuffer(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);

    if (accumulator == null) {
      var Ctor = object && object.constructor;

      if (isArrLike) {
        accumulator = isArr ? new Ctor() : [];
      } else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      } else {
        accumulator = {};
      }
    }

    (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  return {
    setters: [function (_unresolved_) {
      arrayEach = _unresolved_.default;
    }, function (_unresolved_2) {
      baseCreate = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseForOwn = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseIteratee = _unresolved_4.default;
    }, function (_unresolved_5) {
      getPrototype = _unresolved_5.default;
    }, function (_unresolved_6) {
      isArray = _unresolved_6.default;
    }, function (_unresolved_7) {
      isBuffer = _unresolved_7.default;
    }, function (_unresolved_8) {
      isFunction = _unresolved_8.default;
    }, function (_unresolved_9) {
      isObject = _unresolved_9.default;
    }, function (_unresolved_10) {
      isTypedArray = _unresolved_10.default;
    }],
    execute: function () {
      _export("default", transform);
    }
  };
});
//# sourceMappingURL=eb5a68b46f2c0630947a814c3766f2f48a889e15.js.map