System.register(["__unresolved_0", "cc", "lodash-es", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _, BaseModel, GoumaiItemVO, ZhongziItemVO, JishiModel, _crd;

  function _reportPossibleCrUseOfBaseModel(extras) {
    _reporterNs.report("BaseModel", "../../core/base/BaseModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoumaiItemVO(extras) {
    _reporterNs.report("GoumaiItemVO", "./GoumaiItemVO", _context.meta, extras);
  }

  function _reportPossibleCrUseOfZhongziItemVO(extras) {
    _reporterNs.report("ZhongziItemVO", "./ZhongziItemVO", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_lodashEs) {
      _ = _lodashEs;
    }, function (_unresolved_2) {
      BaseModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      GoumaiItemVO = _unresolved_3.default;
    }, function (_unresolved_4) {
      ZhongziItemVO = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc44bXsRTdNIpffWVwjbCtR", "JishiModel", undefined);

      _export("default", JishiModel = class JishiModel extends (_crd && BaseModel === void 0 ? (_reportPossibleCrUseOfBaseModel({
        error: Error()
      }), BaseModel) : BaseModel) {
        get storelist() {
          return this._storelist;
        }

        set storelist(value) {
          this._storelist = value;

          _.remove(this._storelist, item => item["seeds"].amount === 0);
        }

        constructor() {
          super(); //netRsp.on(this);

          this._buyzhongziArr = [];
          this.hasPlSell = void 0;
          this.hasPlSelect = void 0;
          this.hasSelectData = [];
          this.currentTabName = void 0;
          this.currentchushouTab = void 0;
          this._storelist = void 0;
          this.shoplist = void 0;
          this._buyDaojiArr = [];
          this._haveZhongziArr = [];
          this.shoplist = {
            items: [{
              seedId: 1,
              name: "猫爬架1",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }, {
              seedId: 2,
              name: "猫爬架1",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }, {
              seedId: 3,
              name: "猫爬架1",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }, {
              seedId: 4,
              name: "猫爬架3",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }, {
              seedId: 5,
              name: "猫爬架1",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }, {
              seedId: 6,
              name: "猫爬架1",
              restrict: 0,
              quanta: 10,
              quota: 100,
              dimension: 1,
              subType: 1,
              icon: "",
              salePrice: 10,
              sell: 1,
              amount: 10,
              buyPrice: 20
            }],
            seeds: [{
              index: 0
            }, {
              index: 0
            }, {
              index: 0
            }, {
              index: 0
            }, {
              index: 0
            }]
          };
        }
        /**
         * 获取购买的种子列表
         * @returns 
         */


        getBuyZhongzi() {
          if (this._buyzhongziArr.length > 0) {
            return this._buyzhongziArr;
          }

          for (var i = 0; i < 7; i++) {
            var itemvo = new (_crd && GoumaiItemVO === void 0 ? (_reportPossibleCrUseOfGoumaiItemVO({
              error: Error()
            }), GoumaiItemVO) : GoumaiItemVO)();
            itemvo.icon = "";
            itemvo.name = "种子" + i;
            itemvo.info = "种子info" + i;
            itemvo.suoyoudu = i;
            itemvo.xilie = i;
            itemvo.yanse = i;
            itemvo.num = 1000 + i;

            this._buyzhongziArr.push(itemvo);
          }

          return this._buyzhongziArr;
        }

        /**
         * 获取购买道具列表
         */
        getBuyDaoju() {
          if (this._buyDaojiArr.length > 0) {
            return this._buyDaojiArr;
          }

          for (var i = 0; i < 7; i++) {
            var itemvo = new (_crd && GoumaiItemVO === void 0 ? (_reportPossibleCrUseOfGoumaiItemVO({
              error: Error()
            }), GoumaiItemVO) : GoumaiItemVO)();
            itemvo.icon = "";
            itemvo.name = "道具" + i;
            itemvo.info = "道具info" + i;
            itemvo.suoyoudu = i;
            itemvo.xilie = i;
            itemvo.yanse = i;
            itemvo.num = 1000 + i;

            this._buyDaojiArr.push(itemvo);
          }

          return this._buyDaojiArr;
        }

        /**
         * 获取已拥有种子列表
         * @returns 
         */
        getHaveZhongzi() {
          if (this._haveZhongziArr.length > 0) {
            return this._haveZhongziArr;
          }

          for (var i = 0; i < 7; i++) {
            var itemvo = new (_crd && ZhongziItemVO === void 0 ? (_reportPossibleCrUseOfZhongziItemVO({
              error: Error()
            }), ZhongziItemVO) : ZhongziItemVO)();
            itemvo.icon = "";
            itemvo.name = "have种子" + i;
            itemvo.xilie = i;
            itemvo.yanse = i;
            itemvo.pinji = i;
            itemvo.saiji = i;
            itemvo.num = 1000 + i;

            this._haveZhongziArr.push(itemvo);
          }

          return this._buyDaojiArr;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=215d6c3a5e63c03ee3ae54c7146e2d1cc53745e1.js.map