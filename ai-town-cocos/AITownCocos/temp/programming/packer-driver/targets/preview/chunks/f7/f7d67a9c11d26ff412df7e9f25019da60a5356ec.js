System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewMediatorBase, JishiViewMediator, _crd;

  function _reportPossibleCrUseOfViewMediatorBase(extras) {
    _reporterNs.report("ViewMediatorBase", "../../core/base/ViewMediatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainModule(extras) {
    _reporterNs.report("MainModule", "./JishiModule", _context.meta, extras);
  }

  _export("JishiViewMediator", void 0);

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

      _cclegacy._RF.push({}, "48547iTIKRE+JK/z0z9WjhC", "JishiViewMediator", undefined);

      _export("JishiViewMediator", JishiViewMediator = class JishiViewMediator extends (_crd && ViewMediatorBase === void 0 ? (_reportPossibleCrUseOfViewMediatorBase({
        error: Error()
      }), ViewMediatorBase) : ViewMediatorBase) {
        constructor(module) {
          super(module);
          this._defaultView = "jishiView";
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
//# sourceMappingURL=f7d67a9c11d26ff412df7e9f25019da60a5356ec.js.map