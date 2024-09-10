System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var LazyWrapper, LodashWrapper, baseAt, flatRest, isIndex, thru, wrapperAt;
  return {
    setters: [function (_unresolved_) {
      LazyWrapper = _unresolved_.default;
    }, function (_unresolved_2) {
      LodashWrapper = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseAt = _unresolved_3.default;
    }, function (_unresolved_4) {
      flatRest = _unresolved_4.default;
    }, function (_unresolved_5) {
      isIndex = _unresolved_5.default;
    }, function (_unresolved_6) {
      thru = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * This method is the wrapper version of `_.at`.
       *
       * @name at
       * @memberOf _
       * @since 1.0.0
       * @category Seq
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
       *
       * _(object).at(['a[0].b.c', 'a[1]']).value();
       * // => [3, 4]
       */
      wrapperAt = flatRest(function (paths) {
        var length = paths.length,
            start = length ? paths[0] : 0,
            value = this.__wrapped__,
            interceptor = function interceptor(object) {
          return baseAt(object, paths);
        };

        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }

        value = value.slice(start, +start + (length ? 1 : 0));

        value.__actions__.push({
          'func': thru,
          'args': [interceptor],
          'thisArg': undefined
        });

        return new LodashWrapper(value, this.__chain__).thru(function (array) {
          if (length && !array.length) {
            array.push(undefined);
          }

          return array;
        });
      });

      _export("default", wrapperAt);
    }
  };
});
//# sourceMappingURL=06cb24683e7f9a0df3f2a96a3173161a6244e145.js.map