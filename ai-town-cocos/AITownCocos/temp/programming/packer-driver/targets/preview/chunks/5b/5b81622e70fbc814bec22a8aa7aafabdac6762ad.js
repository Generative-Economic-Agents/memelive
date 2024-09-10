System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ObjDictionary, StateMachine, _crd;

  function _reportPossibleCrUseOfObjDictionary(extras) {
    _reporterNs.report("ObjDictionary", "../dataStructue/ObjDictionary", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./State", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ObjDictionary = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b5ccxbqx5EQ5r1uMrtdt5K", "StateMachine", undefined);

      _export("default", StateMachine = class StateMachine {
        constructor(owner) {
          this._stateDic = void 0;
          this._currentState = null;
          this._lastState = null;
          this._globalState = null;
          this._owner = void 0;
          this._stateDic = new (_crd && ObjDictionary === void 0 ? (_reportPossibleCrUseOfObjDictionary({
            error: Error()
          }), ObjDictionary) : ObjDictionary)();
          this._owner = owner;
        }

        isExist(stateKey) {
          return this._stateDic.containsKey(stateKey);
        }

        getStateByKey(stateKey) {
          return this._stateDic.get(stateKey);
        }

        setOwner(owner) {
          this._owner = owner;
        }
        /**
         * 注册状态 
         * @param key
         * @param state
         * 
         */


        registerState(key, state) {
          if (this._owner != state.owner) {
            console.log("statemachine 与 state 所有者不一致");
            return;
          }

          this._stateDic.add(key, state);
        }

        setGlobalState(state, obj) {
          if (obj === void 0) {
            obj = null;
          }

          this._globalState = state;

          this._globalState.onEnter(obj);
        }
        /**
         * 移除状态 
         * @param key
         * 
         */


        removeState(key) {
          this._stateDic.remove(key);
        }
        /**
         * 改变状态 
         * @param key
         * @param obj
         * 
         */


        changeState(key, obj) {
          if (obj === void 0) {
            obj = null;
          }

          var newState = this._stateDic.get(key);

          if (newState == null) {
            console.log("unregister state type: " + key);
            return;
          }

          if (this._currentState != null) {
            this._currentState.onLeave(newState.getStateKey());
          }

          this._lastState = this._currentState;
          this._currentState = newState;

          this._currentState.onEnter(obj);
        }

        reEnterState(obj) {
          if (obj === void 0) {
            obj = null;
          }

          if (this._currentState) this._currentState.onReEnter(obj);
        }
        /**
         * 更新 
         * 
         */


        update() {
          if (this._globalState != null) this._globalState.onUpdate();
          if (this._currentState != null) this._currentState.onUpdate();
        }
        /**
         * 当前状态类型  
         * @return 
         * 
         */


        getCurrentState() {
          if (this._currentState != null) {
            return this._currentState.getStateKey();
          }

          return StateMachine.InvalidState;
        }
        /**
         * 清除 
         * 
         */


        clear() {
          if (this._currentState != null) this._currentState.onLeave(StateMachine.InvalidState);

          this._stateDic.clear();

          this._currentState = null;
          this._lastState = null;
        }

      });

      StateMachine.InvalidState = "Invalid";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b81622e70fbc814bec22a8aa7aafabdac6762ad.js.map