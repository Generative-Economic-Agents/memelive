System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, WorkState, WorkCatModel, _crd;

  function _reportPossibleCrUseOfWorkState(extras) {
    _reporterNs.report("WorkState", "../game/config/DataStruct", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      WorkState = _unresolved_2.WorkState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a332ZzyndOVqpoeXMEWl/K", "WorkCatModel", undefined);

      WorkCatModel = class WorkCatModel {
        constructor() {
          this.catsInfo = [];
          this.currentProgress = 0;
          this.currentWorkId = '0';
          this.currentStory = '';
          this.currentWorkResultImg = '';
          this.finalEarn = 0;
          this.shareDone = true;
          this.state = (_crd && WorkState === void 0 ? (_reportPossibleCrUseOfWorkState({
            error: Error()
          }), WorkState) : WorkState).WORKING;
        }

        resetWorkInfo() {
          this.currentProgress = 0;
          this.currentWorkId = '0';
          this.currentStory = '';
          this.currentWorkResultImg = '';
        }

      };

      _export("default", new WorkCatModel());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f5e4414fe49c2f61dd9b3604c8e6d61128597aa.js.map