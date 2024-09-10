System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayEach, baseAssignValue, bind, flatRest, toKey, bindAll;
  return {
    setters: [function (_unresolved_) {
      arrayEach = _unresolved_.default;
    }, function (_unresolved_2) {
      baseAssignValue = _unresolved_2.default;
    }, function (_unresolved_3) {
      bind = _unresolved_3.default;
    }, function (_unresolved_4) {
      flatRest = _unresolved_4.default;
    }, function (_unresolved_5) {
      toKey = _unresolved_5.default;
    }],
    execute: function () {
      /**
       * Binds methods of an object to the object itself, overwriting the existing
       * method.
       *
       * **Note:** This method doesn't set the "length" property of bound functions.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {Object} object The object to bind and assign the bound methods to.
       * @param {...(string|string[])} methodNames The object method names to bind.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var view = {
       *   'label': 'docs',
       *   'click': function() {
       *     console.log('clicked ' + this.label);
       *   }
       * };
       *
       * _.bindAll(view, ['click']);
       * jQuery(element).on('click', view.click);
       * // => Logs 'clicked docs' when clicked.
       */
      bindAll = flatRest(function (object, methodNames) {
        arrayEach(methodNames, function (key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });

      _export("default", bindAll);
    }
  };
});
//# sourceMappingURL=8c5baf3ebe1c67a2ca776dfcfb97c6bc5b80556f.js.map