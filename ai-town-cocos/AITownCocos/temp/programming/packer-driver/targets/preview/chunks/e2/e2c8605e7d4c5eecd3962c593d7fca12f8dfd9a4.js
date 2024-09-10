System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseWrapperValue, getView, isArray, LAZY_FILTER_FLAG, LAZY_MAP_FLAG, nativeMin;

  /**
   * Extracts the unwrapped value from its lazy wrapper.
   *
   * @private
   * @name value
   * @memberOf LazyWrapper
   * @returns {*} Returns the unwrapped value.
   */
  function lazyValue() {
    var array = this.__wrapped__.value(),
        dir = this.__dir__,
        isArr = isArray(array),
        isRight = dir < 0,
        arrLength = isArr ? array.length : 0,
        view = getView(0, arrLength, this.__views__),
        start = view.start,
        end = view.end,
        length = end - start,
        index = isRight ? end : start - 1,
        iteratees = this.__iteratees__,
        iterLength = iteratees.length,
        resIndex = 0,
        takeCount = nativeMin(length, this.__takeCount__);

    if (!isArr || !isRight && arrLength == length && takeCount == length) {
      return baseWrapperValue(array, this.__actions__);
    }

    var result = [];

    outer: while (length-- && resIndex < takeCount) {
      index += dir;
      var iterIndex = -1,
          value = array[index];

      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex],
            iteratee = data.iteratee,
            type = data.type,
            computed = iteratee(value);

        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }

      result[resIndex++] = value;
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      baseWrapperValue = _unresolved_.default;
    }, function (_unresolved_2) {
      getView = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }],
    execute: function () {
      /** Used to indicate the type of lazy iteratees. */
      LAZY_FILTER_FLAG = 1;
      LAZY_MAP_FLAG = 2;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeMin = Math.min;

      _export("default", lazyValue);
    }
  };
});
//# sourceMappingURL=e2c8605e7d4c5eecd3962c593d7fca12f8dfd9a4.js.map