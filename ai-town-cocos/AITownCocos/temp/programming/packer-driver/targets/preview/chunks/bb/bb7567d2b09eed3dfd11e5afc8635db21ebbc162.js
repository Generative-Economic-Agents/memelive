System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var chain;

  /**
   * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
   *
   * @name chain
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 }
   * ];
   *
   * // A sequence without explicit chaining.
   * _(users).head();
   * // => { 'user': 'barney', 'age': 36 }
   *
   * // A sequence with explicit chaining.
   * _(users)
   *   .chain()
   *   .head()
   *   .pick('user')
   *   .value();
   * // => { 'user': 'barney' }
   */
  function wrapperChain() {
    return chain(this);
  }

  return {
    setters: [function (_unresolved_) {
      chain = _unresolved_.default;
    }],
    execute: function () {
      _export("default", wrapperChain);
    }
  };
});
//# sourceMappingURL=bb7567d2b09eed3dfd11e5afc8635db21ebbc162.js.map