System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewMediatorBase, TownViewMediator, _crd;

  function _reportPossibleCrUseOfViewMediatorBase(extras) {
    _reporterNs.report("ViewMediatorBase", "../core/base/ViewMediatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainModule(extras) {
    _reporterNs.report("MainModule", "./TownModule", _context.meta, extras);
  }

  _export("TownViewMediator", void 0);

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

      _cclegacy._RF.push({}, "b64beIsVzVF4YBgCcPKrH70", "TownViewMediator", undefined);

      _export("TownViewMediator", TownViewMediator = class TownViewMediator extends (_crd && ViewMediatorBase === void 0 ? (_reportPossibleCrUseOfViewMediatorBase({
        error: Error()
      }), ViewMediatorBase) : ViewMediatorBase) {
        constructor(module) {
          super(module);
          this._defaultView = "town";
        }

        ons() {}

        off() {
          var s = this;
        }

        onWeekup(openData) {
          var s = this;

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
          var s = this;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a932295c9c4dbe40dd7742c7f819d9be95d16ea8.js.map