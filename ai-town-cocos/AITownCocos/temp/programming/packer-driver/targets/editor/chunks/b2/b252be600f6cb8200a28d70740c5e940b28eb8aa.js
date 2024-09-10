System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ModuleBase, JishiViewMediator, JishiModule, _crd;

  function _reportPossibleCrUseOfModuleBase(extras) {
    _reporterNs.report("ModuleBase", "../../core/base/ModuleBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJishiViewMediator(extras) {
    _reporterNs.report("JishiViewMediator", "./JishiViewMediator", _context.meta, extras);
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
      JishiViewMediator = _unresolved_3.JishiViewMediator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7624elYfgJPhbNnbelK1BzW", "JishiModule", undefined);

      __checkObsolete__(['director']);

      _export("default", JishiModule = class JishiModule extends (_crd && ModuleBase === void 0 ? (_reportPossibleCrUseOfModuleBase({
        error: Error()
      }), ModuleBase) : ModuleBase) {
        constructor(moduleId) {
          super(moduleId);
          this.mediator = void 0;
          let s = this;
          s.addEventListeners();
          JishiModule.ins = s;
        }

        addEventListeners() {
          let s = this;
        }

        init() {
          let self = this;
          self.mediator = new (_crd && JishiViewMediator === void 0 ? (_reportPossibleCrUseOfJishiViewMediator({
            error: Error()
          }), JishiViewMediator) : JishiViewMediator)(self);
        }
        /**打开创角面板 */


        onOpen(openData = null) {
          let self = this;

          if (self.mediator.weeked) {
            return;
          } else {
            self.mediator.open(openData);
            return true;
          }
        }
        /**关闭创角面板 */


        close() {
          let self = this;

          if (self.mediator) {
            self.mediator.close();
            self.mediator.weeked = false;
          }
        }

      });

      JishiModule.ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b252be600f6cb8200a28d70740c5e940b28eb8aa.js.map