System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Observer, BaseModel, _crd;

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../../utils/Observer", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Observer = _unresolved_2.Observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "907914UpM9D3pJLEXSrzupB", "BaseModel", undefined);

      _export("default", BaseModel = class BaseModel extends (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
        error: Error()
      }), Observer) : Observer) {
        constructor() {
          super(); //netRsp.on(this);
        }

      });

      BaseModel.netRsp = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ae0006d1e6620ec2955b54652b693c344638a54.js.map