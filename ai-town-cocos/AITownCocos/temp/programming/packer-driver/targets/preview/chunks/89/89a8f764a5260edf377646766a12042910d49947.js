System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, mduManger, ModuleBase, _crd;

  function _reportPossibleCrUseOfmduManger(extras) {
    _reporterNs.report("mduManger", "../../game/App", _context.meta, extras);
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
      mduManger = _unresolved_2.mduManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9e9c3fmHdInp0mmtoKuLrq", "ModuleBase", undefined);

      __checkObsolete__(['director', 'Scene']);

      _export("default", ModuleBase = class ModuleBase {
        constructor(moduleId) {
          this.moduleId = void 0;

          /**
           * 打开模块(该方法不允许被子类重写)
           * 返回值：是否成功打开
           */
          this.open = function (openData, mgr) {
            if (openData === void 0) {
              openData = null;
            }

            if (mgr === void 0) {
              mgr = false;
            }

            var self = this;

            if (!mgr) {
              (_crd && mduManger === void 0 ? (_reportPossibleCrUseOfmduManger({
                error: Error()
              }), mduManger) : mduManger).openModu(self.moduleId, openData);
              return false;
            }

            if (!self._inited) {
              self.init();
              self._inited = true;
            }

            self.onOpen(openData);
            return true;
          };

          this.moduleId = moduleId;
        }
        /**每次模块打开完成时调用 */


        onOpen(openData) {//throw Error('onOpen方法需子类重写');
        }

        closeModu(moduleId) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89a8f764a5260edf377646766a12042910d49947.js.map