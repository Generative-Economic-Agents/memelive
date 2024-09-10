System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ModuleID, JishiModule, MainModule, ModuleManager, _crd;

  function _reportPossibleCrUseOfModuleBase(extras) {
    _reporterNs.report("ModuleBase", "../core/base/ModuleBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleID(extras) {
    _reporterNs.report("ModuleID", "../game/config/ModuleID", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJishiModule(extras) {
    _reporterNs.report("JishiModule", "../module/jishi/JishiModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainModule(extras) {
    _reporterNs.report("MainModule", "../module/main/MainModule", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ModuleID = _unresolved_2.ModuleID;
    }, function (_unresolved_3) {
      JishiModule = _unresolved_3.default;
    }, function (_unresolved_4) {
      MainModule = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2ba4BhOmpF64HUIEDFUawI", "ModuleManager", undefined);

      __checkObsolete__(['director']);

      _export("default", ModuleManager = class ModuleManager {
        constructor() {
          this._moduDic = {};

          /**
           * module打开状态
           */
          this._moduOnOff = {};
          this.currentMduId = void 0;
        }

        start() {
          let self = this;
          self.initModule();
        }

        initModule() {
          let self = this;
          let moduDic = self._moduDic;
          moduDic[(_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).MAIN] = new (_crd && MainModule === void 0 ? (_reportPossibleCrUseOfMainModule({
            error: Error()
          }), MainModule) : MainModule)((_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).MAIN); //主界面

          moduDic[(_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).JISHI] = new (_crd && JishiModule === void 0 ? (_reportPossibleCrUseOfJishiModule({
            error: Error()
          }), JishiModule) : JishiModule)((_crd && ModuleID === void 0 ? (_reportPossibleCrUseOfModuleID({
            error: Error()
          }), ModuleID) : ModuleID).JISHI); //集市界面
        }
        /**
         *
         * @param moduleId
         */

        /** 打开模块
         *
         */


        openModu(moduleId, modOpenData = null) {
          let self = this;
          if (moduleId) moduleId = moduleId;
          let modu = this._moduDic[moduleId];
          if (!modu) return;

          if (this.currentMduId && this.currentMduId != moduleId) {
            this.closeModu(this.currentMduId);
          }

          self._moduOnOff[moduleId] = modu.open(modOpenData, true);
        }

        closeModu(moduleId) {
          let self = this;
          let modu = this._moduDic[moduleId];
          if (!modu) return;
          modu.close();
          if (!self._moduOnOff[moduleId]) return;
          self._moduOnOff[moduleId] = false;
        }

      }); // const mduManger = new ModuleManager();
      // export default mduManger;


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d78b6051a2f66b4d4859a87be6cc40737ac452ae.js.map