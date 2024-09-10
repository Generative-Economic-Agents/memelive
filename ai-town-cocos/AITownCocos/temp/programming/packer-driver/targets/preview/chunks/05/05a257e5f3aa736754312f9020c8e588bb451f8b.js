System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ArrUtils, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e35epxu5RDC5KJANeEBCpN", "ArrUtils", undefined);

      _export("default", ArrUtils = class ArrUtils {
        /**
         * 
         * @param arr 
         * @param attrname 
         * @param type 0:降序,1:升序
         */
        static mSort(arr, attrname, type) {
          if (type === void 0) {
            type = 1;
          }

          console.log("sort before:", arr);

          if (type === 1) {
            arr.sort((b, a) => a[attrname] - b[attrname]);
          } else if (type === 0) {
            arr.sort((b, a) => b[attrname] - a[attrname]);
          }

          console.log("sort after:", arr);
        }

      });

      ArrUtils.testArr = [{
        id: 0,
        name: "张三",
        age: 20
      }, {
        id: 1,
        name: "张三",
        age: 10
      }, {
        id: 2,
        name: "张三",
        age: 220
      }, {
        id: 3,
        name: "张三",
        age: 20
      }, {
        id: 4,
        name: "张三",
        age: 2
      }];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05a257e5f3aa736754312f9020c8e588bb451f8b.js.map