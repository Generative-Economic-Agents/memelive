System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewMediatorBase, MainViewMediator, _crd;

  function _reportPossibleCrUseOfViewMediatorBase(extras) {
    _reporterNs.report("ViewMediatorBase", "../../core/base/ViewMediatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainModule(extras) {
    _reporterNs.report("MainModule", "./MainModule", _context.meta, extras);
  }

  _export("MainViewMediator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewMediatorBase = _unresolved_2.ViewMediatorBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11adeXZZ2BNOI1ohr9LdfqQ", "MainViewMediator", undefined);

      _export("MainViewMediator", MainViewMediator = class MainViewMediator extends (_crd && ViewMediatorBase === void 0 ? (_reportPossibleCrUseOfViewMediatorBase({
        error: Error()
      }), ViewMediatorBase) : ViewMediatorBase) {
        constructor(module) {
          super(module);
          this._defaultView = "mainView";
        }

        ons() {}

        off() {
          let s = this;
        }

        onWeekup(openData) {
          let s = this;

          if (!openData) {
            openData = {
              view: s._defaultView
            };
          } else {
            //  if(openData.open){//example
            //    if(openData.open == "task"){
            //      setTimeout(() => {
            //        observer.post(EventType.OPEN_RENWUPANELFROM,{from:"fightview"});
            //      }, 1000);
            //    }
            //  }
            if (!openData.view) {
              openData.view = s._defaultView;
            }
          }

          super.onWeekup(openData);
        }
        /**面板关闭 */


        close() {
          let s = this;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d586e86ecdb7a740647dbde03f9f5a7715c1ea5.js.map