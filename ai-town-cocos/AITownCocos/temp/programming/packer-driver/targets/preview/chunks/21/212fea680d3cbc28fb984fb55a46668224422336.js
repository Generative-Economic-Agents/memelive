System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ModuleBase, MainViewMediator, MainModule, _crd;

  function _reportPossibleCrUseOfModuleBase(extras) {
    _reporterNs.report("ModuleBase", "../../core/base/ModuleBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainViewMediator(extras) {
    _reporterNs.report("MainViewMediator", "./MainViewMediator", _context.meta, extras);
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
      ModuleBase = _unresolved_2.default;
    }, function (_unresolved_3) {
      MainViewMediator = _unresolved_3.MainViewMediator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c136xqGmVPpZ1ScmB/Zfwb", "MainModule", undefined);

      __checkObsolete__(['director']);

      _export("default", MainModule = class MainModule extends (_crd && ModuleBase === void 0 ? (_reportPossibleCrUseOfModuleBase({
        error: Error()
      }), ModuleBase) : ModuleBase) {
        constructor(moduleId) {
          super(moduleId);
          this.mediator = void 0;
          var s = this;
          s.addEventListeners();
          MainModule.ins = s;
        }

        addEventListeners() {
          var s = this;
        }

        init() {
          var self = this;
          self.mediator = new (_crd && MainViewMediator === void 0 ? (_reportPossibleCrUseOfMainViewMediator({
            error: Error()
          }), MainViewMediator) : MainViewMediator)(self);
        }
        /**打开创角面板 */


        onOpen(openData) {
          if (openData === void 0) {
            openData = null;
          }

          var self = this;

          if (self.mediator.weeked) {
            return;
          } else {
            self.mediator.open(openData);
            return true;
          }
        }
        /**关闭创角面板 */


        close() {
          var self = this;

          if (self.mediator) {
            self.mediator.close();
            self.mediator.weeked = false;
          }
        } // /**
        //  *
        //  * @param moduleId
        //  */
        //  public openModu(data:any = null) {
        //   super.openModu(data);
        // }
        // public closeModu(moduleId: string): void {}


      }); // const mainModule = new MainModule();
      // export default mainModule;


      MainModule.ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=212fea680d3cbc28fb984fb55a46668224422336.js.map