System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, PlantOprState, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89876wXI0FMT4d6cGR9sAPk", "PlantOprState", undefined);

      _export("default", PlantOprState = class PlantOprState {});

      //土地操作状态及事件
      PlantOprState.BOZHONG = "bozhong";
      PlantOprState.SHOWOPRGROUP = "SHOWOPRGROUP";
      PlantOprState.SHOWSUIJI = "SHOWSUIJI";
      PlantOprState.JIAOSHUI = "JIAOSHUI";
      PlantOprState.SHOUHUO = "SHOUHUO";
      //土地状态
      PlantOprState.PlantState = {
        KONG: "",
        WEIJIESUO: "",
        PLANT: ""
      };

      /**
       * 植物生长状态
       */
      PlantOprState.PlantGrowState = {
        BOZHONGQI: "",
        CHENGZHANGQI: "",
        CHENGSHUQI: "",
        GANHEQI: ""
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c12f9397b81b965756c0c40ecb145671a604d0f.js.map