System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, WorkState;

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "../../model/StaticTextConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29a09tAvC5OO7dmS0zGfTdt", "DataStruct", undefined);
      /**
       * // 状态：0:初始化,1:任务进行中,2:任务完成,3:领取完成#
       */


      _export("WorkState", WorkState = /*#__PURE__*/function (WorkState) {
        WorkState[WorkState["WORKING"] = 0] = "WORKING";
        WorkState[WorkState["WORK_DONE_REWARDING"] = 1] = "WORK_DONE_REWARDING";
        WorkState[WorkState["WORK_DONE_REWARD_DONE"] = 2] = "WORK_DONE_REWARD_DONE";
        return WorkState;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=884a7cbbdb60462204587984f7db09052e7f0eb2.js.map