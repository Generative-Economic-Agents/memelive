System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ShowMsg2Component;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e862LJhZxAuYfk9yfCt60s", "ShowMsg2Component", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowMsg2Component", ShowMsg2Component = (_dec = ccclass('ShowMsg2Component'), _dec(_class = class ShowMsg2Component extends Component {
        start() {
          this.scheduleOnce(this.closeself, 8);
        }

        closeself(d) {
          if (this.node.parent) {
            this.node.removeFromParent();
            this.node.destroy();
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29336f64414e218d57d4254a252d21e412d788e4.js.map