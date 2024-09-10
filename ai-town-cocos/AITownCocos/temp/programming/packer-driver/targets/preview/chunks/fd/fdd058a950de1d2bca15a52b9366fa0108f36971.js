System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        function AcceptorStateMachine(states, state) {
          this.currentState = state || null;
          this.states = states || {};
        }

        AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
          if (typeof finalState === 'function') {
            inputError = bindObject;
            bindObject = done;
            done = finalState;
            finalState = null;
          }

          var self = this;
          var state = self.states[self.currentState];
          state.fn.call(bindObject || self, inputError, function (err) {
            if (err) {
              if (state.fail) self.currentState = state.fail;else return done ? done.call(bindObject, err) : null;
            } else {
              if (state.accept) self.currentState = state.accept;else return done ? done.call(bindObject) : null;
            }

            if (self.currentState === finalState) {
              return done ? done.call(bindObject, err) : null;
            }

            self.runTo(finalState, done, bindObject, err);
          });
        };

        AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
          if (typeof acceptState === 'function') {
            fn = acceptState;
            acceptState = null;
            failState = null;
          } else if (typeof failState === 'function') {
            fn = failState;
            failState = null;
          }

          if (!this.currentState) this.currentState = name;
          this.states[name] = {
            accept: acceptState,
            fail: failState,
            fn: fn
          };
          return this;
        };
        /**
         * @api private
         */


        module.exports = AcceptorStateMachine; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=fdd058a950de1d2bca15a52b9366fa0108f36971.js.map