System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var arrayEach, arrayPush, baseFunctions, copyArray, isFunction, isObject, keys;

  /**
   * Adds all own enumerable string keyed function properties of a source
   * object to the destination object. If `object` is a function, then methods
   * are added to its prototype as well.
   *
   * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
   * avoid conflicts caused by modifying the original.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {Function|Object} [object=lodash] The destination object.
   * @param {Object} source The object of functions to add.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
   * @returns {Function|Object} Returns `object`.
   * @example
   *
   * function vowels(string) {
   *   return _.filter(string, function(v) {
   *     return /[aeiou]/i.test(v);
   *   });
   * }
   *
   * _.mixin({ 'vowels': vowels });
   * _.vowels('fred');
   * // => ['e']
   *
   * _('fred').vowels().value();
   * // => ['e']
   *
   * _.mixin({ 'vowels': vowels }, { 'chain': false });
   * _('fred').vowels();
   * // => ['e']
   */
  function mixin(object, source, options) {
    var props = keys(source),
        methodNames = baseFunctions(source, props);
    var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
        isFunc = isFunction(object);
    arrayEach(methodNames, function (methodName) {
      var func = source[methodName];
      object[methodName] = func;

      if (isFunc) {
        object.prototype[methodName] = function () {
          var chainAll = this.__chain__;

          if (chain || chainAll) {
            var result = object(this.__wrapped__),
                actions = result.__actions__ = copyArray(this.__actions__);
            actions.push({
              'func': func,
              'args': arguments,
              'thisArg': object
            });
            result.__chain__ = chainAll;
            return result;
          }

          return func.apply(object, arrayPush([this.value()], arguments));
        };
      }
    });
    return object;
  }

  return {
    setters: [function (_unresolved_) {
      arrayEach = _unresolved_.default;
    }, function (_unresolved_2) {
      arrayPush = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseFunctions = _unresolved_3.default;
    }, function (_unresolved_4) {
      copyArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      isFunction = _unresolved_5.default;
    }, function (_unresolved_6) {
      isObject = _unresolved_6.default;
    }, function (_unresolved_7) {
      keys = _unresolved_7.default;
    }],
    execute: function () {
      _export("default", mixin);
    }
  };
});
//# sourceMappingURL=a85698308b3d69f7e2547049ffabdf22db1ed936.js.map