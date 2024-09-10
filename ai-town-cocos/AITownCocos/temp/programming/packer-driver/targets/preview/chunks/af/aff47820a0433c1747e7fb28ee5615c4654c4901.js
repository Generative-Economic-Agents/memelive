System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseRest, createWrap, getHolder, replaceHolders, WRAP_BIND_FLAG, WRAP_BIND_KEY_FLAG, WRAP_PARTIAL_FLAG, bindKey;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      createWrap = _unresolved_2.default;
    }, function (_unresolved_3) {
      getHolder = _unresolved_3.default;
    }, function (_unresolved_4) {
      replaceHolders = _unresolved_4.default;
    }],
    execute: function () {
      /** Used to compose bitmasks for function metadata. */
      WRAP_BIND_FLAG = 1;
      WRAP_BIND_KEY_FLAG = 2;
      WRAP_PARTIAL_FLAG = 32;
      /**
       * Creates a function that invokes the method at `object[key]` with `partials`
       * prepended to the arguments it receives.
       *
       * This method differs from `_.bind` by allowing bound functions to reference
       * methods that may be redefined or don't yet exist. See
       * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
       * for more details.
       *
       * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * @static
       * @memberOf _
       * @since 0.10.0
       * @category Function
       * @param {Object} object The object to invoke the method on.
       * @param {string} key The key of the method.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * var object = {
       *   'user': 'fred',
       *   'greet': function(greeting, punctuation) {
       *     return greeting + ' ' + this.user + punctuation;
       *   }
       * };
       *
       * var bound = _.bindKey(object, 'greet', 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * object.greet = function(greeting, punctuation) {
       *   return greeting + 'ya ' + this.user + punctuation;
       * };
       *
       * bound('!');
       * // => 'hiya fred!'
       *
       * // Bound with placeholders.
       * var bound = _.bindKey(object, 'greet', _, '!');
       * bound('hi');
       * // => 'hiya fred!'
       */

      bindKey = baseRest(function (object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;

        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }

        return createWrap(key, bitmask, object, partials, holders);
      }); // Assign default placeholders.

      bindKey.placeholder = {};

      _export("default", bindKey);
    }
  };
});
//# sourceMappingURL=aff47820a0433c1747e7fb28ee5615c4654c4901.js.map