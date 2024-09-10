System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var DataView, Map, Promise, Set, WeakMap, baseGetTag, toSource, mapTag, objectTag, promiseTag, setTag, weakMapTag, dataViewTag, dataViewCtorString, mapCtorString, promiseCtorString, setCtorString, weakMapCtorString, getTag;
  return {
    setters: [function (_unresolved_) {
      DataView = _unresolved_.default;
    }, function (_unresolved_2) {
      Map = _unresolved_2.default;
    }, function (_unresolved_3) {
      Promise = _unresolved_3.default;
    }, function (_unresolved_4) {
      Set = _unresolved_4.default;
    }, function (_unresolved_5) {
      WeakMap = _unresolved_5.default;
    }, function (_unresolved_6) {
      baseGetTag = _unresolved_6.default;
    }, function (_unresolved_7) {
      toSource = _unresolved_7.default;
    }],
    execute: function () {
      /** `Object#toString` result references. */
      mapTag = '[object Map]';
      objectTag = '[object Object]';
      promiseTag = '[object Promise]';
      setTag = '[object Set]';
      weakMapTag = '[object WeakMap]';
      dataViewTag = '[object DataView]';
      /** Used to detect maps, sets, and weakmaps. */

      dataViewCtorString = toSource(DataView);
      mapCtorString = toSource(Map);
      promiseCtorString = toSource(Promise);
      setCtorString = toSource(Set);
      weakMapCtorString = toSource(WeakMap);
      /**
       * Gets the `toStringTag` of `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */

      getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function (value) {
          var result = baseGetTag(value),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor ? toSource(Ctor) : '';

          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;

              case mapCtorString:
                return mapTag;

              case promiseCtorString:
                return promiseTag;

              case setCtorString:
                return setTag;

              case weakMapCtorString:
                return weakMapTag;
            }
          }

          return result;
        };
      }

      _export("default", getTag);
    }
  };
});
//# sourceMappingURL=be1ad8202f0d5a41d1d4c8c524d07fecb4a5c590.js.map