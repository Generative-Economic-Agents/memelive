System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StateMachine, State, _crd;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StateMachine = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a147VC3VtIfpIIqluYG/a6", "State", undefined);

      _export("default", State = class State {
        get owner() {
          return this._owner;
        }

        constructor(owner) {
          this._owner = void 0;
          this._owner = owner;
        }
        /**
         * 进入状态 
         */


        onEnter(obj) {
          if (obj === void 0) {
            obj = null;
          }
        }
        /**
         * 再次进入状态 
         * @param obj
         * @return 
         * 
         */


        onReEnter(obj) {
          if (obj === void 0) {
            obj = null;
          }
        }
        /**
         * 状态更新 
         * @return 
         * 
         */


        onUpdate() {}
        /**
         * 离开状态结束 
         * @param string
         * @return 
         * 
         */


        onLeave(preKey) {}
        /**
         * 返回状态ID 
         * @return 
         * 
         */


        getStateKey() {
          return (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).InvalidState;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9d04c4cc81530431f13044c269f3b1d4bd10f02.js.map