System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NPCPartDisplay, RolePartIcon, loginModel, _crd;

  function _reportPossibleCrUseOfNPCPartDisplay(extras) {
    _reporterNs.report("NPCPartDisplay", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRolePartIcon(extras) {
    _reporterNs.report("RolePartIcon", "../StaticUtils/NPCConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NPCPartDisplay = _unresolved_2.NPCPartDisplay;
      RolePartIcon = _unresolved_2.RolePartIcon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ee36rK6idPx6kJai0t0f88", "loginModel", undefined);

      loginModel = class loginModel {
        constructor() {
          this.body = {
            id: 900,
            iconValue: (_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
              error: Error()
            }), RolePartIcon) : RolePartIcon).body[0],
            roleValue: (_crd && NPCPartDisplay === void 0 ? (_reportPossibleCrUseOfNPCPartDisplay({
              error: Error()
            }), NPCPartDisplay) : NPCPartDisplay).body[0]
          };
          this.hair = {
            id: 100,
            iconValue: (_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
              error: Error()
            }), RolePartIcon) : RolePartIcon).hair.man[0],
            roleValue: (_crd && NPCPartDisplay === void 0 ? (_reportPossibleCrUseOfNPCPartDisplay({
              error: Error()
            }), NPCPartDisplay) : NPCPartDisplay).hair.man[0]
          };
          this.pants = {
            id: 300,
            iconValue: (_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
              error: Error()
            }), RolePartIcon) : RolePartIcon).pants[0],
            roleValue: (_crd && NPCPartDisplay === void 0 ? (_reportPossibleCrUseOfNPCPartDisplay({
              error: Error()
            }), NPCPartDisplay) : NPCPartDisplay).pants[0]
          };
          this.shirt = {
            id: 200,
            iconValue: (_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
              error: Error()
            }), RolePartIcon) : RolePartIcon).shirt[0],
            roleValue: (_crd && NPCPartDisplay === void 0 ? (_reportPossibleCrUseOfNPCPartDisplay({
              error: Error()
            }), NPCPartDisplay) : NPCPartDisplay).shirt[0]
          };
          this.currentType = {
            id: 100,
            iconValue: (_crd && RolePartIcon === void 0 ? (_reportPossibleCrUseOfRolePartIcon({
              error: Error()
            }), RolePartIcon) : RolePartIcon).hair.man[0],
            roleValue: (_crd && NPCPartDisplay === void 0 ? (_reportPossibleCrUseOfNPCPartDisplay({
              error: Error()
            }), NPCPartDisplay) : NPCPartDisplay).hair.man[0]
          };
          this.currentName = "hair";
          this.character = void 0;
        }

      };

      _export("default", new loginModel());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c1844510d293e4eb8e1fecbcea0453068043252.js.map