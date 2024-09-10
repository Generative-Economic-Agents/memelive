System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var arrayMap, baseClone, baseUnset, castPath, copyObject, customOmitClone, flatRest, getAllKeysIn, CLONE_DEEP_FLAG, CLONE_FLAT_FLAG, CLONE_SYMBOLS_FLAG, omit;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseClone = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseUnset = _unresolved_3.default;
    }, function (_unresolved_4) {
      castPath = _unresolved_4.default;
    }, function (_unresolved_5) {
      copyObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      customOmitClone = _unresolved_6.default;
    }, function (_unresolved_7) {
      flatRest = _unresolved_7.default;
    }, function (_unresolved_8) {
      getAllKeysIn = _unresolved_8.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for cloning. */
      CLONE_DEEP_FLAG = 1;
      CLONE_FLAT_FLAG = 2;
      CLONE_SYMBOLS_FLAG = 4;
      /**
       * The opposite of `_.pick`; this method creates an object composed of the
       * own and inherited enumerable property paths of `object` that are not omitted.
       *
       * **Note:** This method is considerably slower than `_.pick`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to omit.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.omit(object, ['a', 'c']);
       * // => { 'b': '2' }
       */

      omit = flatRest(function (object, paths) {
        var result = {};

        if (object == null) {
          return result;
        }

        var isDeep = false;
        paths = arrayMap(paths, function (path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result);

        if (isDeep) {
          result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }

        var length = paths.length;

        while (length--) {
          baseUnset(result, paths[length]);
        }

        return result;
      });

      _export("default", omit);
    }
  };
});
//# sourceMappingURL=6c45a349fd3ea4630235778fa6aee38d6b021817.js.map