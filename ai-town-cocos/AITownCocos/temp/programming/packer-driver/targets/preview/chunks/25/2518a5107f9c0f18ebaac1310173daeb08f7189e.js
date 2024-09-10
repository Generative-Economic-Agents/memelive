System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Tools, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd019nO/WNJtYV/sJMjTuAs", "Tools", undefined);

      __checkObsolete__(['Vec2']);

      _export("default", Tools = class Tools {
        static distancePoint(src, des) {
          return Math.sqrt((des.x - src.x) * (des.x - src.x) + (des.y - src.y) * (des.y - src.y));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2518a5107f9c0f18ebaac1310173daeb08f7189e.js.map