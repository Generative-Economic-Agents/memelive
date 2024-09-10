System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ListItemComponent, loginCreateRoleListComponent, _crd;

  function _reportPossibleCrUseOfListItemComponent(extras) {
    _reporterNs.report("ListItemComponent", "../game/components/ListItemComponent", _context.meta, extras);
  }

  _export("loginCreateRoleListComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ListItemComponent = _unresolved_2.ListItemComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbd982ov1VBppLICKIxGhMO", "loginCreateRoleListComponent", undefined);

      _export("loginCreateRoleListComponent", loginCreateRoleListComponent = class loginCreateRoleListComponent extends (_crd && ListItemComponent === void 0 ? (_reportPossibleCrUseOfListItemComponent({
        error: Error()
      }), ListItemComponent) : ListItemComponent) {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a859219f95745eead3d70ce69654273ad0a64ce8.js.map